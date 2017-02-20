/**
*	Dev Server Configuration
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
const path = require('path');

module.exports = {

	devtool: 'inline-source-map',

	stats: {
		colors: { green: '\u001b[32m' }
	},

	devServer: {
		contentBase: path.resolve(__dirname, '../app'),
		port: 3000,
		compress: false,
		inline: true,
		hot: true,
		headers: {
			'Access-Control-Allow-Origin': '*'
    	},
		stats: {
			assets: true,
			children: false,
			chunks: false,
			hash: false,
			modules: true,
			publicPath: false,
			timings: true,
			version: false,
			warnings: true,
			colors: { green: '\u001b[32m'}
		}
	}

};
