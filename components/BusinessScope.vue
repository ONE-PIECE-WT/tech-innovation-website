<template>
  <div class="business-scope">
    <!-- 业务范围背景区域 -->
    <section class="business-hero">
      <div class="business-hero-bg">
        <NuxtImg 
          src="/images/pages/business/business-background.png" 
          alt="业务范围背景" 
          class="business-bg-image"
          loading="eager"
          format="webp"
          quality="85"
          sizes="sm:640px md:768px lg:1024px xl:1280px"
        />
        <div class="business-hero-overlay"></div>
      </div>
      <div class="business-hero-content">
        <h2 class="business-hero-title">科技创新，引领未来</h2>
        <p class="business-hero-subtitle">
          我们致力于通过创新的技术解决方案，为企业数字化转型提供强大支持，共创智能未来。
        </p>
      </div>
    </section>

    <!-- 核心业务区域 -->
    <section class="core-business">
      <div class="container">
        <div class="business-header">
          <h2 class="section-title">核心业务</h2>
          <div class="business-nav">
            <button class="nav-btn prev-btn" @click="prevSlide">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="nav-btn next-btn" @click="nextSlide">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        
        <div class="business-cards-container">
          <div class="business-cards" :style="{ transform: `translateX(-${currentSlide * 25}%)` }">
            <!-- 道闸与监控安装 -->
            <div class="business-card" data-aos="fade-up" data-aos-delay="100">
              <div class="card-image">
                <NuxtImg 
                  src="/images/icons/tech-development.png" 
                  alt="道闸与监控安装" 
                  class="business-img"
                  loading="lazy"
                  format="webp"
                  quality="75"
                />
              </div>
              <div class="card-content">
                <h3 class="card-title">道闸与监控安装</h3>
                <ul class="card-features">
                  <li><i class="fas fa-check"></i> 智能道闸系统安装</li>
                  <li><i class="fas fa-check"></i> 高清监控设备部署</li>
                  <li><i class="fas fa-check"></i> 安防系统集成维护</li>
                </ul>
                <a href="#" class="card-link">了解更多 <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>

            <!-- 官网实现 -->
            <div class="business-card" data-aos="fade-up" data-aos-delay="200">
              <div class="card-image">
                <NuxtImg 
                  src="/images/icons/product-innovation.png" 
                  alt="官网实现" 
                  class="business-img"
                  loading="lazy"
                  format="webp"
                  quality="75"
                />
              </div>
              <div class="card-content">
                <h3 class="card-title">官网实现</h3>
                <ul class="card-features">
                  <li><i class="fas fa-check"></i> 响应式网站设计</li>
                  <li><i class="fas fa-check"></i> 企业品牌展示</li>
                  <li><i class="fas fa-check"></i> SEO优化与维护</li>
                </ul>
                <a href="#" class="card-link">了解更多 <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>

            <!-- 钉钉实现 -->
            <div class="business-card" data-aos="fade-up" data-aos-delay="300">
              <div class="card-image">
                <NuxtImg 
                  src="/images/icons/solutions.png" 
                  alt="钉钉实现" 
                  class="business-img"
                  loading="lazy"
                  format="webp"
                  quality="75"
                />
              </div>
              <div class="card-content">
                <h3 class="card-title">钉钉实现</h3>
                <ul class="card-features">
                  <li><i class="fas fa-check"></i> 钉钉应用开发</li>
                  <li><i class="fas fa-check"></i> 企业数字化办公</li>
                  <li><i class="fas fa-check"></i> 工作流程自动化</li>
                </ul>
                <a href="#" class="card-link">了解更多 <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>

            <!-- 企业存储方案实现 -->
            <div class="business-card" data-aos="fade-up" data-aos-delay="400">
              <div class="card-image">
                <NuxtImg 
                  src="/images/icons/storage-solution.svg" 
                  alt="企业存储方案实现" 
                  class="business-img"
                  loading="lazy"
                  quality="75"
                />
              </div>
              <div class="card-content">
                <h3 class="card-title">企业存储方案实现</h3>
                <ul class="card-features">
                  <li><i class="fas fa-check"></i> 分布式存储系统</li>
                  <li><i class="fas fa-check"></i> 数据安全保护</li>
                  <li><i class="fas fa-check"></i> 高性能存储架构</li>
                </ul>
                <a href="/enterprise-storage" class="card-link">了解更多 <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户反馈区域 -->
    <section class="customer-feedback">
      <div class="container">
        <h2 class="section-title">客户反馈</h2>
        <div class="feedback-grid">
          <div class="feedback-card" data-aos="fade-up" data-aos-delay="100">
            <div class="feedback-content">
              <p class="feedback-text">
                "科技创新公司的智能办公系统帮助我们提升了30%的工作效率，员工满意度显著提高。"
              </p>
            </div>
            <div class="feedback-author">
              <div class="author-avatar">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" alt="李总监" />
              </div>
              <div class="author-info">
                <div class="author-name">李总监</div>
                <div class="author-company">未来科技有限公司</div>
              </div>
            </div>
          </div>

          <div class="feedback-card" data-aos="fade-up" data-aos-delay="200">
            <div class="feedback-content">
              <p class="feedback-text">
                "他们的数据分析平台帮助我们实现了业务的深度洞察，为战略决策提供了有力支持。"
              </p>
            </div>
            <div class="feedback-author">
              <div class="author-avatar">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" alt="王经理" />
              </div>
              <div class="author-info">
                <div class="author-name">王经理</div>
                <div class="author-company">智慧金融集团</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

