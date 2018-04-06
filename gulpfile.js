var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

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
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src([
        './src/scripts/**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public/scripts'))
        .pipe(browserSync.stream());        
});

gulp.task('html', function () {
    return gulp.src([
        './**/*.html'
    ])
        .pipe(browserSync.stream());        
});

gulp.task('watch', ['less', 'js', 'html'], function () {
    gulp.watch('./src/styles/**/*.less', ['less']);
    gulp.watch('./src/scripts/**/*.js', ['js']);
    gulp.watch('./**/*.html', ['html']); // todo - clean up

    browserSync.init({
        server: {
            baseDir: '.'
        }
    });
});

gulp.task('default', ['watch']);