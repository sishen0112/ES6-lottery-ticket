import gulp from 'gulp'
import gulpif from 'gulp-if'
import concat from 'gulp-concat'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import named from 'vinyl-named'
import livereload from 'gulp-livereload'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'
import { log, colors } from 'gulp-util'
import args from './util/args'


gulp.task('scripts', () => {   // scripts 为任务名称
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandler() {

      }
    }))
    .pipe(named())
    .pile(gulpWebpack({
      module
      : {
        loaders: [{
          test: /\.js$/,
          loader: 'babel'
        }]
      }
    }), null, (err, stats) => {
      log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        chunks: false
      }))
    })
    .pipe(gulp.dest('server/public/js'))  // 编译好的文件路径
    .pipe(rename({
      basename: 'cp',
      extname: '.min.js'
    }))
    .pipe(uglify({ compress: { properties: false, output: { 'qupte_keys': true } } }))
    .pipe(gulp.dest('server/public/js'))

    .pipe(gulpif(args.watch, livereload()))   // 自动监听刷新
})