# music-v3 基于 vue3+ts+Antd

## 安装依赖

> devDependencies：开发环境使用 dependencies：生产环境使用

1. npm init vite-app \<project-name> + npm install

2. 集成 ts npm i --save-dev ts-node typescript

3. 集成 eslint npm i eslint-plugin-vue eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev ,基于 eslintrc.js 文件

4. 集成 prettier npm i prettier eslint-config-prettier eslint-plugin-prettier --save-dev

5. 集成 vuex 和 vue-router npm i vuex@next vue-router@next

6. [antd](https://2x.antdv.com/docs/vue/customize-theme-cn)

7. 集成 [stylelint](https://www.cnblogs.com/jiaoshou/p/11284204.html) npm install stylelint stylelint-config-standard stylelint-order stylelint-config-prettier --save-dev 基于 stylelint.config.js 文件

8. 集成 cross-env npm install --save-dev cross-env 来设置环境变量
9. 集成 [rimraf](https://www.npmjs.com/package/rimraf) npm install rimraf --save-dev 来删除某些如 node_modules 文件

## 执行

- npm run lint:eslint eslint 检测
- npm run lint:stylelint css 检测
