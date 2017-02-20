/**
*	Entries Configuration
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
const extend = require('extend');
const path = require('path');

module.exports = function(env) {

	return extend(true, {

		context: path.resolve(__dirname, '../app'),

		entry: require('./commons')(env),

		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: 'js/[name].bundle.js',
			publicPath: '/'
		},

		resolve: {
			extensions: ['.js', '.jsx', '.es6'],
			modules: [path.resolve(__dirname, '../app'), path.resolve(__dirname, '../node_modules')],
			alias: {
				'pages': path.resolve(__dirname, '../app/js/pages'),
				'actions': path.resolve(__dirname, '../app/js/actions'),
				'reducers': path.resolve(__dirname, '../app/js/reducers'),
				'store': path.resolve(__dirname, '../app/js/store'),
				'templates': path.resolve(__dirname, '../app/js/templates'),
				'util': path.resolve(__dirname, '../app/js/util')
			}
		}

	}, require('./entries')(env));

};
