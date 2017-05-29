import gulp from 'gulp'
import gulpif from 'gulp-if'
import liveserver from 'gulp-live-server'
import args from './util/args'

gulp.task('serve', (cb) => {
  if (!args.watch) {
    // 监听状态下
    return cb()
  }
  // 创建服务器
  var server = liveserver.new([
    '--harmony',  // 在当前命令行下执行脚本
    'server/bin/www'
  ])
  server.start()  // 启动服务器

  gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs', 'server/public/**/*.css'], (file) => {
    server.notify.apply(server, [file])
  })

  gulp.watch(['server/routes/**/*.js', 'server/app.js'], () => {
    server.start.bind(server)()
  })
})