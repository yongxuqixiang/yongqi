import { defineConfig } from 'astro/config';

// 部署在 GitHub Pages 子路径 https://yongxuqixiang.github.io/yongqi/
// 若将来使用独立域名,将 base 改为 '/'
export default defineConfig({
  base: '/yongqi/',
  site: 'https://yongxuqixiang.github.io',
});
