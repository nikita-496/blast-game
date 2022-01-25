const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const distPath = path.resolve(__dirname, 'dist');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  mode,
  entry: ['@babel/polyfill', './src/js/index.js'],
  output: {
    filename: 'main.[contenthash].js',
    path: distPath,
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  //https://github.com/webpack-contrib/css-loader/issues/447
  resolve: {
    fallback: {
        "fs": false
    },  
  },
  plugins: [
    new HtmlWebpackPlugin({
        templateContent: `
        <html>
        <head>
            <title>Hello Cocos2d-JS</title>
        </head>
        <body>   
            <canvas id="gameCanvas" width="800" height="450"></canvas>
            <script src="frameworks/cocos2d-v3.13-lite.js"> </script>
        </body>
        </html>
        `,
        filename: 'index.html',
        inject: 'body',
      }),
    new MiniCssExtractPlugin({
      filename: './css/[name].[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: './frameworks/cocos2d-html5/cocos2d-v3.13-lite.js', to: 'frameworks'},
        {from: './project.json', to: './'},
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(img|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  devtool: mode === 'development' ? 'source-map' : false,
  devServer: {
    static: distPath,
    open: true,
    compress: true,
    hot: true,
    port: 5000,
  },
};
