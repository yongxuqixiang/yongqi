/**
 * News 动态 —— 按时间倒序,新增条目直接在数组开头插入即可
 */
export interface NewsItem {
  date: string; // 显示用日期,如 'Sep 2026'
  html: string; // 支持 <a> 等内联标签
  highlight?: boolean;
}

export const news: NewsItem[] = [
  {
    date: 'Sep 2026',
    html: 'Our paper <em>PanoGS-SLAM</em> is accepted to <a href="https://www.iros.org/" target="_blank" rel="noopener">IROS 2026</a>.',
    highlight: true,
  },
  {
    date: 'Aug 2026',
    html: 'Released <em>Manifold4D</em> on <a href="https://arxiv.org/abs/2608.28174" target="_blank" rel="noopener">arXiv</a>.',
  },
  {
    date: 'Mar 2025',
    html: 'Started maintaining technical notes on 3D Gaussian Splatting and visual SLAM.',
  },
];
