const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('watch', ['styles', 'scripts', 'cachebust'], () => {
  browserSync.init({
    server: './dist',
  });
  gulp.watch('src/**/*.scss', ['styles']).on('change', browserSync.reload);
  gulp.watch('src/**/*.jsx', ['scripts']).on('change', browserSync.reload);
});
