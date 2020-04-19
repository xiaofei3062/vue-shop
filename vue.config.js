module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === "production" ? "/shop" : "/",
  chainWebpack: config => {
    // 发布阶段打包入口
    config.when(process.env.NODE_ENV === "production", config => {
      config
        .entry("app")
        .clear()
        .add("./src/main-prod.js");

      // 配置cdn依赖
      config.set("externals", {
        vue: "Vue",
        "better-scroll": "BScroll",
        vant: "vant"
      });

      // 是否发布模式,是
      config.plugin("html").tap(args => {
        args[0].isProd = true;
        return args;
      });
    });
    // 开发阶段打包入口
    config.when(process.env.NODE_ENV === "development", config => {
      config
        .entry("app")
        .clear()
        .add("./src/main-dev.js");
      // 是否发布模式,否
      config.plugin("html").tap(args => {
        args[0].isProd = false;
        return args;
      });
    });
  },
  configureWebpack: {
    resolve: {
      // 配置路径别名
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
