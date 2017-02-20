/**
*	WebPack Config
*	@author Patricio Ferreira <3idmentionar@gmail.com>
**/
const extend = require('extend');

module.exports = function() {
	return extend(false,
		require('./config/dev'),
		require('./config/entries'),
		require('./config/loaders'),
		require('./config/plugins')
	);
};
