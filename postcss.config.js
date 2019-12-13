module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {},
    "postcss-pxtorem": {
      rootValue: 37.5,
      unitPrecision: 10,
      propList: ["*"],
      selectorBlackList: [".ignore", ".hairlines"],
      replace: true,
      mediaQuery: true,
      minPixelValue: 1
    },
    "cssnano": {
      "cssnano-preset-advanced": {
        zindex: false,
        autoprefixer: false
      }
    }
  }
};
