<template>
  <div class="contact-page">
    <!-- 导航栏 -->
    <Header />

    <!-- 主要内容区域 -->
    <main class="main">
      <!-- 联系我们内容 -->
      <section class="contact-hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">联系我们</h1>
            <p class="hero-subtitle">我们期待与您的合作，为您提供专业的技术解决方案</p>
          </div>
        </div>
      </section>

      <!-- 联系信息区域 -->
      <section class="contact-info">
        <div class="container">
          <div class="contact-grid">
            <!-- 联系方式 -->
            <div class="contact-card">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" fill="currentColor"/>
                </svg>
              </div>
              <h3>邮箱联系</h3>
              <p>2136389542@qq.com</p>
            </div>

            <!-- 电话联系 -->
            <div class="contact-card">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
              </div>
              <h3>电话咨询</h3>
              <p>400-123-4567</p>
            </div>

            <!-- 地址信息 -->
            <div class="contact-card">
              <div class="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
              </div>
              <h3>公司地址</h3>
              <p>茂名市油城二路北侧3-13号楼一楼101</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 联系表单区域 -->
      <section class="contact-form-section">
        <div class="container">
          <div class="form-wrapper">
            <h2 class="section-title">发送消息</h2>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">姓名</label>
                  <input type="text" id="name" v-model="form.name" required>
                </div>
                <div class="form-group">
                  <label for="email">邮箱</label>
                  <input type="email" id="email" v-model="form.email" required>
                </div>
              </div>
              <div class="form-group">
                <label for="subject">主题</label>
                <input type="text" id="subject" v-model="form.subject" required>
              </div>
              <div class="form-group">
                <label for="message">消息内容</label>
                <textarea id="message" v-model="form.message" rows="6" required></textarea>
              </div>
              <button type="submit" class="submit-btn">发送消息</button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <!-- 公共底部 -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 页面标题和meta信息
useHead({
  title: '联系我们 - 寅晖科技',
  meta: [
    { name: 'description', content: '联系寅晖科技，获取专业的技术解决方案。我们提供道闸监控安装、官网开发、钉钉应用开发、企业存储等服务。' },
    { name: 'keywords', content: '联系我们,寅晖科技,技术解决方案,道闸监控,官网开发,钉钉应用,企业存储' }
  ]
})

// 表单数据
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// 提交表单
const submitForm = () => {
  // 这里可以添加表单提交逻辑
  console.log('表单提交:', form.value)
  alert('消息已发送，我们会尽快回复您！')
  // 重置表单
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: #f8f9fa;
}

.main {
  margin-top: 70px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero区域 */
.contact-hero {
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* 联系信息区域 */
.contact-info {
  padding: 80px 0;
  background: white;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.contact-card {
  text-align: center;
  padding: 40px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
}

.contact-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #2d3748;
}

.contact-card p {
  color: #718096;
  font-size: 1.1rem;
}

/* 联系表单区域 */
.contact-form-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.form-wrapper {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 60px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 40px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #2563eb;
}

.submit-btn {
  background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-top: 20px;
}

.submit-btn:hover {
  transform: translateY(-2px);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main {
    margin-top: 60px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .contact-hero {
    padding: 60px 0;
  }
  
  .contact-info,
  .contact-form-section {
    padding: 60px 0;
  }
  
  .form-wrapper {
    padding: 40px 20px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>