var gulp = require('gulp');
var concat = require('gulp-concat');
gulp.task('script', function(){
	return gulp.src('src/js/*.js')
		.pipe(concat('newFile.js'))
		.pipe(gulp.dest('src/js/'))
});
gulp.task('default', ['script']);