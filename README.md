# 基于browser-sync的esbuild本地开发服务

## 安装
`
  npm install -D esbuild-plugin-browser-sync
`

## 使用
配置文件中导入并使用
```
# esbuild.config.js

// 导入esbuild
import esbuild from 'esbuild'
// 导入插件
import esbuildPluginBrowserSync from 'esbuild-plugin-browser-sync'

// 使用
esbuild.build({
  ...
  plugins: [
    esbuildPluginBrowserSync({
      server: 'dist',
      port: 3000,
      open: true,
      ...
    })
  ]
})
```

## 参数配置

完整配置请查看 [browsersync.io](https://browsersync.io/docs/options)