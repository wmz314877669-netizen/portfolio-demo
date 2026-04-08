# GitHub Pages 部署检查清单

> 用于 Next.js 静态导出到 GitHub Pages

## 部署前检查

- [ ] `next.config.js` 中 `basePath: '/portfolio-demo'` 设置正确
- [ ] `next.config.js` 中 `output: 'export'` 和 `distDir: 'docs'` 已配置
- [ ] `docs/.nojekyll` 文件存在（防止 Jekyll 忽略 `_next/` 目录）
- [ ] 本地构建成功：`npm run build`
- [ ] 本地预览正常：`npx serve docs`，访问 `http://localhost:3000/portfolio-demo`

## 部署后验证

- [ ] 推送到 GitHub：`git push origin main`
- [ ] 等待 1-2 分钟（GitHub Pages 部署时间）
- [ ] 访问 `https://wmz314877669-netizen.github.io/portfolio-demo/`
- [ ] 检查样式是否正常（黑底黄字）
- [ ] 检查控制台无 404 错误

## 常见问题

| 现象 | 原因 | 解决 |
|:---|:---|:---|
| 页面空白/样式丢失 | 缺少 `.nojekyll` | 添加空文件 `docs/.nojekyll` |
| CSS/JS 404 | Jekyll 忽略 `_next/` | 同上 |
| 路径错误 | `basePath` 未设置 | 检查 `next.config.js` |
| 图片不显示 | `images.unoptimized: true` 未设置 | 添加配置 |

## 快速修复

```bash
# 如果样式丢失，检查 .nojekyll
ls docs/.nojekyll || (touch docs/.nojekyll && git add docs/.nojekyll && git commit -m "Add .nojekyll" && git push)
```
