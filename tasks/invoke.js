const settings = require('./../assets/settings.json');
const gulp = require('gulp');
const handler = require('./../' + settings.source.main.path).handler;
const event = require('./../' + settings.test.path + '/' + settings.test.event);
const log = require('fancy-log');

gulp.task('invoke', (done) => {
    log.info('Calling function: ' + settings.source.main.path);
    handler(event);
    done();
});