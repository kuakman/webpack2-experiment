/**
*	WebPack Config
*	@author Patricio Ferreira <3idmentionar@gmail.com>
**/
const extend = require('extend');

module.exports = function(env) {

	return require('./config/plugins')(env, extend(true,
		require('./config/modules')(env),
		require('./config/loaders')(env),
		require('./config/dev')(env))
	);

};
