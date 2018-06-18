var gulp = require('gulp')
var run = require('gulp-run-command').default;
var watch = require('gulp-watch');

gulp.task('check', run('node main.js', {
    env: { NODE_ENV: 'production' }
}));

gulp.task('watch', function() {

    watch('main.js', run('node main.js', {
        env: { NODE_ENV: 'production' }
    }));

});
  