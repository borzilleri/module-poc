const path = require("path");
module.exports = {
	entry: {
		a: './index-a.js',
		b: './index-b.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname)
	},
	plugins: [
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							["@babel/preset-env", { "targets": "last 2 versions" }]
						],
					}
				}
			}
		]
	},
	resolve: {
		modules: [
			"node_modules",
		],
		extensions: [".js"]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: 'all',
					name: 'vendor',
					test: /[\\/]node_modules[\\/]/,
					enforce: true
				},
				shared: {
					chunks: 'all',
					name: 'shared',
					test: /[\\/]shared[\\/]/,
					enforce: true
				}
			}
		}
	},
	devtool: 'source-map'
};
