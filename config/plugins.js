/**
*	Dev Server Configuration
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
const extend = require('extend');
const webpack = require('webpack');

module.exports = function(env, config) {
	config.plugins || (config.plugins = []);

	config.plugins = config.plugins.concat([
		new webpack.optimize.CommonsChunkPlugin({
			name: 'libs',
			minChunks: Infinity,
			filename: 'libs.bundle.js'
		}),
		new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(env) } }),
		new webpack.NamedModulesPlugin()
	]);

	if(env.dev) {
		config.plugins = config.plugins.concat([
			new webpack.HotModuleReplacementPlugin(),
			new webpack.optimize.CommonsChunkPlugin({
				name: 'dev',
				minChunks: Infinity,
				chunks: ['dev'],
				filename: 'dev.bundle.js'
			})
		]);
	}

	return config;

};
