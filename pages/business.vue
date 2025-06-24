<template>
  <div class="business-page">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 主要内容区域 -->
    <main class="main">
      <!-- 业务范围组件 -->
      <BusinessScope />
    </main>

    <!-- 公共底部 -->
    <footer class="footer">
      <div class="footer-content">
        <!-- 公司品牌区域 -->
        <div class="footer-section footer-brand">
          <div class="footer-logo">
            <div class="footer-logo-icon">
              <div class="icon-square"></div>
            </div>
            <span class="footer-logo-text">科技创新</span>
          </div>
          <p class="footer-description">
            致力于为企业提供前沿的技术解决方案，推动数字化转型，创造智能未来。
          </p>
          <div class="footer-social">
            <a href="#" class="social-link" aria-label="微信">
              <i class="fab fa-weixin"></i>
            </a>
            <a href="#" class="social-link" aria-label="微博">
              <i class="fab fa-weibo"></i>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" class="social-link" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>

        <!-- 快速链接 -->
        <div class="footer-section">
          <h3 class="footer-title">快速链接</h3>
          <div class="footer-links">
            <NuxtLink to="/" class="footer-link">首页</NuxtLink>
            <NuxtLink to="/business" class="footer-link">业务范围</NuxtLink>
            <NuxtLink to="/about" class="footer-link">关于我们</NuxtLink>
            <NuxtLink to="/contact" class="footer-link">联系我们</NuxtLink>
          </div>
        </div>

        <!-- 联系方式 -->
        <div class="footer-section">
          <h3 class="footer-title">联系方式</h3>
          <div class="footer-contact">
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>北京市朝阳区科技园区创新大厦</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <span>+86 400-123-4567</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <span>contact@techinnovation.com</span>
            </div>
          </div>
        </div>

        <!-- 订阅功能 -->
        <div class="footer-section">
          <h3 class="footer-title">订阅我们</h3>
          <p class="footer-subscribe-text">获取最新的技术资讯和产品动态</p>
          <form class="footer-subscribe" @submit.prevent="handleSubscribe">
            <input 
              type="email" 
              v-model="subscribeEmail"
              placeholder="请输入您的邮箱"
              class="subscribe-input"
              required
            />
            <button type="submit" class="subscribe-btn">
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
          <div v-if="subscribeMessage" class="subscribe-message" :class="subscribeStatus">
            {{ subscribeMessage }}
          </div>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">
            © 2024 科技创新有限公司. 保留所有权利.
          </p>
          <div class="footer-legal">
            <a href="#" class="legal-link">隐私政策</a>
            <a href="#" class="legal-link">服务条款</a>
            <a href="#" class="legal-link">Cookie政策</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 页面元数据
useHead({
  title: '业务范围 - 科技创新官网',
  meta: [
    { name: 'description', content: '了解我们的核心业务：技术研发、产品创新、解决方案。为企业提供全方位的数字化转型服务。' },
    { name: 'keywords', content: '业务范围,技术研发,产品创新,解决方案,数字化转型' }
  ]
})



// 订阅功能
const subscribeEmail = ref('')
const subscribeMessage = ref('')
const subscribeStatus = ref('')

// 处理订阅
const handleSubscribe = async () => {
  if (!subscribeEmail.value) {
    subscribeMessage.value = '请输入有效的邮箱地址'
    subscribeStatus.value = 'error'
    return
  }

  try {
    // 这里可以添加实际的订阅逻辑
    subscribeMessage.value = '订阅成功！感谢您的关注'
    subscribeStatus.value = 'success'
    subscribeEmail.value = ''
    
    // 3秒后清除消息
    setTimeout(() => {
      subscribeMessage.value = ''
      subscribeStatus.value = ''
    }, 3000)
  } catch (error) {
    subscribeMessage.value = '订阅失败，请稍后重试'
    subscribeStatus.value = 'error'
  }
}
</script>

<style scoped>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.business-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* 主要内容区域 */
.main {
  margin-top: 70px;
}



/* 底部样式 */
.footer {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>') repeat;
  opacity: 0.3;
}

.footer-content {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 20px 40px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 60px;
  align-items: start;
}

.footer-section {
  min-height: 280px;
}

.footer-brand {
  max-width: 350px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.footer-logo-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}

.footer-logo-icon::before {
  content: '';
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  transform: rotate(45deg);
}

.footer-logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
}

.footer-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 32px;
  font-size: 0.95rem;
}

.footer-social {
  display: flex;
  gap: 16px;
}

.social-link {
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: #ffffff;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.footer-link:hover {
  color: #ffffff;
  padding-left: 8px;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

.contact-item i {
  width: 20px;
  color: #667eea;
  text-align: center;
  flex-shrink: 0;
}

.footer-subscribe-text {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.footer-subscribe {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.subscribe-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 0.95rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.subscribe-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.subscribe-input:focus {
  outline: none;
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.15);
}

.subscribe-btn {
  padding: 12px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.subscribe-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.subscribe-message {
  font-size: 0.85rem;
  padding: 8px 12px;
  border-radius: 6px;
  margin-top: 8px;
}

.subscribe-message.success {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.subscribe-message.error {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.footer-bottom {
  position: relative;
  z-index: 2;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px 0;
}

.footer-bottom-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.footer-legal {
  display: flex;
  gap: 24px;
}

.legal-link {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.legal-link:hover {
  color: rgba(255, 255, 255, 0.8);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 60px 20px 30px;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
  
  .footer-legal {
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 50px 15px 25px;
  }
  
  .footer-subscribe {
    flex-direction: column;
  }
  
  .subscribe-btn {
    align-self: flex-start;
  }
}
</style>