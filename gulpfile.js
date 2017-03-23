var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglifyJS = require('gulp-uglify');
var uglifyCSS = require('gulp-minify-css');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('bundle', function() {
  return browserify({
        extensions: ['.js', '.jsx'],
        entries: 'src/components/index.js',
    })
    .transform(babelify.configure(
        { presets: ['es2015','react','stage-1'] },
        {ignore: /(bower_components)|(node_modules)/}
      ))
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream())
});

gulp.task('sass', function() {
  return gulp.src('assets/components/index.scss') // Gets all files ending with .scss in assts/scss and children dirs
    .pipe(sass())
    .pipe(uglifyCSS())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream())
})

gulp.task('server', function(){
    browserSync({
      server: {
        baseDir: './'
      }
    });
});

gulp.task('build',['bundle','sass']);

gulp.task('default',['server'],function(){
  gulp.watch('assets/**/*.scss',['sass']);
  gulp.watch('src/**/*.js',['bundle']);
});
