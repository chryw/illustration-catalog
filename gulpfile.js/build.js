const gulp = require('gulp');

gulp.task('build', ['copy', 'styles', 'scripts', 'cachebust']);
