module.exports = {
  printWidth: 100, // 最大换行长度
  tabWidth: 2, // tab缩进大小,默认为2
  useTabs: false, // 使用tab缩进，默认false
  semi: true, // 使用分号, 默认true
  singleQuote: false, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  trailingComma: "none", // 行尾逗号,默认none,可选 <none|es5|all>
  bracketSpacing: true, // 对象中的空格 默认true
  jsxBracketSameLine: false, // JSX标签闭合位置 默认false
  arrowParens: "avoid", // 箭头函数参数括号，默认always 可选 <avoid|always>
  htmlWhitespaceSensitivity: "ignore" // html空格严格程度，可选<css|strict|ignore>
};
