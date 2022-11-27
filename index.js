module.exports = {
  env: {
    browser: true,
    es2021 : true,
    node   : true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  overrides    : [],
  parser       : '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType : 'module',
  },
  plugins: ['@typescript-eslint'],

  /**
   * http://eslint.cn/docs/rules/ 查看规则
   */
  rules: {
    // 2格缩进
    '@typescript-eslint/indent': [
      'warn',
      2,
    ],

    // 单引号
    'quotes': [
      'warn',
      'single',
    ],

    // 分号
    'semi': [
      'warn',
      'always',
    ],

    // 强制数组方法的回调函数中有 return 语句
    'array-callback-return': 'error',

    // 强制所有控制语句使用大括号
    'curly': 'error',

    // 要求 switch 语句中有 default 分支
    'default-case': 'error',

    // 强制尽可能地使用点号
    'dot-notation': 'error',

    // 要求使用 === 和 !==
    'eqeqeq': 'error',

    // 禁止使用多行字符串
    'no-multi-str': 'error',

    // 要求 for-in 循环中有一个 if 语句，因为会把从原型链继承来的属性也包括进来
    'guard-for-in': 'warn',

    // 禁止扩展原生类型
    'no-extend-native': 'error',

    // 禁止使用短符号进行类型转换
    'no-implicit-coercion': 'error',

    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'error',

    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': 'error',

    // 禁止删除变量
    'no-delete-var': 'error',

    // 禁用未声明的变量
    'no-undef': 'error',

    // 警告出现未使用过的变量
    '@typescript-eslint/no-unused-vars': 'warn',

    // 禁止在变量定义之前使用它们
    'no-use-before-define': 'warn',

    // 如果数组元素内或元素间有换行，则要求数组的中括号换行
    'array-bracket-newline': ['warn', { multiline: true }],

    // 数组元素的换行保持一致
    'array-element-newline': ['warn', 'consistent'],

    // 要求大括号后有空格
    'block-spacing': 'warn',

    // 强制在代码块中使用一致的大括号风格
    'brace-style': 'warn',

    // 若最后一个元素与括号不在同一行，则强制使用拖尾逗号
    'comma-dangle': ['warn', 'always-multiline'],

    // 逗号前禁止空格，逗号后要求空格
    'comma-spacing': ['warn', { before: false, after: true }],

    // 要求逗号放在末尾
    'comma-style': ['error', 'last'],

    // 禁止在计算属性中出现空格
    'computed-property-spacing': ['error', 'never'],

    // 要求在非空文件末尾至少存在一行空行
    'eol-last': ['error', 'always'],

    // 不允许在 case 子句中使用词法声明
    'no-case-declarations': 'error',

    // 禁止在函数名和开括号之间有空格
    'func-call-spacing': ['error', 'never'],

    // 要求函数表达式有一个名字
    'func-names': ['error', 'always'],

    // 要求使用函数声明或箭头函数，禁用函数表达式
    'func-style': ['warn', 'declaration', { allowArrowFunctions: true }],

    // 如果函数的任一参数有换行，则要求在函数括号内换行。否则禁止换行
    'function-paren-newline': ['warn', 'multiline'],

    // 禁止在箭头函数体之前出现换行
    'implicit-arrow-linebreak': ['warn', 'beside'],

    'key-spacing': [
      'warn', {
        beforeColon: false, // 禁止在对象字面量的键和冒号之间存在空格
        afterColon : true, // 要求在对象字面量的冒号和值之间存在至少有一个空格
        mode       : 'strict', // 强制在冒号前后只有一个空格
      },
    ],

    // 要求关键字前后各有一个空格
    'keyword-spacing': [
      'warn', {
        before: true,
        after : true,
      },
    ],

    // 要求在类成员之后有一行空行
    'lines-between-class-members': ['warn', 'always'],

    // 方法链一行最大深度为 2
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 2 }],

    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',

    // 禁止使用 空格 和 tab 混合缩进
    'no-mixed-spaces-and-tabs': 'error',

    // 禁止连续赋值
    'no-multi-assign': 'error',

    // 禁用 tab
    'no-tabs': 'error',

    // 禁止行尾空格
    'no-trailing-spaces': 'warn',

    // 大括号内前后空格，如果是数组则不需要空格
    'object-curly-spacing': ['warn', 'always', { arraysInObjects: false }],

    // 要求把换行符放在操作符前面
    'operator-linebreak': ['error', 'before'],

    'quote-props': ['warn', 'consistent-as-needed'],

    // 强制分号之后有空格，禁止分号之前有空格
    'semi-spacing': ['warn', { before: false, after: true }],

    // 强制分号出现在句子末尾
    'semi-style': ['error', 'last'],

    // 块语句必须总是至少有一个前置空格
    'space-before-blocks': 'warn',

    // 禁止函数括号前出现空格，async 箭头函数除外
    'space-before-function-paren': [
      'error', {
        anonymous : 'never',
        named     : 'never',
        asyncArrow: 'always',
      },
    ],

    // 要求运算符周围有空格
    'space-infix-ops': ['warn', { int32Hint: false }],

    // 注释后空格
    'spaced-comment': ['warn', 'always'],

    // switch 子句的冒号要求前无空格后有空格
    'switch-colon-spacing': ['warn', { after: true, before: false }],

    // 正则表达式要求括号包裹
    'wrap-regex': 'error',

    // 关闭箭头函数体使用大括号的规则
    'arrow-body-style': 'off',

    // 箭头函数的参数要求用括号
    'arrow-parens': ['warn', 'always'],

    // 箭头函数前后空格
    'arrow-spacing': ['warn', { before: true, after: true }],

    // 要求构造函数中调用 super()
    'constructor-super': 'error',

    // 不允许修改类声明的变量
    'no-class-assign': 'error',

    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': ['error', { allowParens: true }],

    // 不允许改变用const声明的变量
    'no-const-assign': 'error',

    // 禁止重复导入
    'no-duplicate-imports': ['warn', { includeExports: true }],

    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 'warn',

    // 建议使用剩余参数代替 arguments
    'prefer-rest-params': 'error',

    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 'error',

    // 模板字符串中的嵌入表达式要求有空格
    'template-curly-spacing': ['error', 'always'],
  },
};
