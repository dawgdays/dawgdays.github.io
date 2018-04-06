var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');
var serve = require('gulp-serve');
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');

gulp.task('default', ['less', 'js', 'serve', 'watch']);

gulp.task('less', function () {
    return gulp.src([
        './node_modules/normalize.css/normalize.css',
        './src/styles/**/*.less'
    ])
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(concat('app.css'))                
        .pipe(gulp.dest('./public/styles'))
        .pipe(livereload());
});

gulp.task('js', function () {
    return gulp.src([
        './src/scripts/**/*.js'
    ])
        .pipe(concat('app.js'))                
        .pipe(gulp.dest('./public/scripts'))
        .pipe(livereload());
});

gulp.task('serve', serve({
    root: ['.'],
    port: 3000,
}));

gulp.task('watch', ['less', 'js'], function () {
    livereload.listen();
    gulp.watch('./src/styles/**/*.less', ['less']);
    gulp.watch('./src/scripts/**/*.js', ['js']);
});