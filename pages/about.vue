<template>
  <div class="about-page">
    <!-- 导航栏 -->
    <Header />

    <!-- 主要内容区域 -->
    <main class="main">
      <!-- 公司简介组件 -->
      <AboutCompany />
    </main>

    <!-- 公共底部 -->
    <Footer />
  </div>
</template>

<script setup>
// 页面标题和meta信息
useHead({
  title: '关于我们 - 科技创新公司',
  meta: [
    { name: 'description', content: '了解科技创新公司的发展历程、企业文化、团队介绍和核心价值观。我们致力于推动科技创新，为客户提供优质的技术解决方案。' },
    { name: 'keywords', content: '科技创新,公司简介,企业文化,团队介绍,发展历程,核心价值观' }
  ]
})
</script>

<style scoped>
.about-page {
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