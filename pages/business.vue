<template>
  <div class="business-page">
    <!-- 导航栏 -->
    <Header />

    <!-- 主要内容区域 -->
    <main class="main">
      <!-- 业务范围组件 -->
      <BusinessScope />
    </main>

    <!-- 公共底部 -->
    <Footer />
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '业务范围 - 科技创新官网',
  meta: [
    { name: 'description', content: '了解我们的核心业务：技术研发、产品创新、解决方案。为企业提供全方位的数字化转型服务。' },
    { name: 'keywords', content: '业务范围,技术研发,产品创新,解决方案,数字化转型' }
  ]
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.business-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 主要内容区域 */
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