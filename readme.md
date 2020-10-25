# music-v3 基于 vue3+ts+Antd

> fork 目标：[qq 音乐 h5](https://y.qq.com/?ADTAG=myqq#type=index)

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

10. 集成 sass npm i sass --save-dev

11. 集成 commit-lint 来设置 commit 语句统一 npm install --save-dev husky @commitlint/config-conventional @commitlint/cli [配置文件](./commitlint.config.js) [格式](#git), npm i lint-staged ls-lint -D 来设置 pre-commit commit 的提交前检测 [ls-lint 配置表](https://ls-lint.org/)[ls-lint 配置文件](./.ls-lint.yml)[lint-staged 配置文件](./lint-staged.config.js)

## 执行

- npm run lint:eslint eslint 检测
- npm run lint:stylelint css 检测

## 权限的控制

> 权限控制分为两个方面： 1.通过后端传回来的用户的角色权限来控制路由 2. 通过后台配置动态生成路由表来控制路由

## 提交格式

### <span id="git">git 提交格式</span>

> npm install commitizen -g 使用 git cz 来协助你提交

提交格式：git commit -m \<type>[optional scope]: \<description>
build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交
docs：文档更新
feat：新增功能
fix：bug 修复
perf：性能优化
refactor：重构代码(既没有新增功能，也没有修复 bug)
style：不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
test：新增测试用例或是更新现有测试
revert：回滚某个更早之前的提交
chore：不属于以上类型的其他类型(日常事务)

### lslint 含义

- camelCased (驼峰式)
- kebab-case（短横线命名）
- PascalCase(首字母大写)
