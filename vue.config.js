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
  },
  devServer: {
    // 配置跨域
    proxy: {
      "/serve": {
        target: "http://121.42.13.36:8081",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          "^/serve": "/serve"
        }
      }
    }
  }
};
