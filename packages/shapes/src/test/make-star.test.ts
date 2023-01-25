import {expect, test} from 'vitest';
import {makeStar} from '../utils/make-star';

test('Should be able to make a triangle path', () => {
	const starPath = makeStar({
		points: 5,
		innerRadius: 150,
		outerRadius: 200,
	});

	expect(starPath).toEqual({
		path: 'M 200 0 L 288.167787843871 78.64745084375788 L 390.21130325903073 138.19660112501052 L 342.658477444273 246.3525491562421 L 317.55705045849464 361.8033988749895 L 200 350 L 82.4429495415054 361.8033988749895 L 57.34152255572698 246.35254915624213 L 9.788696740969272 138.19660112501055 L 111.83221215612902 78.6474508437579 L 200 0',
		width: 400,
		height: 400,
		transformOrigin: '200 200',
		instructions: [
			{type: 'M', x: 200, y: 0},
			{type: 'L', x: 288.167787843871, y: 78.64745084375788},
			{type: 'L', x: 390.21130325903073, y: 138.19660112501052},
			{type: 'L', x: 342.658477444273, y: 246.3525491562421},
			{type: 'L', x: 317.55705045849464, y: 361.8033988749895},
			{type: 'L', x: 200, y: 350},
			{type: 'L', x: 82.4429495415054, y: 361.8033988749895},
			{type: 'L', x: 57.34152255572698, y: 246.35254915624213},
			{type: 'L', x: 9.788696740969272, y: 138.19660112501055},
			{type: 'L', x: 111.83221215612902, y: 78.6474508437579},
			{type: 'L', x: 200, y: 0},
		],
	});
});
