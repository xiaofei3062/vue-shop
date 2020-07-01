module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {},
    "postcss-pxtorem": {
      rootValue: 37.5,
      unitPrecision: 6,
      propList: ["*"],
      selectorBlackList: [".hairlines"],
      replace: true,
      mediaQuery: true,
      minPixelValue: 2
    },
    cssnano: {
      "cssnano-preset-advanced": {
        zindex: false,
        autoprefixer: false
      }
    }
  }
};
