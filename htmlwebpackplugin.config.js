const HtmlWebpackPlugin = require("html-webpack-plugin");

const pathPrefix = "./src";
const htmlfiles = [
	`${pathPrefix}/index.html`
];

module.exports = htmlfiles.map(filename => {
	return new HtmlWebpackPlugin({
		filename,

		template: `${pathPrefix}/template.html`,
		minify: false,
	});
});