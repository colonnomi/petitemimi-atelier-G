# PETITE MIMI ATELIER — V1

这是一个三语品牌展示网站，使用 Next.js App Router、TypeScript 和 Tailwind CSS。法语、英语和中文页面分别位于 `/fr`、`/en` 和 `/zh`；访问 `/` 会自动进入法语版。

## 在本机启动网站

1. 在 VS Code 中打开本项目文件夹。
2. 选择菜单 **Terminal → New Terminal（终端 → 新建终端）**。
3. 输入 `npm.cmd run dev` 并按 Enter。
4. 在浏览器打开 [http://localhost:3000](http://localhost:3000)。

停止网站时，回到终端按 **Ctrl + C**。

## 修改内容

- 三种语言的文案：`src/content/messages.ts`
- 页面版式与内容：`src/app/[locale]/page.tsx`
- 颜色、字体和手机适配样式：`src/app/globals.css`
- 当前联系邮箱是示例地址 `bonjour@petitemimiatelier.com`，正式发布前请替换成你自己的邮箱。
- 作品图片来自 Unsplash，用于概念演示。正式发布前请确认图片授权，或换成自己有权使用的素材。所有作品都已标注为 Concept / Démonstration，不代表真实客户案例。

## 常用命令

- `npm.cmd run dev`：启动开发版网站。
- `npm.cmd run lint`：检查代码中的常见问题。
- `npm.cmd run build`：构建正式发布版。

`node_modules` 是 npm 自动下载的依赖目录，不需要手动修改。

## 部署到 GitHub Pages

项目已配置为静态导出，运行 `npm.cmd run build` 后会生成 `out` 文件夹。`.github/workflows/deploy.yml` 会在推送到 `main` 分支或手动运行工作流时构建并部署该文件夹。

首次部署前，请在 GitHub 仓库 **Settings → Pages → Build and deployment** 中把来源设为 **GitHub Actions**。如果仓库默认分支不是 `main`，请把工作流中的分支名称改成实际分支。生产构建固定使用 `/petitemimi-atelier-G` 子路径；本地开发不加此前缀。
