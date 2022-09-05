import browserSync from 'browser-sync'
import { Plugin } from 'esbuild'

declare function esbuildPluginBowserSync (serveOptions: browserSync.Options) :Plugin

export default esbuildPluginBowserSync