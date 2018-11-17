const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	mode: "development",

	entry: "./src/js/index.js",
	output: { filename: "build.js" },

	plugins: [
		new UglifyJsWebpackPlugin({
			sourceMap: true
		})
	],

	devtool: "source-map"
};