/**
*	Dev Server Configuration
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
const webpack = require('webpack');

module.exports = {

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'libs',
			minChunks: Infinity,
			filename: 'libs.bundle.js'
		}),
		new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('dev') } }),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]

};
