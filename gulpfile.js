// Load all the modules from package.json
var gulp = require( 'gulp' );
var watch = require( 'gulp-watch' );
// var livereload = require( 'gulp-livereload' );
var sourcemaps = require( 'gulp-sourcemaps' );
var sass = require( 'gulp-sass' );
var autoprefixer = require('gulp-autoprefixer');
var util = require('gulp-util');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var gzip = require('gulp-gzip');


// paths to ressources
var themeRoot = './web/apps/themes/ccwp-gulp2/';


// gzip options
var gzip_options = {
    threshold: '1kb',
    gzipOptions: {
        level: 9
    }
};

// compile sass + gzip for production
gulp.task('sass', function() {
  gulp.src(themeRoot + './sass/style.scss')
   .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [ themeRoot + './bower_components/susy/sass' ] })) // I don't know if necessary
    .on('error', function (error) {
            console.error(error);
            this.emit('end');
        })
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(sourcemaps.write())
    .pipe( gulp.dest(themeRoot + '.' ) )
    .pipe(gzip(gzip_options))
    .pipe(gulp.dest(themeRoot + './prod/css/'));
    //.pipe(livereload())
});
 
// perform jshint on javascript files
gulp.task('jshint', function () {
  return gulp.src(themeRoot + '/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

// uglify, rename and move destination of the main.js file
gulp.task('jsmain', function(){
  return gulp.src(themeRoot + '/js/**/*.js')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest(themeRoot + './prod/js/'))
});

// Combine the list of plugins (uncompressed) used via bower, concat, move, uglify, move
gulp.task('jsplugins', function(){
  return gulp.src(themeRoot + '/bower_components/modernizr/modernizr.js')
    .pipe(concat('modernizr.js'))
    .pipe(gulp.dest(themeRoot + './prod/js/'))
    .pipe(uglify())
    .pipe(rename('plugins.min.js'))
    .pipe(gulp.dest(themeRoot + './prod/js/'))
});

// compress images
gulp.task('images', function () {
  return gulp.src(themeRoot + '/images/*')
    .pipe(cache(imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest(themeRoot + './prod/images/'))
});

 
// Start the livereload server and watch files for change
gulp.task( 'watch', function() {
  // Listen on port 35729
    //var server = livereload();
  gulp.watch( themeRoot + './sass/**/*.scss', ['sass'] );
  gulp.watch( themeRoot + '/js/**/*.js', ['jshint', 'jsmain'] );
  gulp.watch( themeRoot + '/bower_components/modernizr/modernizr.js', ['jsplugins'] );
  gulp.watch( themeRoot + '/images/*', ['images']);
  gulp.watch( themeRoot + './**/*.php' );
 });
 
gulp.task( 'default', ['watch']);