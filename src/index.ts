import { Plugin } from 'esbuild'
import browserSync from 'browser-sync'

function esbuildPluginBowserSync (serveOptions: browserSync.Options = {}): Plugin {
  // 创建服务实例
  const bs = browserSync.create('dev-server')

  return {
    name: 'esbuildPluginBowserSync',
    setup (build) {
      build.onEnd(() => {
        // 避免重复启动服务
        if (!bs.active) {
          // 初始化服务
          bs.init({
            port: 3000,
            watch: true,
            open: true,
            ...serveOptions
          })
        }
      })
    }
  }
}

export default esbuildPluginBowserSync