const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('./scss/index.scss') // Make sure this path points to your index.scss
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css')); // Adjust this path as needed for where you want your compiled CSS to go
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));
