var gulp = require('gulp')
var run = require('gulp-run-command').default;

gulp.task('check', run('node main.js', {
    env: { NODE_ENV: 'production' }
}))
  