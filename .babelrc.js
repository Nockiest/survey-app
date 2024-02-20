module.exports = {
    presets: ['next/babel'],
    plugins: [
      [
        '@stylexjs/babel-plugin',
        {
          dev: true,
          stylexSheetName: '<>',
          runtimeInjection: true,
          useRemForFontSize: true,
          genConditionalClasses: false,
          unstable_moduleResolution:{
            // The module system to be used.
            // Use this value when using `ESModules`.
            type: 'commonJS',
            // The absolute path to the root directory of your project.
            rootDir: 'string',
            // Override `.stylex.js` with your own extension.
          },
         }
      ],
    ],
  };
