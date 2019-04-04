'use strict';

const gulp = require('gulp');
const zip = require('gulp-zip');
const settings = require('./../assets/settings');

gulp.task('zip', () => {
    return gulp.src([settings.output.path + '/**/*'])
        .pipe(zip(settings.output.archive))
        .pipe(gulp.dest(settings.output.path));
});