// vue.config.js
module.exports = {
  assetsDir: 'src/assets',
  // Other options...
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    },
  },
}
