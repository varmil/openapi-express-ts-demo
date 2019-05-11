const gulp = require('gulp')

const tslint = require('gulp-tslint')
const typescript = require('gulp-typescript')
const sourcemap = require('gulp-sourcemaps')
const del = require('del')
const mocha = require('gulp-mocha')

const DEST = 'server'

gulp.task('tslint', () => {
  return gulp
    .src(['src/**/*.ts'])
    .pipe(
      tslint({
        formatter: 'verbose'
      })
    )
    .pipe(
      tslint.report({
        summarizeFailureOutput: true
      })
    )
})

gulp.task('test', ['build'], () => {
  gulp.src(['test/**/*.js']).pipe(
    mocha({
      reporter: 'spec',
      timeout: 5000
    })
  )
})

gulp.task('watch', () => {
  gulp.watch('src/**/*.ts', ['build'])
})

gulp.task('default', ['build'])
