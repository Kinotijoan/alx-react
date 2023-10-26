const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js', // Path to your entry JavaScript file
  output: {
    filename: 'bundle.js', // Name of the generated JavaScript bundle
    path: path.resolve(__dirname, 'public'), // Path to the output directory
  },
  mode: 'production', // Set the mode to 'production'
};