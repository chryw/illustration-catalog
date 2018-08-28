const gulp = require('gulp');
const browserify = require('browserify');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const babelify = require('babelify');

const options = {
  entries: 'src/_js/index.js',
  extensions: ['.js'],
  debug: true,
  paths: ['src/_js'],
};

gulp.task('scripts', ['copy'], () => (
  browserify(options)
    .transform(babelify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename({
      basename: 'main.min',
      extname: '.js',
    }))
    .pipe(gulp.dest('dist/js'))
));
