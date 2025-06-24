<template>
  <div class="homepage">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 主要内容区域 -->
    <main class="main">
      <!-- Hero区域 -->
      <section class="hero">
        <div class="hero-background">
          <NuxtImg 
            src="/首页背景.png" 
            alt="科技创新背景" 
            class="hero-bg-image"
            loading="eager"
            format="webp"
            quality="80"
            sizes="sm:640px md:768px lg:1024px xl:1280px"
          />
        </div>
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
              创新科技，<br>引领未来
            </h1>
            <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
              我们致力于通过前沿科技解决现实问题，为企业和社会创造价值，共同构建智能化未来。
            </p>
            <div class="hero-buttons" data-aos="fade-up" data-aos-delay="300">
              <button class="btn btn-primary" @click="scrollToSection('services')">
                了解更多
              </button>
              <button class="btn btn-outline" @click="scrollToSection('contact')">
                联系我们
              </button>
            </div>
          </div>

        </div>
      </section>

      <!-- 核心业务区域 -->
      <section class="services">
        <div class="container">
          <h2 class="section-title">我们的核心业务</h2>
          <div class="services-grid">
            <div class="service-card service-card-blue" data-aos="fade-up" data-aos-delay="100">
              <div class="service-image">
                <NuxtImg 
                  src="/公司简介.png" 
                  alt="公司简介" 
                  class="service-img"
                  loading="lazy"
                  format="webp"
                  quality="75"
                />
              </div>
              <div class="service-content">
                <h3 class="service-title">公司简介</h3>
                <p class="service-description">了解我们的发展历程、企业文化和核心价值观</p>
                <NuxtLink to="/business" class="service-link">查看详情 →</NuxtLink>
              </div>
            </div>
            <div class="service-card service-card-purple" data-aos="fade-up" data-aos-delay="200">
              <div class="service-image">
                <NuxtImg 
                  src="/业务范围.png" 
                  alt="业务范围" 
                  class="service-img"
                  loading="lazy"
                  format="webp"
                  quality="75"
                />
              </div>
              <div class="service-content">
                <h3 class="service-title">业务范围</h3>
                <p class="service-description">探索我们的技术实力、产品创新和解决方案</p>
                <NuxtLink to="/business" class="service-link">查看详情 →</NuxtLink>
              </div>
            </div>
            <div class="service-card service-card-teal" data-aos="fade-up" data-aos-delay="300">
              <div class="service-image">
                <NuxtImg 
                  src="/媒体中心.png" 
                  alt="媒体中心" 
                  class="service-img"
                  loading="lazy"
                  format="webp"
                  quality="75"
                />
              </div>
              <div class="service-content">
                <h3 class="service-title">媒体中心</h3>
                <p class="service-description">获取最新的公司资讯、活动动态和行业洞察</p>
                <a href="#" class="service-link">查看详情 →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 数据统计区域 -->
      <section class="stats" id="stats">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-item" data-aos="zoom-in" data-aos-delay="100">
              <div class="stat-number" ref="stat1">{{ animatedStats.clients }}</div>
              <div class="stat-label">全球客户</div>
            </div>
            <div class="stat-item" data-aos="zoom-in" data-aos-delay="200">
              <div class="stat-number" ref="stat2">{{ animatedStats.patents }}</div>
              <div class="stat-label">技术专利</div>
            </div>
            <div class="stat-item" data-aos="zoom-in" data-aos-delay="300">
              <div class="stat-number" ref="stat3">{{ animatedStats.satisfaction }}%</div>
              <div class="stat-label">客户满意度</div>
            </div>
            <div class="stat-item" data-aos="zoom-in" data-aos-delay="400">
              <div class="stat-number" ref="stat4">{{ animatedStats.experience }}年</div>
              <div class="stat-label">行业经验</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- 公共底部 -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-brand">
            <div class="footer-logo">
              <div class="footer-logo-icon"></div>
              <span class="footer-logo-text">科技创新</span>
            </div>
            <p class="footer-description">
              我们致力于通过创新的技术解决方案，为企业数字化转型提供强大支持，共创智能未来。
            </p>
            <div class="footer-social">
              <a href="#" class="social-link" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">快速链接</h3>
          <ul class="footer-links">
            <li><a href="#" class="footer-link">首页</a></li>
            <li><a href="#" class="footer-link">公司简介</a></li>
            <li><NuxtLink to="/business" class="footer-link">业务范围</NuxtLink></li>
            <li><a href="#" class="footer-link">媒体中心</a></li>
            <li><a href="#" class="footer-link">联系我们</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">联系方式</h3>
          <div class="footer-contact">
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <span>北京市朝阳区科技园区88号科技创新大厦</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <span>400-888-8888</span>
            </div>
            <div class="contact-item">
              <i class="fas fa-envelope"></i>
              <span>contact@techcompany.com</span>
            </div>
          </div>
        </div>

        <div class="footer-section">
          <h3 class="footer-title">订阅我们</h3>
          <p class="footer-subscribe-text">
            订阅我们的新闻通讯，获取最新的公司动态和行业资讯。
          </p>
          <div class="footer-subscribe">
            <input 
              type="email" 
              placeholder="您的邮箱地址" 
              class="subscribe-input"
              v-model="subscribeEmail"
            />
            <button class="subscribe-btn" @click="handleSubscribe">
              订阅
            </button>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="footer-copyright">
            © 2023 科技创新有限公司 版权所有 | 京ICP备12345678号
          </p>
          <div class="footer-bottom-links">
            <a href="#" class="footer-bottom-link">隐私政策</a>
            <a href="#" class="footer-bottom-link">使用条款</a>
            <a href="#" class="footer-bottom-link">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

