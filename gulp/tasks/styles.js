var gulp = require('gulp'),
    config = require('../config').styles,
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('styles', function () {
  gulp.src(config.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer('last 2 version', 'ie 8', 'ie 9'))
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream: true}));
});
