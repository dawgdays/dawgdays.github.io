var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var path = require('path');
var concat = require('gulp-concat');
var html2js = require('gulp-html2js');
var browserSync = require('browser-sync').create();

gulp.task('less', function () {
    return gulp.src([
        './node_modules/normalize.css/normalize.css',
        './src/styles/**/*.less',
        './src/components/**/*.less'
    ])
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./public/styles'))
        .pipe(browserSync.stream());
});

gulp.task('libraries-js', function () {
    return gulp.src([
        './node_modules/angular/angular.min.js',
        './node_modules/angular-ui-router/release/angular-ui-router.min.js'
    ])
        .pipe(concat('libraries.js'))
        .pipe(gulp.dest('./public/scripts'))
        .pipe(browserSync.stream());  
});

gulp.task('js', function () {
    return gulp.src([
        './src/banner.js',
        './src/components/**/*.js',
        './src/routes/**/*.js',
        './src/scripts/**/*.js'
    ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public/scripts'))
        .pipe(browserSync.stream());        
});

gulp.task('fonts', function () {
    return gulp.src([
        './node_modules/font-awesome/fonts/*'
    ])
        .pipe(gulp.dest('./public/fonts'))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src([
        './src/images/*',
    ])
        .pipe(gulp.dest('./public/images'))
        .pipe(browserSync.stream());
});

gulp.task('html2js', function(){
    return gulp.src('./src/**/*.html')
        .pipe(html2js('app-templates.js', {
            adapter: 'angular',
            base: '',
            rename: function (moduleName) {
                // prevent template names from starting with "src/"
                return moduleName.replace('src/', '/');
            },
            name: 'app-templates'
        }))
        .pipe(gulp.dest('public/scripts/'));
});

gulp.task('watch', ['less', 'libraries-js', 'js', 'html2js', 'fonts', 'images'], function () {
    gulp.watch('./src/**/*.less', ['less']);
    gulp.watch('./src/**/*.js', ['js']);
    gulp.watch('./src/**/*.html', ['html2js']); // todo - clean up

    browserSync.init({
        server: {
            baseDir: '.'
        }
    });
});

gulp.task('default', ['watch']);