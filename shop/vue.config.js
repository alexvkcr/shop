// vue.config.js
module.exports = {
  assetsDir: 'src/assets',
  // Other options...
  pluginOptions: {
    // Express-related options
    express: {
        shouldServeApp: true,
        serverDir: './srv',
    },
  },
}
