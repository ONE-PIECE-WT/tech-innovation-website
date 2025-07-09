<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- 公司品牌区域 -->
      <div class="footer-section footer-brand">
        <div class="footer-logo">
          <div class="footer-logo-icon">
            <div class="icon-square"></div>
          </div>
          <span class="footer-logo-text">茂名寅晖科技</span>
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
          <NuxtLink to="/media" class="footer-link">媒体中心</NuxtLink>
        </div>
      </div>

      <!-- 联系方式 -->
      <div class="footer-section">
        <h3 class="footer-title">联系方式</h3>
        <div class="footer-contact">
          <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>茂名市油城二路北侧3-13号楼一楼101</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <span>18813359018</span>
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
            © 2024 茂名寅晖科技有限公司. 保留所有权利.
          </p>
        <div class="footer-legal">
          <a href="#" class="legal-link">隐私政策</a>
          <a href="#" class="legal-link">服务条款</a>
          <a href="#" class="legal-link">Cookie政策</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// 订阅功能的响应式变量
const subscribeEmail = ref('')
const subscribeMessage = ref('')
const subscribeStatus = ref('')

// 处理订阅功能
const handleSubscribe = () => {
  if (!subscribeEmail.value) {
    subscribeMessage.value = '请输入有效的邮箱地址'
    subscribeStatus.value = 'error'
    return
  }
  
  // 简单的邮箱验证
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(subscribeEmail.value)) {
    subscribeMessage.value = '请输入有效的邮箱格式'
    subscribeStatus.value = 'error'
    return
  }
  
  // 模拟订阅成功
  subscribeMessage.value = '订阅成功！感谢您的关注'
  subscribeStatus.value = 'success'
  subscribeEmail.value = ''
  
  // 3秒后清除消息
  setTimeout(() => {
    subscribeMessage.value = ''
    subscribeStatus.value = ''
  }, 3000)
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: #ffffff;
  padding: 60px 0 0;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-brand {
  padding-right: 20px;
}

.footer-logo {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.footer-logo-icon {
  width: 40px;
  height: 40px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-square {
  width: 24px;
  height: 24px;
  background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 4px;
  transform: rotate(45deg);
}

.footer-logo-text {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
}

.footer-description {
  color: #b8c5d6;
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 14px;
}

.footer-social {
  display: flex;
  gap: 12px;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(79, 172, 254, 0.3);
}

.footer-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  color: #b8c5d6;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  padding: 4px 0;
}

.footer-link:hover {
  color: #4facfe;
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
  color: #b8c5d6;
  font-size: 14px;
}

.contact-item i {
  width: 16px;
  color: #4facfe;
  flex-shrink: 0;
}

.footer-subscribe-text {
  color: #b8c5d6;
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 1.5;
}

.footer-subscribe {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.subscribe-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 14px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.subscribe-input::placeholder {
  color: #b8c5d6;
}

.subscribe-input:focus {
  outline: none;
  border-color: #4facfe;
  box-shadow: 0 0 0 2px rgba(79, 172, 254, 0.2);
}

.subscribe-btn {
  padding: 12px 16px;
  background: linear-gradient(45deg, #4facfe 0%, #00f2fe 100%);
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
  box-shadow: 0 8px 25px rgba(79, 172, 254, 0.3);
}

.subscribe-message {
  font-size: 12px;
  padding: 8px 12px;
  border-radius: 6px;
  margin-top: 8px;
}

.subscribe-message.success {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.subscribe-message.error {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px 0;
}

.footer-bottom-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  color: #b8c5d6;
  font-size: 14px;
  margin: 0;
}

.footer-legal {
  display: flex;
  gap: 24px;
}

.legal-link {
  color: #b8c5d6;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.legal-link:hover {
  color: #4facfe;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer {
    padding: 40px 0 0;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 32px;
  }
  
  .footer-brand {
    padding-right: 0;
    text-align: center;
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
  .footer-subscribe {
    flex-direction: column;
  }
  
  .subscribe-btn {
    align-self: stretch;
  }
}
</style>