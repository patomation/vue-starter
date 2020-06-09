const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const { titleCase } = require('title-case')
const pkg = require('./package.json')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true, // optimizes build performance
            experimentalWatchApi: true // optimizes build performance
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'vue-style-loader',
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.eot$|\.woff$|\.woff2$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file-loader?name=[name].[ext]' // Keeps original file name
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      title: titleCase(pkg.name.replace('-', ' ')),
      template: './public/index.html',
      filename: './index.html'
    }),
    new VueLoaderPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    pathinfo: false, // optimization
    filename: 'bundle.js'
  }
}
