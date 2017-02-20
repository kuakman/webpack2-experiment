/**
*	Check Webpack Configuration
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
const config = require('./webpack.config');

console.log(JSON.stringify(config({ dev: true }), null, 3));
