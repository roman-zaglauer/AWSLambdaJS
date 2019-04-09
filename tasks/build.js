'use strict';
const gulp = require('gulp');
const install = require('gulp-install');
const eslint = require('gulp-eslint');
const log = require('fancy-log');
const settings = require('./../assets/settings.json');
const del = require('del');
const zip = require('gulp-zip');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const beautify = require('gulp-jsbeautifier');


gulp.task('lint:build', () => {
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

gulp.task('clean:build', (done) => {
    log.info('Delete Folder: ' + settings.output.path);
    return del([settings.output.path], done());
});

gulp.task('install:build', () => {
    return gulp.src('./package.json')
        .pipe(gulp.dest(settings.output.path))
        .pipe(install({
            production: true
        }));
});

gulp.task('beautify:build', () => {
    return gulp.src(settings.source.path + '/**/*.js')
        .pipe(rename((path) => {
            path.basename += '.dbg';
        }))
        .pipe(beautify())
        .pipe(gulp.dest(settings.output.path));
});

gulp.task('uglify:build', function () {
    return gulp.src(settings.source.path + '/*.js')
        .pipe(rename((path) => {
            path.basename += '.min';
        }))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(settings.output.path));
});

gulp.task('zipmin:build', () => {
    return gulp.src([settings.output.path + '/**/*', '!' + settings.output.path + '/**/*.dbg.js'])
        .pipe(zip(settings.output.archive))
        .pipe(gulp.dest(settings.output.path));
});

gulp.task('zipdbg:build', () => {
    return gulp.src([settings.output.path + '/**/*', '!' + settings.output.path + '/**/*.min.js'])
        .pipe(zip(settings.output.dbg))
        .pipe(gulp.dest(settings.output.path));
});

gulp.task('build', gulp.series('lint:build', 'clean:build', 'beautify:build', 'uglify:build', 'install:build', 'zipmin:build', 'zipdbg:build'));