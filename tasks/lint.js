'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const log = require('fancy-log');
const settings = require('./../assets/settings');

gulp.task('lint', () => {
    return gulp.src([settings.source.path + '**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.results(results => {
            log('#############################');
            log.info(`ESLint Total Results: ${results.length}`);
            log.warn(`ESLint Total Warnings: ${results.warningCount}`);
            log.error(`ESLint Total Errors: ${results.errorCount}`);
            log('#############################');
        }));
});

gulp.task('watch:lint', () => {
    gulp.watch([settings.source.path + '/**/*.js'], gulp.series('lint'));
});