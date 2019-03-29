const settings = require('./../assets/settings.json');
const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('uglify', function () {
    return gulp.src(settings.source.path + '/*.js')
        .pipe(rename((path) => {
            path.basename += '.min';
        }))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(settings.output.path));
});