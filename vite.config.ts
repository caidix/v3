import { resolve } from 'path';
export default {
  alias: {
    '/@/': resolve(__dirname, '.', 'src'),
  },
  // 会使用 rollup 对 包重新编译，将编译成符合 esm 模块规范的新的包放入 node_modules/.vite_opt_cache
  optimizeDeps: {
    include: ['ant-design-vue/es/locale/zh_CN', '@ant-design/icons-vue', 'moment/locale/zh-cn'],
  },
  proxy: {
    '/api': {
      target: 'https://api.mtnhao.com',
      rewrite: (path: string) => path.replace(/^\/api/, ''),
      changeOrigin: true,
      secure: false, // https时需要加此参数
    },
  },
};

// Proxy: 'https://api.mtnhao.com/'