// 动画数据
const animatedStats = ref({
  clients: 0,
  patents: 0,
  satisfaction: 0,
  experience: 0
})

// 订阅邮箱
const subscribeEmail = ref('')

// 目标数值
const targetStats = {
  clients: 1200,
  patents: 150,
  satisfaction: 98,
  experience: 15
}

// 滚动到指定区域
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// 数字动画函数
const animateNumber = (start, end, duration, callback) => {
  const startTime = performance.now()
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const current = Math.floor(start + (end - start) * progress)
    callback(current)
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  requestAnimationFrame(animate)
}

// 启动统计数字动画
const startStatsAnimation = () => {
  animateNumber(0, targetStats.clients, 2000, (val) => {
    animatedStats.value.clients = val
  })
  animateNumber(0, targetStats.patents, 2000, (val) => {
    animatedStats.value.patents = val
  })
  animateNumber(0, targetStats.satisfaction, 2000, (val) => {
    animatedStats.value.satisfaction = val
  })
  animateNumber(0, targetStats.experience, 2000, (val) => {
    animatedStats.value.experience = val
  })
}

// 监听滚动事件，当统计区域进入视口时启动动画
const observeStats = () => {
  const statsSection = document.getElementById('stats')
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startStatsAnimation()
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })
    observer.observe(statsSection)
  }
}

// 初始化AOS动画库
const initAOS = async () => {
  if (process.client) {
    const AOS = await import('aos')
    await import('aos/dist/aos.css')
    AOS.default.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    })
  }
}

// 处理订阅功能
const handleSubscribe = () => {
  if (!subscribeEmail.value) {
    alert('请输入您的邮箱地址')
    return
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subscribeEmail.value)) {
    alert('请输入有效的邮箱地址')
    return
  }
  
  // 这里可以添加实际的订阅逻辑，如API调用
  alert(`感谢订阅！我们将发送最新资讯到 ${subscribeEmail.value}`)
  subscribeEmail.value = ''
}

onMounted(async () => {
  await nextTick()
  await initAOS()
  observeStats()
})
</script>

