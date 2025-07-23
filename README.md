# 茂名寅晖科技官网

一个基于 Nuxt 3 构建的现代化企业官网，展示茂名寅晖科技有限公司的业务范围、企业文化和技术实力。

## 项目概述

本项目是茂名寅晖科技有限公司的官方网站，采用现代化的技术栈和设计理念，为用户提供优质的浏览体验。网站主要展示公司的核心业务、企业文化、媒体资讯等内容。

### 主要功能

- **首页展示**: 企业形象展示、核心业务介绍、数据统计
- **公司简介**: 企业发展历程、文化价值观、团队介绍
- **业务范围**: 
  - 道闸与监控安装服务
  - 企业官网开发与维护
  - 钉钉应用开发与数字化解决方案
- **媒体中心**: 公司资讯、行业动态、活动报道
- **联系我们**: 多种联系方式、在线咨询

## 技术栈

- **框架**: Nuxt 3 (Vue 3)
- **样式**: CSS3 + 响应式设计
- **图标**: Font Awesome
- **动画**: AOS (Animate On Scroll)
- **图片优化**: Nuxt Image
- **开发语言**: TypeScript

## 项目结构

```
tech-innovation-website/
├── components/          # 可复用组件
│   ├── AboutCompany.vue    # 公司简介组件
│   ├── BusinessScope.vue   # 业务范围组件
│   ├── Footer.vue          # 页脚组件
│   ├── Header.vue          # 页头组件
│   ├── HomePage.vue        # 首页组件
│   ├── MediaCenter.vue     # 媒体中心组件
│   └── NavBar.vue          # 导航栏组件
├── pages/               # 页面路由
│   ├── about.vue           # 关于我们页面
│   ├── barrier-monitoring.vue  # 道闸监控页面
│   ├── business.vue        # 业务范围页面
│   ├── dingtalk-development.vue # 钉钉开发页面
│   ├── index.vue           # 首页
│   ├── media.vue           # 媒体中心页面
│   └── website-development.vue # 网站开发页面
├── public/              # 静态资源
│   ├── images/             # 图片资源
│   ├── favicon.ico         # 网站图标
│   └── robots.txt          # SEO配置
├── app.vue              # 根组件
├── nuxt.config.ts       # Nuxt配置文件
└── package.json         # 项目依赖
```

## 安装与运行

### 环境要求

- Node.js >= 16.x
- npm >= 7.x 或 yarn >= 1.x

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 开发环境

```bash
# 启动开发服务器
npm run dev

# 或
yarn dev
```

访问 `http://localhost:3000` 查看网站

### 生产构建

```bash
# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

### 静态生成

```bash
# 生成静态网站
npm run generate
```

## 优化建议

### 1. 性能优化

#### 图片优化
- [ ] **压缩现有图片**: 使用工具如 TinyPNG 或 ImageOptim 压缩 `/public/images/` 目录下的图片
- [ ] **实现懒加载**: 为所有图片添加 `loading="lazy"` 属性
- [ ] **使用 WebP 格式**: 将 PNG/JPG 图片转换为 WebP 格式以减少文件大小
- [ ] **添加图片占位符**: 实现骨架屏或模糊占位符提升用户体验

#### 代码优化
- [ ] **组件懒加载**: 对非首屏组件实现动态导入
- [ ] **CSS 优化**: 移除未使用的 CSS 样式，使用 PurgeCSS
- [ ] **JavaScript 优化**: 代码分割，减少首屏加载的 JS 体积
- [ ] **缓存策略**: 配置适当的浏览器缓存策略

### 2. SEO 优化

- [ ] **完善 meta 标签**: 为每个页面添加独特的 title、description 和 keywords
- [ ] **结构化数据**: 添加 JSON-LD 结构化数据标记
- [ ] **sitemap.xml**: 生成并提交网站地图
- [ ] **robots.txt**: 优化搜索引擎爬虫配置
- [ ] **Open Graph**: 添加社交媒体分享优化标签
- [ ] **内链优化**: 完善内部链接结构

### 3. 用户体验优化

#### 响应式设计
- [ ] **移动端优化**: 优化移动设备上的布局和交互
- [ ] **触摸友好**: 确保按钮和链接有足够的点击区域
- [ ] **加载状态**: 添加加载动画和进度指示器

#### 交互优化
- [ ] **平滑滚动**: 实现页面内锚点的平滑滚动
- [ ] **返回顶部**: 添加返回顶部按钮
- [ ] **表单验证**: 完善表单的实时验证和错误提示
- [ ] **无障碍访问**: 添加 ARIA 标签，提升可访问性

### 4. 功能完善

#### 内容完善
- [ ] **完善页面内容**: `website-development.vue` 页面内容待完善
- [ ] **添加案例展示**: 在业务页面添加成功案例
- [ ] **客户评价**: 添加客户反馈和评价系统
- [ ] **在线客服**: 集成在线客服功能

#### 新功能开发
- [ ] **多语言支持**: 添加中英文切换功能
- [ ] **搜索功能**: 实现站内搜索
- [ ] **新闻系统**: 完善媒体中心的内容管理
- [ ] **联系表单**: 实现在线留言和咨询功能

### 5. 技术优化

#### 代码质量
- [ ] **ESLint 配置**: 添加代码规范检查
- [ ] **Prettier 配置**: 统一代码格式化
- [ ] **TypeScript 完善**: 完善类型定义
- [ ] **单元测试**: 添加组件单元测试

#### 部署优化
- [ ] **CI/CD**: 配置自动化部署流程
- [ ] **CDN 配置**: 使用 CDN 加速静态资源
- [ ] **HTTPS**: 确保全站 HTTPS
- [ ] **性能监控**: 添加性能监控和错误追踪

### 6. 安全优化

- [ ] **内容安全策略**: 配置 CSP 头部
- [ ] **XSS 防护**: 确保用户输入的安全处理
- [ ] **CSRF 防护**: 添加跨站请求伪造防护
- [ ] **依赖安全**: 定期更新依赖包，修复安全漏洞

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系方式

- **公司**: 茂名寅晖科技有限公司
- **地址**: 茂名市油城二路北侧3-13号楼一楼101
- **电话**: 18813359018
- **邮箱**: 2136389542@qq.com

---

*最后更新: 2024年12月*

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
