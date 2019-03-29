const gulp = require('gulp');
const awsLambda = require('gulp-aws-lambda');
const settings = require('./../assets/settings.json');
const credentials = require('./../assets/credentials.json');
const config = require('./../assets/config.json');

gulp.task('upload', () => {
    return gulp.src(settings.output.path + '/' + settings.output.archive)
        .pipe(awsLambda(credentials, config.lambda.parameter));
});