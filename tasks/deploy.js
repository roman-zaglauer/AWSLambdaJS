'use strict';

const gulp = require('gulp');
const install = require('gulp-install');
const eslint = require('gulp-eslint');
const log = require('fancy-log');
const del = require('del');
const zip = require('gulp-zip');
const awsLambda = require('gulp-aws-lambda');
const settings = require('./../assets/settings');
const credentials = require('./../assets/credentials');
const config = require('./../assets/config');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const beautify = require('gulp-jsbeautifier');

gulp.task('lint:deploy', () => {
    return gulp.src([settings.source.path + '**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.results(results => {
            log('====================================');
            log.info(`ESLint Total Results: ${results.length}`);
            log.warn(`ESLint Total Warnings: ${results.warningCount}`);
            log.error(`ESLint Total Errors: ${results.errorCount}`);
            log('====================================');
        }));
});

gulp.task('clean:deploy', (done) => {
    log.info('Delete Folder: ' + settings.output.path);
    return del([settings.output.path], done());
});

gulp.task('install:deploy', () => {
    return gulp.src('./package.json')
        .pipe(gulp.dest(settings.output.path))
        .pipe(install({
            production: true
        }));
});

gulp.task('beautify:deploy', () => {
    return gulp.src(settings.source.path + '/**/*.js')
        .pipe(rename((path) => {
            path.basename += '.dbg';
        }))
        .pipe(beautify())
        .pipe(gulp.dest(settings.output.path));
});

gulp.task('uglify:deploy', function () {
    return gulp.src(settings.source.path + '/*.js')
        .pipe(rename((path) => {
            path.basename += '.min';
        }))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(settings.output.path));
});

gulp.task('zipmin:deploy', () => {
    return gulp.src([
            settings.output.path + '/**/*',
            '!' + settings.output.path + '/**/*.dbg.js',
            '!' + settings.output.path + '/*.zip'
        ])
        .pipe(zip(settings.output.archive))
        .pipe(gulp.dest(settings.output.path));
});

gulp.task('zipdbg:deploy', () => {
    return gulp.src([
            settings.output.path + '/**/*',
            '!' + settings.output.path + '/**/*.min.js',
            '!' + settings.output.path + '/*.zip'
        ])
        .pipe(zip(settings.output.dbg))
        .pipe(gulp.dest(settings.output.path));
});

gulp.task('upload:deploy', () => {
    return gulp.src(settings.output.path + '/' + settings.output.archive)
        .pipe(awsLambda(credentials, config.lambda.parameter));
});

gulp.task('deploy',
    gulp.series(
        'lint:deploy',
        'clean:deploy',
        'beautify:deploy',
        'uglify:deploy',
        'install:deploy',
        'zipmin:deploy',
        'zipdbg:deploy',
        'upload:deploy'
    ));