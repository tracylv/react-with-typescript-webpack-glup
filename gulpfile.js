var gulp = require('gulp');
var tslint = require("gulp-tslint");

gulp.task('tslint', () =>
    gulp.src('src/**/*.ts?(x)')
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
);

gulp.task('watch', function() {
    gulp.watch('src/**/*.ts?(x)', ['tslint']);
});

gulp.task('default',  ['tslint', 'watch']);