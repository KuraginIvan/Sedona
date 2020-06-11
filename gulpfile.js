var gulp = require('gulp'),
    sass = require('gulp-sass'); //Подключаем Sass пакет

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('project/sass/**/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('project/css')) // Выгружаем результата в папку app/css
});

gulp.task('watch', function() {
    gulp.watch('project/sass/**/*.scss', gulp.parallel('sass'));
});