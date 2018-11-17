const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	mode: "development",

	entry: "./src/js/index.js",
	output: { filename: "build.js" },

	plugins: [
		new UglifyJsPlugin({ sourceMap: true })
	],

	devtool: "source-map"
};



/* eslint-env node */