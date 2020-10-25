/**
 * rule配置说明:：rule由name和配置数组组成，如：'name:[0, 'always', 72]'，数组中第一位为level，
 * 可选0,1,2，0为disable，1为warning，2为error，第二位为应用与否，可选always|never，第三位该rule的值。
 * https://github.com/conventional-changelog/commitlint#readme
 * feat 增加新功能
 * fix 修复问题/BUG
 * style 代码风格相关无影响运行结果的
 * perf 优化/性能提升
 * refactor 重构
 * revert 撤销修改
 * test 测试相关
 * docs 文档/注释
 * chore 依赖更新/脚手架配置修改等
 * workflow 工作流改进
 * ci 持续集成
 * mod 不确定分类的修改
 * wip 开发中
#示例
 */
module.exports = {
  extents: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'perf',
        'style',
        'docs',
        'test',
        'refactor',
        'build',
        'ci',
        'chore',
        'revert',
        'wip',
        'workflow',
        'types',
      ],
    ],
  },
};
