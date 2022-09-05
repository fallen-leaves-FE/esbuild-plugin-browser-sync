import browserSync from "browser-sync";
function esbuildPluginBowserSync(serveOptions = {}) {
  const bs = browserSync.create("dev-server");
  return {
    name: "esbuildPluginBowserSync",
    setup(build) {
      build.onEnd(() => {
        if (!bs.active) {
          bs.init({
            port: 3e3,
            watch: true,
            open: true,
            ...serveOptions
          });
        }
      });
    }
  };
}
var src_default = esbuildPluginBowserSync;
export {
  src_default as default
};
