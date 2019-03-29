'use strict';

let gulp = require('gulp');
let HubRegistry = require('gulp-hub');
let hub = new HubRegistry(['./tasks/*.js']);

gulp.registry(hub);