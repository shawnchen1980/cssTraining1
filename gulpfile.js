var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
gulp.task("styles",function(){
    return gulp.src("./sass/sass.scss")
            .pipe(sass().on('error',sass.logError))
            .pipe(rename('style.css'))
            .pipe(gulp.dest('./css'));
})
gulp.task("default",function(){
    console.log("this is default gulp task!")
    watch('./sass/**/*.scss',function(){
        gulp.start('styles');
    })
})