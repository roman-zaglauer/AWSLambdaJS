const gulp = require('gulp');
const jsdoc = require('gulp-jsdoc3');
const del = require('del');
const log = require('fancy-log');
const zip = require('gulp-zip');
const settings = require('./../assets/settings.json');
const config = require('./../assets/jsdoc.json');

gulp.task('clean:doc', (done) => {
    log.info('Delete Folder: ' + settings.documentation.path);
    return del([settings.documentation.path], done());
});

gulp.task('jsdoc:doc', (cb) => {
    gulp.src(['README.md', './src/**/*.js'], {
            read: false
        })
        .pipe(jsdoc(config, cb));
});

gulp.task('zip:doc', () => {
    return gulp.src([settings.documentation.path + '/**/*'])
        .pipe(zip(settings.documentation.archive))
        .pipe(gulp.dest(settings.documentation.path));
});

gulp.task('doc', gulp.series('clean:doc', 'jsdoc:doc', 'zip:doc'));