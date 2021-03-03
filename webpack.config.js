const path = require('path');

module.exports = {
  entry: `./src/index.ts`,
  target: 'node',
  mode: "development",
  node: {
    __filename: false,
    __dirname: false
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js"
  }
};
