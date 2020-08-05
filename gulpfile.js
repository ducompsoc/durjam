'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

gulp.task('assets', () => {
    return gulp.src('./src/**/*.{html,js,svg,png,jpg,jpeg,gif}')
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass', () => {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.series('assets', 'sass'));

gulp.task('serve', gulp.series('build', () => {
    browserSync.init({ server: './dist' });

    gulp.watch('./src/**/*.scss', gulp.series('sass'));
    gulp.watch('./src', gulp.series('assets')).on('change', browserSync.reload);
}));
