var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('css', function () {

    return gulp.src([
            './src/styles/**.styl'
            ])
        .pipe(stylus())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch',function() {
   return gulp.watch('./src/styles/*.styl', ['css']); 
});

gulp.task('js', function () {

    return gulp.src([
            './src/js/**.js'
            ])        
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/js'));
});