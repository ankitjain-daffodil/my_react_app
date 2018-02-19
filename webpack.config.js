var config = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
     inline: true,
     port: 8080
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
     loaders: [
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           loader: 'babel-loader',
           query: {
              presets: ['es2015', 'react','es2017']
           },
        },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.css.scss$/, loader: "style-loader!css-loader" },
     ]
  }
}
module.exports = config;
