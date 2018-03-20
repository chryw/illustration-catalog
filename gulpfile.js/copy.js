const gulp = require('gulp');
const merge = require('merge-stream');

gulp.task('copy', () => {
  const json = gulp.src('src/assets/*.json')
    .pipe(gulp.dest('dist/data'));
  const files = gulp.src('src/assets/files/**')
    .pipe(gulp.dest('dist/files'));
  const illustrations = gulp.src('src/assets/illustrations/**')
    .pipe(gulp.dest('dist/illustrations'));
  const images = gulp.src('src/images/**')
    .pipe(gulp.dest('dist/images'));
  const html = gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
  const webconfig = gulp.src('src/Web.config')
    .pipe(gulp.dest('dist'));
  return merge(json, files, illustrations, images, html, webconfig);
});
