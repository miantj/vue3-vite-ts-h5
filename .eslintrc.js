module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/eslint-config-typescript',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        /**
         *  "off" -> 0 关闭规则
         *  "warn" -> 1 开启警告规则
         *  "error" -> 2 开启错误规则
         */
        'end-of-line': 'auto',
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unreachable': 2, //不能有无法执行的代码
        'no-var': 1, //禁用var，用let和const代替
        'no-unused-vars': [
            2,
            {
                vars: 'all',
                args: 'after-used',
            },
        ], //不能有声明后未被使用的变量或参数
        'no-const-assign': 2, //禁止修改const声明的变量
        'no-extra-semi': 2, //禁止多余的冒号
    },
}
