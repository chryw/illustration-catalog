require('dotenv').config();
const azure = require('azure-storage');
const foreach = require('gulp-foreach');
const gulp = require('gulp');
const path = require('path');

const blobService = azure.createBlobService(process.env.AZURESTORAGE_CONNECTIONSTRING);

gulp.task('upload', () => {
  return gulp.src('src/assets/Illustrations/*.+(svg|png)').pipe(foreach((stream, file) => {
    const filePath = file.path;
    const fileName = path.basename(filePath);
    blobService.createBlockBlobFromLocalFile('illustrations', fileName, filePath, (error, result) => {
      if (!error) {
        console.log(`${result.name} uploaded to ${result.container}`);
      }
    });
    return stream;
  }));
});
