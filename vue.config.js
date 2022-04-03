const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const webpack = require('webpack');

const vueConfig = defineConfig({
  outputDir: 'build/',
  transpileDependencies: true,
  devServer: {
    port: 8000 // CHANGE PORT
  },
  chainWebpack: config => {
      config.module
          .rule('vue')
          .use('vue-loader')
          .tap(options => {
              options.compiler = require('vue-template-babel-compiler')
              return options
          })
  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new webpack.ProvidePlugin({
        'window.Quill': 'quill'
      }),
      new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /id/),
    ],
    resolve: {
      alias: {
        'Assets': path.resolve(__dirname, './src/assets'),
        'Components': path.resolve(__dirname, './src/components'),
        'Router': path.resolve(__dirname, './src/router'),
        'Store': path.resolve(__dirname, './src/store'),
        'Views': path.resolve(__dirname, './src/views'),
        'Helper': path.resolve(__dirname, './src/helper'),
        'Config': path.resolve(__dirname, './src/config'),
        'Plugins': path.resolve(__dirname, './src/plugins') 
      }
    }
  }
})

module.exports = vueConfig;
