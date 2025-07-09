<template>
  <div class="barrier-monitoring-page">
    <!-- 头部导航 -->
    <Header />

    <!-- 主要内容区域 -->
    <main class="main">
      <section class="page-hero">
        <div class="container">
          <h1 class="page-title">道闸与监控安装</h1>
          <p class="page-subtitle">专业的安防设备安装与维护服务</p>
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
  title: '道闸与监控安装 - 茂名寅晖科技',
  meta: [
    { name: 'description', content: '茂名寅晖科技提供专业的道闸与监控安装服务，包括智能道闸系统安装、高清监控设备部署、安防系统集成维护等。' },
    { name: 'keywords', content: '道闸安装,监控安装,安防系统,智能道闸,监控设备,茂名寅晖科技' }
  ]
})
</script>

<style scoped>
.barrier-monitoring-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  padding-top: 70px;
}

.page-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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