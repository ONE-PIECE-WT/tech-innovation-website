# 图片资源组织规范

本文档描述了项目中图片资源的组织结构和命名规范。

## 目录结构

```
images/
├── pages/          # 页面专用图片
│   ├── home/       # 首页图片
│   ├── about/      # 公司简介页面图片
│   ├── business/   # 业务范围页面图片
│   ├── dingtalk/   # 钉钉开发页面图片
│   ├── website/    # 官网开发页面图片
│   └── barrier/    # 道闸监控页面图片
├── media/          # 媒体内容图片
│   ├── news/       # 新闻相关图片
│   └── videos/     # 视频缩略图
├── avatars/        # 用户头像
└── icons/          # 图标文件
```

## 命名规范

### 基本原则
- 使用英文命名，避免中文字符
- 使用连字符 `-` 分隔单词
- 使用小写字母
- 添加描述性前缀或后缀

### 具体规范

#### 页面图片
- `hero-background.png` - 页面主背景图
- `hero-image.png` - 页面主要展示图
- `section-bg.png` - 区块背景图
- `feature-*.png` - 功能特性图片

#### 媒体图片
- `news-1.png`, `news-2.png` - 新闻图片（按序号）
- `video-1.png`, `video-2.png` - 视频缩略图（按序号）

#### 图标文件
- `product-innovation.png` - 产品创新图标
- `tech-development.png` - 技术研发图标
- `solutions.png` - 解决方案图标
- `media-center.png` - 媒体中心图标

#### 头像文件
- `avatar1.png`, `avatar2.png` - 用户头像（按序号）

## 使用示例

### 在 Vue 组件中引用

```vue
<!-- 页面专用图片 -->
<img src="/images/pages/dingtalk/hero-image.png" alt="钉钉" />

<!-- 媒体图片 -->
<img src="/images/media/news/news-1.png" alt="新闻" />

<!-- 图标 -->
<img src="/images/icons/solutions.png" alt="解决方案" />

<!-- 头像 -->
<img src="/images/avatars/avatar1.png" alt="用户头像" />
```

## 添加新图片的流程

1. **确定图片类型**：页面专用、媒体内容、图标或头像
2. **选择合适目录**：根据图片用途放入对应文件夹
3. **遵循命名规范**：使用英文、连字符、小写字母
4. **更新引用路径**：在代码中使用新的路径格式
5. **测试验证**：确保图片能正常显示

## 维护建议

- 定期清理未使用的图片文件
- 保持文件命名的一致性
- 优化图片大小和格式
- 为重要图片提供多种尺寸版本
- 考虑使用 WebP 格式提升性能

## 迁移记录

### 2025-01-09 重构
- 将所有图片从 `public/` 根目录迁移到 `public/images/` 分类目录
- 重命名中文文件名为英文
- 建立新的目录结构和命名规范
- 更新代码中的图片引用路径