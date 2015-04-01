// Load all the modules from package.json
var gulp = require( 'gulp' ),
  watch = require( 'gulp-watch' ),
  livereload = require( 'gulp-livereload' ),
  sass = require( 'gulp-ruby-sass' ),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  themeRoot = './web/apps/themes/themename';

gulp.task('sass', function() {
  return sass(themeRoot + './sass/style.scss', {sourcemap:true})
  .on('error', function (err) {
      console.error('Error', err.message);
   })
    .pipe(sourcemaps.write())
    .pipe( gulp.dest(themeRoot + '.' ) )
    .pipe( livereload() );
});
 
 
// Start the livereload server and watch files for change
gulp.task( 'watch', function() {
  livereload.listen();
 
  // don't listen to whole js folder, it'll create an infinite loop
  gulp.watch( themeRoot + './sass/**/*.scss', ['sass'] );
 
  gulp.watch( themeRoot + './**/*.php' ).on( 'change', function( file ) {
    // reload browser whenever any PHP file changes
    livereload.changed( file );
  } );
} );
 
 
gulp.task( 'default', ['watch'], function() {
 // Does nothing in this task, just triggers the dependent 'watch'
} );