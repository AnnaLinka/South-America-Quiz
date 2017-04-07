var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');




gulp.task('sass', function () {
return gulp.src('sass/*.scss')  //gdyby było samo scss/style.scss obserwowałby tylko jeden plik, z * obserwuje wszystkie
.pipe(sourcemaps.init())
.pipe(sass({
  errLogToConsole:true,
  outputStyle: 'extended'
})) //tu nie może być ; bo by zakończył
.pipe(sourcemaps.write())
.pipe(gulp.dest('css'))
});


gulp.task('watch', ['sass'], function (){
  gulp.watch('sass/*.scss',['sass']);
});
