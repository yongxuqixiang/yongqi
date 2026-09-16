/**
 * 论文列表 —— 新增论文时在对应年份的数组里加一项即可,页面自动渲染
 */

export interface PubLink {
  label: string;
  href: string;
}

export interface Publication {
  title: string;
  authors: string[];
  /** 需要高亮(加下划线)的作者名 */
  me: string;
  venue: string;
  venueFull: string;
  year: number;
  /** 相对于 public/ 的路径,如 '/images/panogs-teaser.png' */
  image?: string;
  links: PubLink[];
  abstract?: string;
  bibtex: string;
}

export const publications: Publication[] = [
  {
    title: 'Manifold4D: Denoising on Point Cloud Rendered Manifolds for Video Re-shooting',
    authors: [
      'Yongqi Mao',
      'Zijia Dai',
      'Zhishuo Liu',
      'Wei Xu',
      'Kaiwei Wang',
      'Guotao Meng',
    ],
    me: 'Yongqi Mao',
    venue: 'arXiv 2026',
    venueFull: 'arXiv preprint arXiv:2608.28174',
    year: 2026,
    image: '/images/manifold4d-teaser.png',
    links: [
      // { label: 'PDF', href: 'https://arxiv.org/pdf/2608.28174' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2608.28174' },
    ],
    abstract:
      'Video re-shooting re-renders a monocular video of a dynamic scene along a user-specified camera trajectory. We identify a trust dilemma in the dominant paradigm, where point-cloud renders and the source video provide conflicting visual cues as denoising conditions. Manifold4D injects the render directly into the initial noise of flow matching — a geometry-bearing noise distribution we term the point cloud rendered manifold — leaving the source video as the only visual condition. It attains the best camera-control accuracy on every metric, lowering rotation error by 25–27% and translation error by up to 32% over the strongest baseline, while matching it in video fidelity.',
    bibtex: `@article{mao2026manifold4d,
  title   = {Manifold4D: Denoising on Point Cloud Rendered Manifolds for Video Re-shooting},
  author  = {Mao, Yongqi and Dai, Zijia and Liu, Zhishuo and Xu, Wei and Wang, Kaiwei and Meng, Guotao},
  journal = {arXiv preprint arXiv:2608.28174},
  year    = {2026}
}`,
  },
  {
    title: 'PanoGS-SLAM: Panoramic 3D Gaussian Splatting SLAM',
    authors: [
      'Yongqi Mao',
      'Hao Shi',
      'Yufan Zhang',
      'Zhonghua Yi',
      'Xiangfei Guo',
      'Kaiwei Wang',
    ],
    me: 'Yongqi Mao',
    venue: 'IROS 2026',
    venueFull:
      'IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)',
    year: 2026,
    image: '/images/panogs-teaser.png',
    links: [
      // { label: 'PDF', href: '/papers/panogs-slam.pdf' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2609.17387' },
      // TODO: 代码开源后替换为真实仓库地址
      { label: 'Code', href: 'https://github.com/yongxuqixiang' },
    ],
    abstract:
      'We present PanoGS-SLAM, the first panoramic dense SLAM system built on 3D Gaussian Splatting. Our method performs differentiable rendering and pose optimization directly in the spherical domain, enabling omnidirectional photometric constraints for more stable tracking. A sphere-consistent photometric loss and a depth-guided Gaussian initialization strategy further improve geometric consistency and robustness. Experiments on the PALVIO and SynPano benchmarks show that PanoGS-SLAM consistently outperforms geometric and GS-based baselines in tracking accuracy and rendering quality, while achieving real-time performance.',
    bibtex: `@inproceedings{mao2026panogsslam,
  title     = {PanoGS-SLAM: Panoramic 3D Gaussian Splatting SLAM},
  author    = {Mao, Yongqi and Shi, Hao and Zhang, Yufan and Yi, Zhonghua and Guo, Xiangfei and Wang, Kaiwei},
  booktitle = {IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)},
  year      = {2026}
}`,
  },
];
