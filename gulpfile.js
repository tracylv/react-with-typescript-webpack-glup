var gulp = require('gulp');
var tslint = require("gulp-tslint");
var exec = require('child_process').exec;

gulp.task('start', (cb) =>
    exec('npm start', (err) => {
        if (err) return cb(err); // 返回 error
        cb();
    })
);

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

gulp.task('default',  ['tslint', 'watch', 'start']);