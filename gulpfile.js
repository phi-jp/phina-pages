var gulp = require('gulp');
var shell = require('gulp-shell');


gulp.task('docs', shell.task([
  'jsduck ../phina.js/src --output ./public/docs --title "phina.js docs" --eg-iframe=docframe.html',
]));