/**
*	Entries Configuration
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
const path = require('path');

console.log(path.resolve(__dirname, '../dist'));

module.exports = {

	context: path.resolve(__dirname, '../app'),

	entry: {
		home: 'js/pages/home.jsx',
		dashboard: 'js/pages/dashboard.jsx',
		libs: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
			'redux-devtools',
			'redux-devtools-dock-monitor',
			'redux-devtools-log-monitor',
			'react-hot-loader',
			'react',
			'react-dom',
			'react-redux',
			'redux',
			'redux-thunk',
			'immutable']
	},

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

};
