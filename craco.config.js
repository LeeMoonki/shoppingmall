const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');

module.exports = {
  babel: {
    plugins: ['@vanilla-extract/babel-plugin'],
  },
  webpack: {
    plugins: {
      add: [new VanillaExtractPlugin()],
    },
  },
}