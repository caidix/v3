// 运行tsc对TypeScript文件的更改，但不传递任何文件名参数
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.vue': ['prettier --write', 'stylelint --fix'],
  '*.{scss,less,styl,css,html}': ['stylelint --fix', 'prettier --write'],
  '*.md': ['prettier --write'],
};
