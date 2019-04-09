'use strict';
const gulp = require('gulp');
const zip = require('gulp-zip');
const settings = require('./../assets/settings');

gulp.task('min:zip', () => {
    return gulp.src([settings.output.path + '/**/*', '!' + settings.output.path + '/**/*.dbg.js', '!' + settings.output.path + '/*.zip'])
        .pipe(zip(settings.output.archive))
        .pipe(gulp.dest(settings.output.path));
});

gulp.task('dbg:zip', () => {
    return gulp.src([settings.output.path + '/**/*', '!' + settings.output.path + '/**/*.min.js', '!' + settings.output.path + '/*.zip'])
        .pipe(zip(settings.output.dbg))
        .pipe(gulp.dest(settings.output.path));
});

gulp.task('zip', gulp.series('min:zip', 'dbg:zip'));