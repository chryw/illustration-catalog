const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('watch', ['copy', 'styles', 'scripts', 'cachebust'], () => {
  browserSync.init({
    server: './dist',
  });
  gulp.watch('src/**/*.scss', ['styles']).on('change', browserSync.reload);
  gulp.watch('src/**/*.jsx', ['scripts']).on('change', browserSync.reload);
  gulp.watch('src/**/*.html', ['copy']).on('change', browserSync.reload);
});
