var gulp = require('gulp'),
    config = require('../config').fonts,
    prefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('fonts', function() {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
});
