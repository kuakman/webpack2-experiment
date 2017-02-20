/**
*	Loaders Configuration
*	@author Patricio Ferreira <3dimentionar@gmail.com>
**/
module.exports = {

	module: {
		rules: [{
			test: /\.(njk|nunjucks)$/,
			exclude: /node_modules/,
			use: {
				loader: 'nunjucks-loader',
				query: { name: '[name].[ext]' }
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
