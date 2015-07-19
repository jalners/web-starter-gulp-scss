var gulp = require('gulp'),
    config= require('../config'),
    watch = require('gulp-watch');

gulp.task('watch', function(){
  watch(config.html.watch, function(event, cb) {
    gulp.start('html');
  });

  watch(config.images.watch, function(event, cb) {
    gulp.start('images');
  });

  watch(config.fonts.watch, function(event, cb) {
    gulp.start('fonts');
  });

  watch(config.styles.watch, function(event, cb) {
    gulp.start('styles');
  });

  watch(config.vendor.watch, function(event, cb) {
    gulp.start('vendor');
  });

  watch(config.scripts.watch, function(event, cb) {
    gulp.start('scripts');
  });
});
