/**
*	Dev Server Configuration
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
const extend = require('extend');
const path = require('path');

module.exports = function(env) {

	let dev = {
		devtool: 'inline-source-map',
		stats: { colors: { green: '\u001b[32m' } }
	};

	if(env.dev) {
		extend(false, dev, {
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
		});
	}

	return dev;
};
