<template>
  <div class="about-company">
    <!-- 公司历史 -->
    <section class="company-history">
      <div class="container">
        <div class="history-content">
          <div class="history-text">
            <h2 class="section-title">公司历史</h2>
            <p class="history-description">
              我们公司成立于2008年，由一群充满激情的技术专家创立，
              从最初的小型创业团队，发展成为今天全球领先的多个分
              支机构的科技企业。
            </p>
            <p class="history-description">
              十五年来，我们始终坚持"以创新驱动发展"的理念，不断突
              破技术边界，为客户提供前沿的数字化解决方案。
            </p>
          </div>
          <div class="history-image">
            <NuxtImg 
              src="/公司简介.png" 
              alt="公司历史" 
              class="history-img"
              loading="eager"
              format="webp"
              quality="85"
              sizes="sm:640px md:768px lg:1024px xl:1280px"
            />
          </div>
        </div>
        
        <!-- 发展历程 -->
        <div class="timeline">
          <h3 class="timeline-title">发展历程</h3>
          <div class="timeline-container">
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="100">
              <div class="timeline-year">2008</div>
              <div class="timeline-content">
                <div class="timeline-dot"></div>
                <h4>公司成立</h4>
              </div>
            </div>
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="200">
              <div class="timeline-year">2010</div>
              <div class="timeline-content">
                <div class="timeline-dot"></div>
                <h4>获得A轮融资</h4>
              </div>
            </div>
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="300">
              <div class="timeline-year">2013</div>
              <div class="timeline-content">
                <div class="timeline-dot"></div>
                <h4>推出首款AI产品</h4>
              </div>
            </div>
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="400">
              <div class="timeline-year">2015</div>
              <div class="timeline-content">
                <div class="timeline-dot"></div>
                <h4>国际市场拓展</h4>
              </div>
            </div>
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="500">
              <div class="timeline-year">2018</div>
              <div class="timeline-content">
                <div class="timeline-dot"></div>
                <h4>上市</h4>
              </div>
            </div>
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="600">
              <div class="timeline-year">2020</div>
              <div class="timeline-content">
                <div class="timeline-dot"></div>
                <h4>收购数据分析公司</h4>
              </div>
            </div>
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="700">
              <div class="timeline-year">2023</div>
              <div class="timeline-content">
                <div class="timeline-dot"></div>
                <h4>全球用户突破1亿</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业文化 -->
    <section class="company-culture">
      <div class="container">
        <div class="culture-content">
          <div class="culture-image">
            <NuxtImg 
              src="/公司简介.png" 
              alt="企业文化" 
              class="culture-img"
              loading="lazy"
              format="webp"
              quality="85"
              sizes="sm:640px md:768px lg:1024px xl:1280px"
            />
          </div>
          <div class="culture-text">
            <h2 class="section-title">企业文化</h2>
            
            <div class="culture-item">
              <h3 class="culture-subtitle">我们的使命</h3>
              <p class="culture-description">
                通过创新科技赋能企业，推动行业数字化转型
              </p>
            </div>
            
            <div class="culture-item">
              <h3 class="culture-subtitle">我们的愿景</h3>
              <p class="culture-description">
                成为全球领先的数字化解决方案提供商
              </p>
            </div>
            
            <div class="culture-item">
              <h3 class="culture-subtitle">核心价值观</h3>
              <p class="culture-description">
                创新、协作、诚信、卓越
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队介绍 -->
    <section class="team-introduction">
      <div class="container">
        <h2 class="section-title team-title">团队介绍</h2>
        
        <div class="team-grid">
          <!-- 张明 -->
          <div class="team-member" data-aos="fade-up" data-aos-delay="100">
            <div class="member-image">
              <NuxtImg 
                src="/公司简介.png" 
                alt="张明" 
                class="member-img"
                loading="lazy"
                format="webp"
                quality="85"
                sizes="300px"
              />
            </div>
            <div class="member-info">
              <h3 class="member-name">张明</h3>
              <p class="member-title">创始人兼CEO</p>
              <p class="member-description">
                拥有20年科技行业经验，曾任多家知名企业高管
              </p>
            </div>
          </div>

          <!-- 李华 -->
          <div class="team-member" data-aos="fade-up" data-aos-delay="200">
            <div class="member-image">
              <NuxtImg 
                src="/公司简介.png" 
                alt="李华" 
                class="member-img"
                loading="lazy"
                format="webp"
                quality="85"
                sizes="300px"
              />
            </div>
            <div class="member-info">
              <h3 class="member-name">李华</h3>
              <p class="member-title">技术总监</p>
              <p class="member-description">
                人工智能和大数据专家，拥有多项技术专利
              </p>
            </div>
          </div>

          <!-- 王芳 -->
          <div class="team-member" data-aos="fade-up" data-aos-delay="300">
            <div class="member-image">
              <NuxtImg 
                src="/公司简介.png" 
                alt="王芳" 
                class="member-img"
                loading="lazy"
                format="webp"
                quality="85"
                sizes="300px"
              />
            </div>
            <div class="member-info">
              <h3 class="member-name">王芳</h3>
              <p class="member-title">产品总监</p>
              <p class="member-description">
                10年产品管理经验，专注用户体验设计
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// 初始化AOS动画
onMounted(() => {
  if (process.client) {
    import('aos').then((AOS) => {
      AOS.default.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
      })
    })
  }
})
</script>

<style scoped>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.about-company {
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

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
}

/* 公司历史 */
.company-history {
  padding: 80px 0;
  background: #ffffff;
}

.history-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 80px;
}

.history-text .section-title {
  text-align: left;
  margin-bottom: 1.5rem;
}

.history-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 1.5rem;
}

.history-image {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.history-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.history-img:hover {
  transform: scale(1.05);
}

/* 发展历程 */
.timeline {
  margin-top: 60px;
}

.timeline-title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
}

.timeline-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.timeline-item {
  text-align: center;
  position: relative;
}

.timeline-year {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 1rem;
}

.timeline-content {
  position: relative;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  background: #667eea;
  color: white;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.timeline-dot {
  width: 12px;
  height: 12px;
  background: #667eea;
  border-radius: 50%;
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
}

.timeline-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

/* 企业文化 */
.company-culture {
  padding: 80px 0;
  background: #f8f9fa;
}

.culture-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.culture-image {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.culture-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.culture-img:hover {
  transform: scale(1.05);
}

.culture-text .section-title {
  text-align: left;
  margin-bottom: 2rem;
}

.culture-item {
  margin-bottom: 2rem;
}

.culture-subtitle {
  font-size: 1.3rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.culture-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
}

/* 团队介绍 */
.team-introduction {
  padding: 80px 0;
  background: #ffffff;
}

.team-title {
  margin-bottom: 3rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.team-member {
  background: #ffffff;
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.member-image {
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #667eea;
}

.member-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.member-title {
  font-size: 1rem;
  color: #667eea;
  font-weight: 500;
  margin-bottom: 1rem;
}

.member-description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .history-content,
  .culture-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .timeline-container {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .container {
    padding: 0 15px;
  }

  .company-history,
  .company-culture,
  .team-introduction {
    padding: 60px 0;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .timeline-year {
    font-size: 1.2rem;
  }

  .timeline-content {
    padding: 15px;
  }

  .team-member {
    padding: 20px;
  }

  .member-image {
    width: 100px;
    height: 100px;
  }
}
</style>