<style scoped>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.homepage {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  scroll-behavior: smooth;
}

/* 性能优化 */
.hero-bg-image,
.service-img {
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}

/* 预加载关键资源 */
.hero-bg-image {
  content-visibility: auto;
  contain-intrinsic-size: 1200px 600px;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}



/* 主要内容区域 */
.main {
  margin-top: 70px;
}

/* Hero区域样式 */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 600px;
  display: flex;
  align-items: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  mix-blend-mode: overlay;
}

.hero-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 32px;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 16px;
}

.btn {
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  will-change: transform;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn:hover::before {
  left: 100%;
}

.btn-outline {
  background: transparent;
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.btn-primary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.btn-primary:hover {
  background: rgba(255, 255, 255, 0.3);
}



.hero-icon {
  font-size: 4rem;
  opacity: 0.8;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}

/* 核心业务区域 */
.services {
  padding: 100px 0;
  background: #f7fafc;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 60px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.service-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.service-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.service-image {
  height: 200px;
  position: relative;
  overflow: hidden;
}

.service-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.service-card:hover .service-img {
  transform: scale(1.05);
}

.service-content {
  padding: 30px;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 12px;
}

.service-description {
  color: #718096;
  line-height: 1.6;
  margin-bottom: 20px;
}

.service-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.service-link:hover {
  color: #5a67d8;
}

/* 数据统计区域 */
.stats {
  padding: 80px 0;
  background: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  text-align: center;
}

.stat-item {
  padding: 20px;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
}

.stat-item:hover .stat-number {
  transform: scale(1.1);
}

.stat-label {
  font-size: 1.1rem;
  color: #718096;
  font-weight: 500;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
}

/* 加载动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-title {
  animation: fadeInUp 0.8s ease-out;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
    padding: 0 20px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-circle {
    width: 200px;
    height: 200px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  

  
  .stat-number {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-buttons {
    flex-direction: column;
    gap: 12px;
  }
  
  .btn {
    width: 100%;
  }
}

/* 底部样式 */
.footer {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #ffffff;
  padding: 60px 0 0;
  margin-top: 80px;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 40px;
  align-items: start;
}

.footer-section {
  display: flex;
  flex-direction: column;
  min-height: 280px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.footer-logo-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 6px;
  position: relative;
  flex-shrink: 0;
}

.footer-logo-icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background: #ffffff;
  border-radius: 3px;
}

.footer-logo-text {
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
}

.footer-description {
  color: #b8c5d6;
  line-height: 1.6;
  margin-bottom: 20px;
}

.footer-social {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: translateY(-2px);
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  color: #b8c5d6;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #667eea;
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
}

.contact-item i {
  color: #667eea;
  width: 16px;
  text-align: center;
  flex-shrink: 0;
}

.footer-subscribe-text {
  color: #b8c5d6;
  margin-bottom: 20px;
  line-height: 1.6;
}

.footer-subscribe {
  display: flex;
  gap: 8px;
}

.subscribe-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 14px;
  transition: all 0.3s ease;
}

.subscribe-input::placeholder {
  color: #b8c5d6;
}

.subscribe-input:focus {
  outline: none;
  border-color: #667eea;
  background: rgba(255, 255, 255, 0.15);
}

.subscribe-btn {
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.subscribe-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.footer-bottom {
  margin-top: 40px;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-copyright {
  color: #b8c5d6;
  font-size: 14px;
}

.footer-bottom-links {
  display: flex;
  gap: 20px;
}

.footer-bottom-link {
  color: #b8c5d6;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-bottom-link:hover {
  color: #667eea;
}

/* 底部响应式设计 */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 0;
    margin-top: 60px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-subscribe {
    flex-direction: column;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-bottom-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer {
    margin-top: 40px;
  }
  
  .footer-content {
    padding: 0 15px;
  }
  
  .footer-social {
    justify-content: center;
  }
}
</style>