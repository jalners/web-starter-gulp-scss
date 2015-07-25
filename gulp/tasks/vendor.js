var gulp = require('gulp'),
    config = require('../config').vendor,
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('vendor', function () {
  gulp.src(config.src)
    .pipe(plumber())
    .pipe(rigger())
    .pipe(uglify())
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream: true}));
});
