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
          <NuxtLink to="/contact" class="footer-link">联系我们</NuxtLink>
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
              <span>2136389542@qq.com</span>
            </div>
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
// Footer组件逻辑
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
  grid-template-columns: 2fr 1fr 1fr;
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


</style>