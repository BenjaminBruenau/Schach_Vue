module.exports = {
  pwa: {
    workboxOptions: {
      navigateFallback: 'index.html',
      skipWaiting: true,
      clientsClaim: true,
    }
  },
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
}
