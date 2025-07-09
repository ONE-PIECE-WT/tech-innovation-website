<template>
  <div class="website-development-page">
    <!-- 头部导航 -->
    <Header />

    <!-- 主要内容区域 -->
    <main class="main">
      <section class="page-hero">
        <div class="container">
          <h1 class="page-title">官网实现</h1>
          <p class="page-subtitle">专业的企业网站建设与优化服务</p>
        </div>
      </section>

      <!-- 内容区域 - 待填充 -->
      <section class="content-section">
        <div class="container">
          <div class="content-placeholder">
            <h2>页面内容待完善</h2>
            <p>此页面内容将在后续开发中完善...</p>
          </div>
        </div>
      </section>
    </main>

    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script setup>
// 设置页面元信息
useHead({
  title: '官网实现 - 茂名寅晖科技',
  meta: [
    { name: 'description', content: '茂名寅晖科技提供专业的官网实现服务，包括响应式网站设计、企业品牌展示、SEO优化与维护等。' },
    { name: 'keywords', content: '官网建设,网站开发,响应式设计,企业网站,SEO优化,茂名寅晖科技' }
  ]
})
</script>

<style scoped>
.website-development-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  padding-top: 70px;
}

.page-hero {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.content-section {
  padding: 80px 0;
}

.content-placeholder {
  text-align: center;
  padding: 60px 20px;
  background: #f8f9fa;
  border-radius: 12px;
}

.content-placeholder h2 {
  color: #333;
  margin-bottom: 1rem;
}

.content-placeholder p {
  color: #666;
  font-size: 1.1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
}
</style>