coffee  = require "gulp-coffee"


gulp.task 'coffee' () ->
  gulp.src("cfe/*.coffee")
    .pipe(coffee(bare: true).on('error', gutil.log))
    .pipe gulp.dest('./js/')
