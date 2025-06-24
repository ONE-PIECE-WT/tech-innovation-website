<template>
  <div class="media-page">
    <!-- 导航栏 -->
    <Header />

    <!-- 主要内容区域 -->
    <main class="main">
      <!-- 媒体中心组件 -->
      <MediaCenter />
    </main>

    <!-- 公共底部 -->
    <Footer />
  </div>
</template>

<script setup>
// 页面标题和meta信息
useHead({
  title: '媒体中心 - 科技创新公司',
  meta: [
    { name: 'description', content: '科技创新公司媒体中心，提供最新的公司新闻、行业资讯、产品发布和技术动态。了解我们的最新发展和创新成果。' },
    { name: 'keywords', content: '科技创新,媒体中心,公司新闻,行业资讯,产品发布,技术动态' }
  ]
})
</script>

<style scoped>
.media-page {
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
}

.main {
  margin-top: 70px;
  flex: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main {
    margin-top: 60px;
  }
}
</style>