<template>
  <div class="home-page">
    <HomePage />
  </div>
</template>

<script setup>
// 设置页面标题和meta信息
useHead({
  title: '科技创新 - 引领未来',
  meta: [
    { name: 'description', content: '我们致力于通过创新的技术解决方案，为企业数字化转型提供强大支持，共创智能未来。' },
    { name: 'keywords', content: '科技创新,数字化转型,技术解决方案,企业服务' }
  ]
})
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}
</style>