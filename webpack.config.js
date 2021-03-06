var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		path.resolve(__dirname, './src/index.js')
	],
	output: {
		path: path.resolve(__dirname, "./dist"),
		publicPath: "/dist/",
		filename: "bundle.js"
	},
	
	module: {
		loaders: [
	
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
		]
	},
	watch: true
}
