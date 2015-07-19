var gulp = require('gulp'),
    config = require('../config').html,
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('html', function () {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(reload({stream: true}));
});
