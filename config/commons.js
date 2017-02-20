/**
*	Commons
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/

module.exports = function(env) {

	let commons = {
		libs: [
			'react',
			'react-dom',
			'react-redux',
			'redux',
			'redux-thunk',
			'immutable'
		]
	};

	if(env.dev) {
		commons['dev'] = [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:3000',
			'webpack/hot/only-dev-server',
			'redux-devtools',
			'redux-devtools-dock-monitor',
			'redux-devtools-log-monitor',
			'react-hot-loader'
		];
	}

	return commons;

};
