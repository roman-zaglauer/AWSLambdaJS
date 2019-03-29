const settings = require('./../assets/settings.json');
const gulp = require('gulp');
const handler = require('./../' + settings.source.main.path).handler;
const event = require('./../' + settings.assets.path + '/' + settings.assets.event);
const log = require('fancy-log');

gulp.task('invoke', (done) => {
    log.info('Calling function: ' + settings.source.main.path);
    handler(event);
    done();
});