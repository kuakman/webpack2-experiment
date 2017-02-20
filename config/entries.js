/**
*	Entries
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
const extend = require('extend');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {

	let templateDefault = {
		template: 'html/master.pug',
		inject: true,
		showErrors: true,
		appMountId: 'container',
		mobile: true
	};

	let output = {
		entry: {
			home: 'js/pages/home.jsx',
			dashboard: 'js/pages/dashboard.jsx'
		}
	};

	let commonChunks = ['libs'];

	if(env.dev)
		commonChunks.push('dev');

	output['plugins'] = Object.keys(output.entry).map(function(name) {
		return new HTMLWebpackPlugin(extend(false, {
			title: name + ' - Webpack 2',
			filename: (name + '.html'),
			chunks: commonChunks.concat([name])
		}, templateDefault));
	});

	return output;

};
