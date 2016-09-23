var gulp = require('gulp');

// 引入组件
var rename = require('gulp-rename'),        // 重命名
    clean = require('gulp-clean');          //清空文件夹


// 合并，压缩js文件
gulp.task('cp-html', function () {
    gulp.src('./app/**/*.html')
        .pipe(gulp.dest('./build/html'));
});

// 清空图片、样式、js
gulp.task('clean', function () {
    return gulp.src(['./build/*'], {read: false})
        .pipe(clean({force: true}));
});

gulp.task('default', ['clean'], function () {
    gulp.run('cp-html');
});

