'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const log = require('gulplog');
const settings = require('./../assets/settings');

gulp.task('test', () => {
    return gulp.src(settings.test.path + '/*.js', {
            read: false
        })
        .pipe(mocha({
            reporter: 'list' //Try out 'nyan' or 'progress'
        }))
        .on('error', log.error);
});

gulp.task('watch:test', () => {
    gulp.watch(settings.source.path + '/**', settings.test.unit.path + '/**', gulp.series('test'));
});