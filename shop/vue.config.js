// vue.config.js
module.exports = {
    assetsDir: 'src/assets',
    runtimeCompiler: true,
    // Other options...
    pluginOptions: {
        express: {
            shouldServeApp: true,
            serverDir: './srv'
        },
    },
}