// util/ 放置常见脚本

// 引入处理命令行参数的包
import yargs from 'yargs'

// 区分开发环境和线上环境
const args = yargs
  .option('production', {   // 命令行选项部分
    boolean: true,
    default: false,
    describe: 'min all scripts'
  })
  .option('watch', {
    boolean: true,
    default: false,
    describe: 'watch all files'
  })
  .option('verbose', {
    boolean: true,
    default: false,
    describe: 'log'
  })
  .option('sourcemaps', {
    describe: 'force the creation of sourcemaps'
  })

  .option('port', {
    string: true,
    default: 8080,
    describe: 'server port'
  })

  .argv
