'use strict';

/* Imports */
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

/* Stylesheets */
gulp.task('scss', function() {
  return gulp.src('scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concat('application.css'))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

gulp.task('scss:watch', ['scss'], function() {
  gulp.watch('scss/*.scss', ['scss'])
});

/* HTML */
gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('html:watch', function() {
  gulp.watch('*.html', ['html'])
});


/* Live Reload */
gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

/* Watch */

gulp.task('default', ['scss:watch', 'html:watch', 'connect'])
