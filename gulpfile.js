var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');

gulp.task('default', ['less', 'watch']);

gulp.task('less', function () {
    return gulp.src('./src/styles/**/*.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(gulp.dest('./public/styles'));
  });

gulp.task('watch', ['less'], function () {
    gulp.watch('./src/styles/**/*.less', ['less'])
});