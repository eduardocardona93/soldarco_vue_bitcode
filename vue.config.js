const webpack = require('webpack');
module.exports = {
  publicPath: '/',
  configureWebpack: {
    externals: {
      $: 'jquery',
      jquery: 'jQuery'
    },

    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      }),
    ]
  },
  "transpileDependencies": [
    "vuetify"
  ]
}