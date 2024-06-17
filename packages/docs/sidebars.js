module.exports = {
  apiSidebar: [
    "api",
    {
      type: "category",
      label: "Command line",
      link: {
        type: "doc",
        id: "cli/cli",
      },
      collapsed: true,
      items: [
        "cli/studio",
        "cli/render",
        "cli/still",
        "cli/compositions",
        "cli/bundle",
        {
          type: "category",
          label: "lambda",
          link: {
            type: "doc",
            id: "lambda/cli",
          },
          items: [
            "lambda/cli/sites",
            "lambda/cli/functions",
            "lambda/cli/render",
            "lambda/cli/still",
            "lambda/cli/policies",
            "lambda/cli/compositions",
            "lambda/cli/regions",
            "lambda/cli/quotas",
          ],
        },
        {
          type: "category",
          label: "cloudrun",
          link: {
            type: "doc",
            id: "cloudrun/cli",
          },
          items: [
            "cloudrun/cli/sites",
            "cloudrun/cli/services",
            "cloudrun/cli/render",
            "cloudrun/cli/still",
            "cloudrun/cli/permissions",
            "cloudrun/cli/regions",
          ],
        },
        "cli/benchmark",
        {
          type: "category",
          label: "browser",
          link: {
            type: "doc",
            id: "cli/browser/index",
          },
          items: ["cli/browser/ensure"],
        },
        "cli/versions",
        "cli/upgrade",
        "cli/ffmpeg",
        "cli/ffprobe",
        "cli/gpu",
        "cli/help",
      ],
    },
    "config",
    {
      type: "html",
      value:
        '<hr style="margin-top: 4px; margin-bottom: 4px; border-bottom: none"/>', // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    {
      type: "category",
      label: "remotion",
      link: {
        type: "doc",
        id: "remotion",
      },
      items: [
        "absolute-fill",
        "audio",
        "calculate-metadata",
        "cancel-render",
        "composition",
        "continue-render",
        "delay-render",
        "easing",
        "folder",
        "freeze",
        "get-input-props",
        "get-remotion-environment",
        "getstaticfiles",
        "iframe",
        "img",
        "interpolate-colors",
        "interpolate",
        "loop",
        "measure-spring",
        "offthreadvideo",
        "prefetch",
        "random",
        "register-root",
        "sequence",
        "series",
        "spring",
        "staticfile",
        "still",
        "use-buffer-state",
        "use-current-frame",
        "use-current-scale",
        "use-video-config",
        "version",
        "video",
        "watchstaticfile",
        "null",
        "clipper",
      ],
    },
    {
      type: "category",
      label: "@remotion/bundler",
      link: {
        type: "doc",
        id: "bundler",
      },
      items: ["bundle"],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "renderer",
      },
      label: "@remotion/renderer",
      items: [
        "renderer/get-compositions",
        "renderer/select-composition",
        "renderer/render-media",
        "renderer/render-frames",
        "renderer/render-still",
        "renderer/stitch-frames-to-video",
        "renderer/open-browser",
        "renderer/ensure-browser",
        "renderer/make-cancel-signal",
        "renderer/ensure-ffmpeg",
        "renderer/ensure-ffprobe",
        "renderer/get-can-extract-frames-fast",
        "renderer/get-video-metadata",
        "renderer/get-silent-parts",
        "renderer/extract-audio",
      ],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "player/installation",
      },

      label: "@remotion/player",
      items: [
        {
          type: "link",
          href: "/docs/player",
          label: "Guide + Examples",
        },
        "player/api",
        "player/thumbnail",
      ],
    },
    {
      type: "category",
      label: "@remotion/gif",
      link: {
        type: "doc",
        id: "gif/index",
      },
      items: ["gif/gif", "gif/get-gif-duration-in-seconds", "gif/preload-gif"],
    },
    {
      type: "category",
      label: "@remotion/media-utils",
      link: {
        type: "doc",
        id: "media-utils/index",
      },
      items: [
        "audio-buffer-to-data-url",
        "get-audio-data",
        "get-audio-duration-in-seconds",
        "get-video-metadata",
        "get-waveform-portion",
        "use-audio-data",
        "visualize-audio",
        "get-image-dimensions",
      ],
    },

    {
      type: "category",
      label: "@remotion/motion-blur",
      link: {
        type: "doc",
        id: "motion-blur/index",
      },
      items: ["motion-blur/trail", "motion-blur/camera-motion-blur"],
    },
    {
      type: "category",
      label: "@remotion/lambda",
      link: {
        type: "doc",
        id: "lambda/api",
      },
      items: [
        {
          type: "link",
          href: "/docs/lambda/cli",
          label: "CLI Reference",
        },
        "lambda/estimateprice",
        "lambda/deployfunction",
        "lambda/deletefunction",
        "lambda/getfunctioninfo",
        "lambda/getfunctions",
        "lambda/deletesite",
        "lambda/deploysite",
        "lambda/getawsclient",
        "lambda/getregions",
        "lambda/getsites",
        "lambda/downloadmedia",
        "lambda/deleterender",
        "lambda/getuserpolicy",
        "lambda/getrolepolicy",
        "lambda/getcompositionsonlambda",
        "lambda/getorcreatebucket",
        "lambda/getrenderprogress",
        "lambda/presignurl",
        "lambda/rendermediaonlambda",
        "lambda/renderstillonlambda",
        "lambda/simulatepermissions",
        "lambda/speculatefunctionname",
        "lambda/validatewebhooksignature",
      ],
    },
    {
      type: "category",
      label: "@remotion/cloudrun",
      link: {
        type: "doc",
        id: "cloudrun/api",
      },
      items: [
        {
          type: "link",
          href: "/docs/cloudrun/cli",
          label: "CLI Reference",
        },
        "cloudrun/getserviceinfo",
        "cloudrun/deployservice",
        "cloudrun/deleteservice",
        "cloudrun/getservices",
        "cloudrun/speculateservicename",
        "cloudrun/getregions",
        "cloudrun/deploysite",
        "cloudrun/deletesite",
        "cloudrun/getsites",
        "cloudrun/getorcreatebucket",
        "cloudrun/rendermediaoncloudrun",
        "cloudrun/renderstilloncloudrun",
        "cloudrun/testpermissions",
      ],
    },
    {
      type: "category",
      label: "@remotion/tailwind",
      link: {
        type: "doc",
        id: "tailwind/tailwind",
      },
      items: ["tailwind/enable-tailwind"],
    },
    {
      type: "category",
      label: "@remotion/enable-scss",
      link: {
        type: "doc",
        id: "enable-scss/overview",
      },
      items: ["enable-scss/enable-scss"],
    },
    {
      type: "category",
      label: "@remotion/three",
      link: {
        type: "doc",
        id: "three",
      },
      items: [
        "three-canvas",
        "use-video-texture",
        "use-offthread-video-texture",
      ],
    },
    {
      type: "category",
      label: "@remotion/skia",
      link: {
        type: "doc",
        id: "skia/skia",
      },
      items: ["skia/enable-skia", "skia/skia-canvas"],
    },
    {
      type: "category",
      label: "@remotion/lottie",
      link: {
        type: "doc",
        id: "lottie/lottie-index",
      },
      items: [
        "lottie/lottie-comp",
        "lottie/getlottiemetadata",
        "lottie/lottie-staticfile",
        "lottie/lottie-remote",
        "lottie/lottie-lottiefiles",
      ],
    },
    {
      type: "category",
      label: "@remotion/preload",
      link: {
        type: "doc",
        id: "preload/preload",
      },
      items: [
        "preload/preload-video",
        "preload/preload-audio",
        "preload/preload-image",
        "preload/preload-font",
        "preload/resolve-redirect",
      ],
    },
    {
      type: "category",
      label: "@remotion/paths",
      link: {
        type: "doc",
        id: "paths/index",
      },
      items: [
        "paths/get-length",
        "paths/get-point-at-length",
        "paths/get-tangent-at-length",
        "paths/get-instruction-index-at-length",
        "paths/reverse-path",
        "paths/normalize-path",
        "paths/interpolate-path",
        "paths/evolve-path",
        "paths/reset-path",
        "paths/get-subpaths",
        "paths/translate-path",
        "paths/warp-path",
        "paths/scale-path",
        "paths/get-bounding-box",
        "paths/extend-viewbox",
        "paths/parse-path",
        "paths/serialize-instructions",
        "paths/reduce-instructions",
        "paths/get-parts",
      ],
    },
    {
      type: "category",
      label: "@remotion/noise",
      link: {
        type: "doc",
        id: "noise/index",
      },
      items: ["noise/noise-2d", "noise/noise-3d", "noise/noise-4d"],
    },
    {
      type: "category",
      label: "@remotion/google-fonts",
      link: {
        type: "doc",
        id: "google-fonts/google-fonts",
      },
      items: [
        "google-fonts/load-font",
        "google-fonts/get-available-fonts",
        "google-fonts/get-info",
      ],
    },
    {
      type: "category",
      label: "@remotion/shapes",
      link: {
        type: "doc",
        id: "shapes/index",
      },
      items: [
        "shapes/rect",
        "shapes/triangle",
        "shapes/circle",
        "shapes/ellipse",
        "shapes/star",
        "shapes/pie",
        "shapes/polygon",
        "shapes/make-rect",
        "shapes/make-triangle",
        "shapes/make-circle",
        "shapes/make-ellipse",
        "shapes/make-star",
        "shapes/make-pie",
        "shapes/make-polygon",
      ],
    },
    {
      type: "category",
      label: "@remotion/rive",
      link: {
        type: "doc",
        id: "rive/index",
      },
      items: ["rive/index", "rive/remotionrivecanvas"],
    },
    {
      type: "category",
      label: "@remotion/studio",
      link: {
        type: "doc",
        id: "studio/api",
      },
      items: [
        "studio/get-static-files",
        "studio/watch-public-folder",
        "studio/watch-static-file",
        "studio/write-static-file",
        "studio/delete-static-file",
        "studio/restart-studio",
        "studio/save-default-props",
        "studio/update-default-props",
        "studio/focus-default-props-path",
        "studio/reevaluate-composition",
      ],
    },
    {
      type: "category",
      label: "@remotion/transitions",
      link: {
        type: "doc",
        id: "transitions/index",
      },
      items: [
        "transitions/transitionseries",
        {
          type: "category",
          label: "Timings",
          link: {
            type: "doc",
            id: "transitions/timings/index",
          },
          items: [
            "transitions/timings/springtiming",
            "transitions/timings/lineartiming",
            "transitions/timings/custom",
          ],
        },
        {
          type: "category",
          label: "Presentations",
          link: {
            type: "doc",
            id: "transitions/presentations/index",
          },
          items: [
            "transitions/presentations/fade",
            "transitions/presentations/slide",
            "transitions/presentations/wipe",
            "transitions/presentations/flip",
            "transitions/presentations/clock-wipe",
            {
              type: "doc",
              id: "transitions/presentations/cube",
              className: "pro-item",
            },
            "transitions/presentations/custom",
            "transitions/audio-transitions",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "@remotion/zod-types",
      link: {
        type: "doc",
        id: "zod-types/index",
      },
      items: ["zod-types/z-color", "zod-types/z-textarea"],
    },
    {
      type: "category",
      label: "@remotion/layout-utils",
      link: {
        type: "doc",
        id: "layout-utils/index",
      },
      items: [
        "layout-utils/best-practices",
        "layout-utils/measure-text",
        "layout-utils/fill-text-box",
        "layout-utils/fit-text",
      ],
    },
    {
      type: "category",
      label: "@remotion/animation-utils",
      link: {
        type: "doc",
        id: "animation-utils/index",
      },
      items: [
        "animation-utils/make-transform",
        "animation-utils/interpolate-styles",
      ],
    },
    {
      type: "category",
      label: "@remotion/install-whisper-cpp",
      link: {
        type: "doc",
        id: "install-whisper-cpp/index",
      },
      items: [
        "install-whisper-cpp/install-whisper-cpp",
        "install-whisper-cpp/download-whisper-model",
        "install-whisper-cpp/transcribe",
        "install-whisper-cpp/convert-to-captions",
      ],
    },
    {
      type: "category",
      label: "@remotion/fonts",
      link: {
        type: "doc",

        id: "fonts-api/fonts-api",
      },
      items: ["fonts-api/load-font"],
    },
  ],
  mainSidebar: [
    {
      type: "category",
      label: "Getting started",
      items: [
        "getting-started",
        "the-fundamentals",
        "animating-properties",
        "reusability",
        "preview",
        "render",
      ],
    },
    {
      type: "category",
      label: "Designing videos",
      items: [
        "transforms",
        "assets",
        "layers",
        "transitioning",
        "using-audio",
        "fonts",
        "measuring",
        "using-randomness",
        "audio-visualization",
        "noise-visualization",
        "video-manipulation",
        "animation-math",
      ],
    },
    {
      type: "category",
      label: "Parameterized videos",
      link: {
        type: "doc",
        id: "parameterized-rendering",
      },
      items: [
        "passing-props",
        "schemas",
        "visual-editing",
        "data-fetching",
        "dynamic-metadata",
        "props-resolution",
      ],
    },
    {
      type: "category",
      label: "Studio",
      items: [
        "studio/studio",
        "studio/shortcuts",
        "studio/quick-switcher",
        "studio/deploy-static",
        "studio/deploy-server",
      ],
    },
    {
      type: "category",
      label: "Rendering",
      items: [
        "encoding",
        "stills",
        "scaling",
        "transparent-videos",
        "render-as-gif",
        "overlay",
        "quality",
        "dataset-render",
        "render-all",
        "miscellaneous/video-formats",
        "video-vs-offthreadvideo",
      ],
    },
    {
      type: "category",
      label: "Server-side rendering",
      link: {
        type: "doc",
        id: "ssr",
      },
      items: [
        "ssr",
        "ssr-node",
        "docker",
        "miscellaneous/linux-single-process",
        "gpu",
        "miscellaneous/cloud-gpu",
        "miscellaneous/cloud-gpu-docker",
      ],
    },
    {
      type: "category",
      link: {
        type: "doc",
        id: "player/index",
      },
      label: "Player",
      items: [
        {
          type: "link",
          href: "/docs/player/player",
          label: "API Reference",
        },
        "player/examples",
        "player/scaling",
        "player/integration",
        "player/autoplay",
        "player/current-time",
        "troubleshooting/player-flicker",
        "player/buffer-state",
        "player/preloading",
        "player/premounting",
        "player/best-practices",
      ],
    },

    {
      type: "category",
      label: "Lambda",
      link: {
        type: "doc",
        id: "lambda",
      },
      items: [
        {
          type: "link",
          href: "/docs/lambda/api",
          label: "API Reference",
        },
        "lambda/setup",
        "lambda/authentication",
        "lambda/permissions",
        "lambda/region-selection",
        "lambda/concurrency",
        "lambda/runtime",
        "lambda/disk-size",
        "lambda/faq",
        "lambda/light-client",
        "lambda/custom-layers",
        "lambda/custom-destination",
        "lambda/checklist",
        "lambda/webhooks",
        "lambda/autodelete",
        {
          type: "category",
          label: "Troubleshooting",
          items: [
            "lambda/troubleshooting/debug",
            "lambda/troubleshooting/permissions",
            "lambda/troubleshooting/rate-limit",
            "lambda/troubleshooting/unrecognizedclientexception",
            "lambda/troubleshooting/bucket-disallows-acl",
            "lambda/troubleshooting/security-token",
          ],
        },
        {
          type: "category",
          label: "Using without IAM users",
          link: {
            type: "doc",
            id: "lambda/without-iam/index",
          },
          items: [
            "lambda/without-iam/index",
            "lambda/without-iam/example",
            "lambda/without-iam/ec2",
          ],
        },
        "lambda/php",
        "lambda/go",
        "lambda/python",
        "lambda/serverless-framework-integration",
        "lambda/insights",
        "lambda/multiple-buckets",
        "lambda/how-lambda-works",
        "lambda/bucket-naming",
        "lambda/optimizing-cost",
        "lambda/optimizing-speed",
        "lambda/limits",
        "lambda/changelog",
        "lambda/upgrading",
        "lambda/uninstall",
        "lambda/s3-public-access",
        "lambda/naming-convention",
      ],
    },
    {
      type: "category",
      label: "Cloud Run (Alpha)",
      link: {
        type: "doc",
        id: "cloudrun-alpha",
      },
      items: [
        "cloudrun",
        "cloudrun/setup",
        "cloudrun/permissions",
        "cloudrun/generate-env",
        "cloudrun/region-selection",
        "cloudrun/checklist",
        "cloudrun/instancecount",
        "cloudrun/multiple-buckets",
        "cloudrun/limits",
        "cloudrun/light-client",
        "cloudrun/upgrading",
        "cloudrun/uninstall",
      ],
    },
    {
      type: "category",
      label: "Building apps",
      items: ["brownfield", "video-uploads", "presigned-urls", "font-picker"],
    },
    {
      type: "category",
      label: "Tooling",
      items: [
        "tailwind",
        "env-variables",
        "webpack",
        "legacy-babel",
        "javascript",
        "third-party",
        "miscellaneous/typescript-aliases",
        "figma",
        "spline",
        "after-effects",
      ],
    },
    {
      type: "category",
      label: "Troubleshooting",
      items: [
        "troubleshooting/debug-failed-render",
        "timeout",
        "target-closed",
        "media-playback-error",
        "performance",
        "webpack-dynamic-imports",
        "non-seekable-media",
        "flickering",
        "version-mismatch",
        "enametoolong",
        "slow-method-to-extract-frame",
        "wrong-composition-mount",
        "staticfile-relative-paths",
        "staticfile-remote-urls",
        "troubleshooting/background-image",
        "troubleshooting/nextjs-image",
        "troubleshooting/rosetta",
        "troubleshooting/loading-root-component",
        "troubleshooting/defaultprops-too-big",
        "troubleshooting/could-not-be-parsed-as-a-value-list",
        "troubleshooting/broken-fast-refresh",
        "troubleshooting/timed-out-page-function",
        "troubleshooting/delay-render-proxy",
        "troubleshooting/bundling-bundle",
        "troubleshooting/browser-launch",
        "troubleshooting/sigkill",
      ],
    },
    {
      type: "category",
      label: "Snippets",
      items: [
        "miscellaneous/snippets/accelerated-video",
        "miscellaneous/snippets/player-in-iframe",
        "miscellaneous/snippets/fps-converter",
        "miscellaneous/snippets/use-delay-render",
        "miscellaneous/snippets/offthread-video-while-rendering",
        "miscellaneous/snippets/hls",
        "miscellaneous/snippets/combine-compositions",
        "miscellaneous/snippets/align-duration",
      ],
    },
    {
      type: "link",
      href: "/docs/api",
      label: "API Reference",
    },
    "upgrading",
    {
      type: "link",
      href: "/docs/recorder",
      label: "Recorder",
    },
    {
      type: "category",
      label: "Terminology",
      link: {
        type: "doc",
        id: "terminology",
      },
      items: [
        "terminology/player",
        "terminology/studio",
        "terminology/concurrency",
        "terminology/input-props",
        "terminology/cloud-run-url",
        "terminology/service-name",
        "terminology/entry-point",
        "terminology/root-file",
        "terminology/remotion-root",
        "terminology/public-dir",
        "terminology/serve-url",
        "terminology/bundle",
        "terminology/sequence",
        "terminology/composition",
      ],
    },
    "resources",
    {
      type: "category",
      label: "Migration guides",
      items: [
        "5-0-migration",
        "4-0-migration",
        "3-0-migration",
        "2-0-migration",
      ],
    },
    {
      type: "category",
      label: "Get help",
      link: {
        type: "doc",
        id: "get-help",
      },
      items: [
        {
          type: "link",
          href: "/docs/get-help",
          label: "How to get help",
        },
        {
          type: "link",
          href: "https://remotion.dev/discord",
          label: "Discord",
        },
        {
          type: "link",
          href: "https://remotion.dev/discord",
          label: "GitHub Issues",
        },
        "support",
      ],
    },
    {
      type: "category",
      label: "Miscellaneous",
      items: [
        "security",
        "chromium-flags",
        "miscellaneous/changing-temp-dir",
        "miscellaneous/chrome-headless-shell",
        "miscellaneous/linux-dependencies",
        "gl-options",
        "bun",
        "standalone",
      ],
    },
    {
      type: "category",
      label: "FAQ",
      items: [
        "miscellaneous/render-in-browser",
        "miscellaneous/automatic-duration",
        "miscellaneous/vercel-functions",
        "miscellaneous/render-on-edge",
        "miscellaneous/embed-studio",
        "miscellaneous/absolute-paths",
        "miscellaneous/live-streaming",
        "compare/motion-canvas",
      ],
    },
    {
      type: "category",
      label: "Contributing",
      items: [
        "contributing/index",
        "contributing/feature",
        "contributing/option",
        "contributing/docs",
        "contributing/formatting",
        "contributing/bounty",
        "contributing/rust",
        "contributing/presentation",
        "authoring-packages",
        "prereleases",
        "contributing/ineligible",
      ],
    },
    "license",
    "acknowledgements",
  ],
  recorderSidebar: [
    {
      type: "category",
      label: "Recorder",
      items: [
        "recorder/index",
        "recorder/before-you-buy",
        "recorder/buy",
        "recorder/setup",
        "recorder/create",
        "recorder/record",
        "recorder/captions",
        {
          type: "category",
          label: "Editing",
          collapsed: false,
          items: [
            "recorder/editing/editing",
            "recorder/editing/silence-removal",
            "recorder/editing/captions",
            "recorder/editing/layout",
            "recorder/editing/scenes",
            "recorder/editing/endcard",
            "recorder/editing/transitions",
            "recorder/editing/chapters",
            "recorder/editing/music",
            "recorder/editing/b-roll",
            "recorder/editing/cutting-clips",
          ],
        },
        "recorder/exporting",
        "recorder/lambda-rendering",
        "recorder/source-control",
        "recorder/external-recordings",
        "recorder/upgrading",
        {
          type: "category",
          label: "Troubleshooting",
          items: [
            "recorder/troubleshooting/failed-to-execute-get-video-metadata",
            "recorder/troubleshooting/cannot-read-properties-of-undefined",
          ],
        },
        "recorder/roadmap",
        "recorder/gear",
        "recorder/our-recorder",
        "recorder/support",
      ],
    },
  ],
};
