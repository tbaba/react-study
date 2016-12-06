var gulp       = require('gulp'),
    browserify = require('browserify'),
    webserver  = require('gulp-webserver'),
    source     = require('vinyl-source-stream'),
    babelify   = require('babelify');


gulp.task('browserify', function() {
  browserify('./js/app.js', { debug: true }).
    transform(babelify, {presets: ["es2015"]}).
    bundle().
    pipe(source('bundle.js')).
    pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
  gulp.watch('./js/*.js', ['browserify'])
});

gulp.task('webserver', function(){
  gulp.src('./')
  .pipe(webserver({
    host: '127.0.0.1',
    livereload: true
  }));
});

gulp.task('default', ['browserify', 'watch', 'webserver']);
