module.exports = {
  // 打包后不生成map文件,减小项目体积
  productionSourceMap: false,
  // 打包后使用相对路径,方便服务器上传多个项目
  publicPath: "./",
  configureWebpack: {
    resolve: {
      // 配置路径别名
      alias: {
        // "@": "src" 脚手架3.x默认已经配置过了
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "network": "@/network",
        "views": "@/views"
      }
    }
  }
};
