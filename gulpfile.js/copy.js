const gulp = require('gulp');
const merge = require('merge-stream');

gulp.task('copy', () => {
  const json = gulp.src('src/assets/*.json')
      .pipe(gulp.dest('dist'));
  const images = gulp.src('src/assets/*.{png,svg}')
      .pipe(gulp.dest('dist/images'));
  const html = gulp.src('src/*.html')
      .pipe(gulp.dest('dist'));
  const webconfig = gulp.src('src/Web.config')
      .pipe(gulp.dest('dist'));
  return merge(json, images, html, webconfig);
});
