var gulp=require('gulp');
var sass=require('gulp-sass');

gulp.task('sass',function(){

gulp.src('resources/sass/app.scss')
.pipe(sass())
.pipe(gulp.dest('public/css/'));

});

gulp.task('watch',function(){

gulp.watch('resources/sass/**/*.scss', ['sass']);

});

gulp.task( 'default', [ 'sass' ] )

