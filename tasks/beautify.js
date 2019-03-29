const settings = require('./../assets/settings.json');
const gulp = require('gulp');
const beautify = require('gulp-jsbeautifier');

gulp.task('beautify', () => {
    return gulp.src(settings.source.path + '/**/*.js')
        .pipe(beautify())
        .pipe(gulp.dest(settings.output.path));
});