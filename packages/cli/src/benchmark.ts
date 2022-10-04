import type {RenderMediaOptions} from '@remotion/renderer';
import {getCompositions, renderMedia} from '@remotion/renderer';
import path from 'path';
import {chalk} from './chalk';
import {Log} from './log';
import {makeProgressBar} from './make-progress-bar';
import {parsedCli, quietFlagProvided} from './parse-command-line';
import {createOverwriteableCliOutput} from './progress-bar';
import {bundleOnCli} from './setup-cache';

const DEFUALT_RUNS = 3;
const DEFAULT_COMP_ID = 'Main';

const getValidCompositions = async (bundleLoc: string) => {
	const compositionArg: string = parsedCli.compositions ?? DEFAULT_COMP_ID;

	const comps = await getCompositions(bundleLoc);

	const ids = compositionArg.split(',').map((c) => c.trim());

	return ids.map((compId) => {
		const composition = comps.find((c) => c.id === compId);

		if (!composition) {
			throw new Error(`No composition with the ID "${compId}" found.`);
		}

		return composition;
	});
};

const getValidConcurrency = () => {
	const {concurrencies} = parsedCli;

	if (!concurrencies) {
		return undefined;
	}

	return (concurrencies as string)
		.split(',')
		.map((c) => parseInt(c.trim(), 10));
};

const runBenchmark = async (
	runs: number,
	options: RenderMediaOptions,
	onProgress?: (run: number, progress: number) => void
) => {
	const timeTaken: number[] = [];
	for (let run = 0; run < runs; ++run) {
		const startTime = performance.now();
		await renderMedia({
			...options,
			onProgress: ({progress}) => onProgress?.(run, progress),
		});
		const endTime = performance.now();

		timeTaken.push(endTime - startTime);
	}

	return timeTaken;
};

const formatTime = (time: number) => {
	let ret = '';
	const hours = Math.floor(time / (60 * 60 * 1000));
	if (hours) {
		ret = `${hours}h`;
	}

	time %= 60 * 60 * 1000;
	const minutes = Math.floor(time / (60 * 1000));

	if (minutes) {
		ret = `${ret}${minutes}m`;
	}

	time %= 60 * 1000;
	const seconds = (time / 1000).toFixed(5);

	if (seconds) {
		ret = `${ret}${seconds}s`;
	}

	return ret;
};

const avg = (time: number[]) =>
	time.reduce((prev, curr) => prev + curr) / time.length;

const stdDev = (time: number[]) => {
	const mean = avg(time);
	return Math.sqrt(
		time.map((x) => (x - mean) ** 2).reduce((a, b) => a + b) / time.length
	);
};

const getResults = (results: number[], runs: number) => {
	const mean = avg(results);
	const dev = stdDev(results);
	const max = Math.max(...results);
	const min = Math.min(...results);

	return `    Time (${chalk.green('mean')} ± ${chalk.green(
		'σ'
	)}): \t ${chalk.green(formatTime(mean))} ± ${chalk.green(
		formatTime(dev)
	)}\n    Range (${chalk.blue('min')} ... ${chalk.red('max')}): \t ${chalk.blue(
		formatTime(min)
	)} ... ${chalk.red(formatTime(max))} \t ${chalk.gray(`${runs} runs`)}
	`;
};

type BenchmarkProgressBarOptions = {
	totalRuns: number;
	run: number;
	progress: number;
	doneIn: string | null;
};

const makeBenchmarkProgressBar = ({
	totalRuns,
	run,
	progress,
	doneIn,
}: BenchmarkProgressBarOptions) => {
	const totalProgress = (run + progress) / totalRuns;

	return [
		`Rendering (${run + 1} out of ${totalRuns} runs)`,
		makeProgressBar(totalProgress),
		doneIn === null
			? `${(totalProgress * 100).toFixed(2)}% `
			: chalk.gray(doneIn),
	].join(' ');
};

export const benchmarkCommand = async (remotionRoot: string) => {
	const runs: number = parsedCli.runs ?? DEFUALT_RUNS;
	const {codec} = parsedCli;

	const filePath = parsedCli._[1];

	if (!filePath) {
		Log.error('No entry file passed.');
		Log.info('Pass an additional argument specifying the entry file');
		Log.info();
		Log.info(`$ remotion benchmark <entry file>`);
		process.exit(1);
	}

	const fullPath = path.join(process.cwd(), filePath);

	const bundleLocation = await bundleOnCli({
		fullPath,
		publicDir: null,
		remotionRoot,
		steps: [],
	});

	const compositions = await getValidCompositions(bundleLocation);

	const benchmark: Record<string, Record<string, number[]>> = {};

	const concurrency = getValidConcurrency();

	let count = 1;

	for (const composition of compositions) {
		Log.info();

		benchmark[composition.id] = {};
		if (concurrency) {
			for (const con of concurrency) {
				const benchmarkProgress = createOverwriteableCliOutput(
					quietFlagProvided()
				);
				Log.info(
					`${chalk.bold(`Benchmark #${count++}:`)} ${chalk.gray(
						`composition=${composition.id} concurrency=${con}`
					)}`
				);

				const timeTaken = await runBenchmark(
					runs,
					{
						codec,
						composition,
						serveUrl: bundleLocation,
						concurrency: con,
					},
					(run, progress) => {
						benchmarkProgress.update(
							makeBenchmarkProgressBar({
								totalRuns: runs,
								run,
								doneIn: null,
								progress,
							})
						);
					}
				);

				benchmarkProgress.update(getResults(timeTaken, runs));

				benchmark[composition.id][`${con}`] = timeTaken;
			}
		} else {
			Log.info(
				`${chalk.bold(`Benchmark #${count++}:`)} ${chalk.gray(
					`composition=${composition.id}`
				)}`
			);
			const benchmarkProgress = createOverwriteableCliOutput(
				quietFlagProvided()
			);
			const timeTaken = await runBenchmark(
				runs,
				{
					codec: 'h264',
					composition,
					serveUrl: bundleLocation,
				},
				(run, progress) => {
					benchmarkProgress.update(
						makeBenchmarkProgressBar({
							totalRuns: runs,
							run,
							doneIn: null,
							progress,
						})
					);
				}
			);

			benchmarkProgress.update('');
			benchmarkProgress.update(getResults(timeTaken, runs));

			benchmark[composition.id].default = timeTaken;
		}
	}

	Log.info();
};
