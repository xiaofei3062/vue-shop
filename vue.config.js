module.exports = {
  productionSourceMap: false,
  publicPath: "./",
  // 打包后生成html的引号
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].minify = false;
      return args;
    });
  },
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  }
};
