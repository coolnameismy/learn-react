var webpack = require('webpack')
var path = require('path');
    // entry: path.resolve(__dirname, 'app/main.js'),


module.exports = {
	// entry: path.resolve(__dirname, 'app/main.js'),
    entry: [
          path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
	module: {
	loaders: [
	  {test: /\.css$/, loader: 'style-loader!css-loader'},
	  {
	     test: /\.(js|jsx)$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
         loader: 'babel-loader' // 加载模块 "babel" 是 "babel-loader" 的缩写
   	   }
	]},
	plugins: [
		new webpack.BannerPlugin('T111his fisssle is created by xuanyan@liuyanwei.com')
	]
};