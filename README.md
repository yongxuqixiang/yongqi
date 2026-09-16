# Yongqi Mao — Academic Homepage

学术主页,基于 [Astro](https://astro.build) 构建。极简黑白设计,自动适配深色模式。

线上地址:<https://yongxuqixiang.github.io/yongqi/>

## 本地开发

本项目使用放在 `~/Documents/.tools/node` 中的本地 Node.js,无需系统安装:

```bash
export PATH=~/Documents/.tools/node/bin:$PATH
npm run dev     # 开发服务器 http://localhost:4321/yongqi/
npm run build   # 构建到 dist/
```

## 如何维护内容

| 想改什么 | 改哪个文件 |
| --- | --- |
| 姓名 / 邮箱 / 简介 / 社交链接 | `src/data/profile.ts` |
| News 动态 | `src/data/news.ts` |
| 论文(新论文加一项即可) | `src/data/publications.ts` |
| 头像 | 放一张照片到 `public/avatar.jpg`(自动替换占位图) |
| 论文 PDF | 放到 `public/papers/`,在 publications.ts 里引用 |

新增论文:在 `publications.ts` 的数组里复制一项、修改字段即可,页面会按年份自动分组渲染。teaser 图建议放入 `public/images/`。

## 部署

推送到 GitHub `yongqi` 仓库的 `main` 分支后,`.github/workflows/deploy.yml` 会自动构建并发布。
需在仓库 **Settings → Pages → Source** 选择 **GitHub Actions**(仅需设置一次)。

站点配置在 `astro.config.mjs` 中:`base: '/yongqi/'` 对应 GitHub Pages 子路径部署;
若将来绑定独立域名,把 `base` 改为 `'/'` 即可。
