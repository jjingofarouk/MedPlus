const path = require('path');

module.exports = {
  // Entry point for your application
  entry: './src/index.js', // Adjust this according to your entry point
  
  // Output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Adjust the output directory as needed
  },

  // Add this resolve section for polyfills
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      // Add other fallbacks if necessary
    },
  },

  // Other configurations like loaders and plugins can go here...
};
