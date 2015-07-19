var gulp = require('gulp'),
    config = require('../config').browserSync,
    browserSync = require("browser-sync");

gulp.task('browserSync', function () {
  browserSync(config);
});
