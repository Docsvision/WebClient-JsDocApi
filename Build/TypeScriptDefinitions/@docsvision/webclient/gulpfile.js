const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const print = require('gulp-print').default;
const log = require('fancy-log');
const colors = require('ansi-colors');
const path = require('path');
const rimraf = require('gulp-rimraf');
const runSequence = require('run-sequence');
var concat = require("gulp-concat");


module.exports = {};

var sassOptions = {
    outputStyle: 'expanded'
};
var prefixerOptions = {
    browsers: ['ie >= 10', 'last 2 versions'],
    cascade: false
}

module.exports.cleanStyles = function(STYLES_DIR) {
    return gulp.src([STYLES_DIR + "/**/*.css"], { read: false })
        .pipe(rimraf({ force: true }))
        .on('end', () => log(colors.green("Styles cleaned in " + path.resolve(STYLES_DIR))));
};

module.exports.buildStyles = function(STYLES_DIR, scssSourcePaths) {
    var stream = gulp.src([scssSourcePaths])
        .on('end', () => log(colors.green("Processing style files in " + path.resolve(scssSourcePaths) + ":")))
        .pipe(print((filepath ) => colors.yellow("Source file: ") + colors.cyan(filepath)))        
        .pipe(sass(sassOptions))
        .pipe(autoprefixer(prefixerOptions))
        .pipe(concat('extension.css'))
        .pipe(gulp.dest(STYLES_DIR))
        .pipe(print((filepath ) => colors.yellow("Output file: ") + colors.cyan(filepath)))  
        .on('end', () => log(colors.green("Styles output copied to " + path.resolve(STYLES_DIR))));
    return stream;
};

module.exports.copyImports = (IMPORTS_DIR, importsSrcFiles) => {
    return gulp.src([importsSrcFiles])
        .pipe(print((filepath ) => colors.yellow("Import file: ") + colors.cyan(filepath)))
        .pipe(gulp.dest(IMPORTS_DIR))
        .on('end', () => log(colors.green("Imports copied to " + path.resolve(IMPORTS_DIR))));
};