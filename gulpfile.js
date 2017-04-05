var gulp = require('gulp'),
minifyHtml = require("gulp-minify-html");
cssmin = require('gulp-minify-css');
gulp.task('myminifycss', function () {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));  
});
gulp.task('myminifyhtml', function () {
    gulp.src('*.html') // 要压缩的html文件
    .pipe(minifyHtml()) //压缩
    .pipe (gulp.dest('dist/html'));
    
});
gulp.task('default',['myminifyhtml','myminifycss']); 
