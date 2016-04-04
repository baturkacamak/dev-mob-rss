'use strict';

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    postSorting = require('postcss-sorting'),
    imagemin = require('gulp-imagemin'),
    postColor = require("postcss-color-function"),
    postCssNext = require('postcss-cssnext'),
    postCssImport = require('postcss-import'),
    postMixins = require('postcss-mixins'),
    cssMqpacker = require('css-mqpacker'),
    postMinMax = require('postcss-media-minmax'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    reactify = require('reactify');

var config = {
    directory: {
        resources: 'resources/',
        assets: 'resources/assets/',
        images: 'resources/assets/images/',
        javascripts: 'resources/assets/javascripts/',
        stylesheets: 'resources/assets/stylesheets/',
        dist: 'public/assets/build/'
    }
};

gulp.task('images', function () {
    gulp.src(config.directory.images + '*')
        .pipe(imagemin())
        .pipe(gulp.dest(config.directory.dist + 'images'));
});

gulp.task('stylesheets', function () {

    var processors = [
        postCssImport,
        postColor,
        postMixins,
        postCssNext,
        postSorting({'sort-order': 'csscomb'}),
        cssMqpacker,
        postMinMax
    ];

    return gulp.src(config.directory.stylesheets + '*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest(config.directory.dist + 'stylesheets/'));
});

gulp.task('javascripts', function () {
    //console.log(config.directory.javascripts);
    //console.log(config.directory.dist + 'javascripts/');
    browserify(config.directory.javascripts + 'main.js')
        .transform(reactify)
        .bundle()
        .pipe(source('script.js'))
        .pipe(gulp.dest(config.directory.dist + 'javascripts/'));
});

gulp.task('default', ['stylesheets', 'javascripts', 'watch']);

gulp.task('watch', function () {
    gulp.watch(config.directory.resources + '**/*', ['stylesheets', 'javascripts']);
});