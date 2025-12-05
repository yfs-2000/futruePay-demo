/** @type {import("prettier").Config} */
export default {
  // 插件配置
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],

  // 针对 Astro 文件的特殊配置
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],

  // 基础配置 - 遵循 Prettier 3.x 推荐默认值及社区最佳实践
  printWidth: 100, // 单行代码长度，推荐 80-120，100 是折中方案
  tabWidth: 2, // 缩进空格数
  useTabs: false, // 使用空格缩进
  semi: true, // 句末加分号 (TypeScript/Astro 社区常用，也可改为 false)
  singleQuote: true, // 使用单引号
  quoteProps: 'as-needed', // 仅在必要时给对象属性加引号
  jsxSingleQuote: false, // JSX 中使用双引号
  trailingComma: 'all', // 尽可能使用尾随逗号 (Prettier 3.x 默认值，利于 git diff)
  bracketSpacing: true, // 对象字面量的大括号间保留空格
  bracketSameLine: false, // HTML/JSX 标签的 > 放在下一行
  arrowParens: 'always', // 箭头函数参数始终加括号
  endOfLine: 'lf', // 强制使用 LF 换行符 (跨平台一致性)
  htmlWhitespaceSensitivity: 'css', // HTML 空白敏感度
};
