const gulp = require("gulp");
const gulpPlumber = require("gulp-plumber");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const webpackStream = require("webpack-stream");
const sass = require("gulp-sass");

gulp.task("default", ["watch"]);

gulp.task("watch", ["compile"], () => {
	gulp.watch("src/js/**/*.js", ["js-compile"]);
	gulp.watch("src/css/**/*.scss", ["scss-compile"]);
});

gulp.task("compile", ["js-compile", "scss-compile"]);

gulp.task("js-compile", () => {
	webpackStream(webpackConfig, webpack)
		.pipe(gulpPlumber())
		.pipe(gulp.dest("./src/js"));
});

gulp.task("scss-compile", () => {
	gulp.src("src/css/**/*.scss")
		.pipe(gulpPlumber())
		.pipe(sass({ sourceMap: true }))
		.pipe(gulp.dest("./src/css"));
});



/* eslint-env node */