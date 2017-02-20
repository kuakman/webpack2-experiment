/**
*	Loaders Configuration
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
module.exports = function(env) {

	return {
		module: {
			rules: [{
				test: /\.pug$/,
				exclude: /node_modules/,
				use: {
					loader: 'pug-loader',
					query: { name: '[name].[ext]', pretty: true }
				}
			}, {
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader']
			}, {
				test: /\.(jsx|es6)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}]
		}
	};

};
