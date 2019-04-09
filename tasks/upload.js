'use strict';

const gulp = require('gulp');
const awsLambda = require('gulp-aws-lambda');
const settings = require('./../assets/settings');
const credentials = require('./../assets/credentials');
const config = require('./../assets/config');

gulp.task('upload', () => {
    return gulp.src(settings.output.path + '/' + settings.output.archive)
        .pipe(awsLambda(credentials, config.lambda.parameter));
});