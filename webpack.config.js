module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
    module: {
        loaders: [
            { 
                test: /\.(less|css)$/,
                loader: "style!css!less" 
            },
            { 
                test: /\.(js|jsx)$/, 
                loaders: [ 'babel' ],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'] 
    }
};