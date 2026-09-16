/**
 * 经历 —— 按时间倒序,新增条目直接在数组开头插入即可
 */
export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl?: string;
  /** 相对于 public/ 的路径,如 '/images/manifold-tech-logo.svg' */
  logo?: string;
  period: string;
  location?: string;
  /** 带教/导师等补充说明 */
  note?: string;
  desc?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: 'Research Intern',
    company: 'Manifold Tech',
    companyUrl: 'https://www.3dmanifold.com/',
    logo: '/images/manifold-tech-logo.svg',
    period: 'Apr 2026 – Present',
    location: 'Shenzhen, China',
    note: 'Mentored by Guotao Meng and Wei Xu',
    desc: [
      'Research on video re-shooting and 4D generation, resulting in Manifold4D.',
    ],
  },
];