// 轮播控制
const currentSlide = ref(0)
const totalSlides = 4

// 上一张
const prevSlide = () => {
  currentSlide.value = currentSlide.value > 0 ? currentSlide.value - 1 : totalSlides - 1
}

// 下一张
const nextSlide = () => {
  currentSlide.value = currentSlide.value < totalSlides - 1 ? currentSlide.value + 1 : 0
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

onMounted(async () => {
  await nextTick()
  await initAOS()
})
</script>

<style scoped>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.business-scope {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  scroll-behavior: smooth;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 业务范围背景区域 */
.business-hero {
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 16px;
  margin: 40px auto;
  max-width: 1400px;
  padding: 0 20px;
}

.business-hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.business-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.business-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(22, 33, 62, 0.6) 100%);
}

.business-hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 60px;
  color: #ffffff;
  max-width: 1400px;
  margin: 0 auto;
}

.business-hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.business-hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
}

/* 核心业务区域 */
.core-business {
  padding: 80px 0;
  background: #ffffff;
}

.business-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.business-nav {
  display: flex;
  gap: 12px;
}

.nav-btn {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: #667eea;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 16px;
}

.nav-btn:hover {
  background: #5a67d8;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.business-cards-container {
  overflow: hidden;
  border-radius: 16px;
}

.business-cards {
  display: flex;
  transition: transform 0.5s ease;
  gap: 30px;
}

.business-card {
  flex: 0 0 calc(33.333% - 20px);
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.business-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 240px;
  overflow: hidden;
}

.business-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.business-card:hover .business-img {
  transform: scale(1.05);
}

.card-content {
  padding: 30px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.card-features {
  list-style: none;
  margin-bottom: 25px;
}

.card-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  color: #666;
  font-size: 14px;
}

.card-features i {
  color: #10b981;
  font-size: 12px;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
}

.card-link:hover {
  color: #5a67d8;
  gap: 12px;
}

.card-link i {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.card-link:hover i {
  transform: translateX(4px);
}

/* 客户反馈区域 */
.customer-feedback {
  padding: 80px 0;
  background: #f8f9fa;
}

.feedback-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.feedback-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feedback-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.feedback-content {
  margin-bottom: 30px;
}

.feedback-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  font-style: italic;
  position: relative;
}

.feedback-text::before {
  content: '"';
  font-size: 3rem;
  color: #667eea;
  position: absolute;
  top: -10px;
  left: -20px;
  font-family: serif;
}

.feedback-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info {
  flex: 1;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.author-company {
  font-size: 0.9rem;
  color: #666;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .business-cards {
    gap: 20px;
  }
  
  .business-card {
    flex: 0 0 calc(50% - 10px);
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .business-hero {
    height: 300px;
    margin: 20px 10px;
  }
  
  .business-hero-content {
    padding: 0 30px;
  }
  
  .business-hero-title {
    font-size: 2rem;
  }
  
  .business-hero-subtitle {
    font-size: 1rem;
  }
  
  .business-header {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .business-card {
    flex: 0 0 100%;
  }
  
  .feedback-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .feedback-card {
    padding: 30px;
  }
}

@media (max-width: 480px) {
  .page-header {
    padding: 30px 0;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
  
  .business-hero {
    height: 250px;
  }
  
  .business-hero-content {
    padding: 0 20px;
  }
  
  .business-hero-title {
    font-size: 1.8rem;
  }
  
  .core-business,
  .customer-feedback {
    padding: 60px 0;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .feedback-card {
    padding: 25px;
  }
}
</style>