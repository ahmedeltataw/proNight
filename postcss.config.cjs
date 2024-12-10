module.exports = {
  plugins: [
    require('postcss-preset-env')({
      autoprefixer: { grid: true }, // Enable Autoprefixer with grid support
      overrideBrowserslist: [
        '> 0.5%', // Covers browsers with more than 0.5% usage globally
        'last 2 versions', // Last two versions of each browser
        // 'Firefox ESR', // Include Firefox Extended Support Release
        'not dead', // Exclude browsers without official support or updates
        "not IE 11"
      ],
      stage: 3,
      features: {
        // 'logical-properties-and-values': { preserve: true },
        'gap-properties': true, // Enable gap for grid
      },
    }),
   
    require('postcss-csso')(
      {
        restructure: true, // Optimize and restructure the CSS
        comments: false, // Remove comments
      }
    ), // Enable CSSO minification
    require('postcss-flexbugs-fixes')(),
    require("postcss-pxtorem"),

  ]
};