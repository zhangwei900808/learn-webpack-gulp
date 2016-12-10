var html_webpack_plugin = require('html-webpack-plugin');
var webpack = require('webpack');
var extract_text_webpack_plugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
    user: './src/login.js',
    index: './src/index.js'
  },
  output: {
    path: __dirname + '/build/js',
    filename: '[name].js'
  },
  module: {
    // loaders: [{
    //   test: /\.css$/,
    //   loader: 'style!css'
    // }]
    loaders: [{
      test: /\.css$/,
      //提取插件style-loader和css-loader,功能是require css文件
      loader: extract_text_webpack_plugin.extract("style", 'css')
    },
    //把js文件全部通过babel转译(babel和webpack结合的方式)
    {
      test: /\.js$/,
      loader: 'babel',
      query:{compact:true}
    },
    // {
    //   test: /\.scss$/,
    //   loader: 'style!css!sass'
    // },
    {
      test: /\.scss$/,
      loader: extract_text_webpack_plugin.extract("style", 'css!sass')
    }
    ]
  },
  plugins: [
    new html_webpack_plugin({
      filename: __dirname + '/build/html/login.html',
      template: __dirname + '/src/tpl/login.html',
      inject: 'body',
      hash: true,
      //设置该页面引用入口的哪些js文件
      chunks: ['main', 'user', 'common'],
      include: {
        header: require('fs').readFileSync('./src/tpl/header.include')
      }
    }),
    new html_webpack_plugin({
      filename: __dirname + '/build/html/index.html',
      template: __dirname + '/src/tpl/index.html',
      inject: 'body',
      hash: true,
      chunks: ['main', 'index', 'common']
    }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery'
    // }),
    //分离js
    // new webpack.optimize.CommonsChunkPlugin({
    // 指定入口名称
    //   name: 'user',
    //   filename: 'user.js'
    // }),
    //抽离公共js成common.js
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      chunks: ['main', 'user', 'index']
    }),
    //[name]对应着login.js和main.js里面的css引用
    new extract_text_webpack_plugin("[name].css")
  ]
}
