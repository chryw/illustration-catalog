const gulp = require('gulp');
const replace = require('gulp-replace');
const hasha = require('hasha');

gulp.task('cachebust', ['copy', 'styles', 'scripts'], () => {
  gulp.src(['src/**/*.html'])
      .pipe(replace('@@hash-data-json', hasha.fromFileSync('dist/illustrations.json')))
      .pipe(replace('@@hash-main-css', hasha.fromFileSync('dist/css/main.min.css')))
      .pipe(replace('@@hash-lib-css', hasha.fromFileSync('dist/css/lib.min.css')))
      .pipe(replace('@@hash-main-js', hasha.fromFileSync('dist/js/main.min.js')))
      .pipe(gulp.dest('dist'));
});
