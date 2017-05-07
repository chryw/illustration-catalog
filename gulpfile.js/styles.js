const gulp = require('gulp');
const concat = require('gulp-concat');
const cleancss = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const merge = require('merge-stream');

gulp.task('styles', () => {
  const lib = gulp.src(['node_modules/office-ui-fabric-react/dist/css/fabric.min.css'])
      .pipe(concat('lib.css'))
      .pipe(cleancss())
      .pipe(rename({
        basename: 'lib.min',
        extname: '.css',
      }))
      .pipe(gulp.dest('dist/css'));

  const main = gulp.src(['src/_sass/main.scss'])
      .pipe(sass().on('error', sass.logError))
      .pipe(cleancss())
      .pipe(rename({
        basename: 'main.min',
        extname: '.css',
      }))
      .pipe(gulp.dest('dist/css'));

  return merge(lib, main);
});
