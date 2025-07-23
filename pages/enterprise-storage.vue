<template>
  <div class="enterprise-storage-page">
    <!-- 导航栏 -->
    <NavBar />
    
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">智慧融合·存储无忧</h1>
          <p class="hero-subtitle">为中小企业量身定制的云存储与NAS混合方案</p>
          <div class="hero-buttons">
            <button class="btn-primary">了解详情</button>
          </div>
        </div>
        <div class="hero-image">
          <img src="/images/pages/enterprise-storage/home_img.png" alt="企业存储解决方案">
        </div>
      </div>
    </section>

    <!-- 中小企业存储挑战 -->
    <section class="challenges-section">
      <div class="container">
        <h2 class="section-title">中小企业存储挑战</h2>
        <p class="section-subtitle">随着业务数据爆发式增长，中小企业面临着存储成本高、管理复杂、安全风险大等多重挑战</p>
        <div class="challenges-grid">
          <div class="challenge-card">
            <div class="challenge-icon">
              <img src="/images/pages/enterprise-storage/cost_pressure.svg" alt="成本压力">
            </div>
            <h3>成本压力</h3>
            <p>有限的IT预算难以支撑不断增长的存储需求</p>
          </div>
          <div class="challenge-card">
            <div class="challenge-icon">
              <img src="/images/pages/enterprise-storage/extend.svg" alt="扩展困难">
            </div>
            <h3>扩展困难</h3>
            <p>业务增长导致数据激增，现有存储架构难以灵活扩展</p>
          </div>
          <div class="challenge-card">
            <div class="challenge-icon">
              <img src="/images/pages/enterprise-storage/potential_safety_hazard.svg" alt="安全隐患">
            </div>
            <h3>安全隐患</h3>
            <p>数据安全与合规要求日益严格，风险管控难度增加</p>
          </div>
          <div class="challenge-card">
            <div class="challenge-icon">
              <img src="/images/pages/enterprise-storage/inefficiency.svg" alt="效率低下">
            </div>
            <h3>效率低下</h3>
            <p>数据分散存储，访问效率低，协作困难</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务特色 -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">我们的存储解决方案</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>高可用性存储</h3>
            <p>提供99.9%以上的可用性保障，确保业务连续性和数据安全</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 22S8 18 8 13V6L12 4L16 6V13C16 18 12 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>数据安全保护</h3>
            <p>多重加密技术和备份策略，保障企业核心数据安全</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>高性能访问</h3>
            <p>优化的存储架构，提供快速的数据读写和访问性能</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 2V22M17 5H9.5A3.5 3.5 0 0 0 6 8.5V15.5A3.5 3.5 0 0 0 9.5 19H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>弹性扩展</h3>
            <p>根据业务需求灵活扩展存储容量，支持企业快速发展</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 方案实施流程 -->
    <section class="process-section">
      <div class="container">
        <h2 class="section-title">方案实施流程</h2>
        <p class="section-subtitle">专业团队全程陪伴，确保方案顺利落地，快速见效</p>
        <div class="process-flow">
          <div class="process-step">
            <div class="step-number">1</div>
            <div class="step-info">
              <div class="step-icon">
                <img src="/images/pages/enterprise-storage/need_assessment.svg" alt="需求评估">
              </div>
              <h3>需求评估</h3>
              <p>深入了解业务场景与数据特点</p>
              <span class="step-duration">1-2天</span>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">2</div>
            <div class="step-info">
              <div class="step-icon">
                <img src="/images/pages/enterprise-storage/scheme_design.svg" alt="方案设计">
              </div>
              <h3>方案设计</h3>
              <p>定制混合存储架构方案</p>
              <span class="step-duration">3-5天</span>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">3</div>
            <div class="step-info">
              <div class="step-icon">
                <img src="/images/pages/enterprise-storage/environment_deployment.svg" alt="环境部署">
              </div>
              <h3>环境部署</h3>
              <p>硬件安装与系统配置</p>
              <span class="step-duration">1-2周</span>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">4</div>
            <div class="step-info">
              <div class="step-icon">
                <img src="/images/pages/enterprise-storage/data_migration.svg" alt="数据迁移">
              </div>
              <h3>数据迁移</h3>
              <p>安全可靠的数据迁移服务</p>
              <span class="step-duration">1-3周</span>
            </div>
          </div>
          <div class="process-step">
            <div class="step-number">5</div>
            <div class="step-info">
              <div class="step-icon">
                <img src="/images/pages/enterprise-storage/continuous_optimization.svg" alt="持续优化">
              </div>
              <h3>持续优化</h3>
              <p>定期评估与性能优化</p>
              <span class="step-duration">长期服务</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术优势 -->
    <section class="advantages-section">
      <div class="container">
        <h2 class="section-title">技术优势</h2>
        <div class="advantages-grid">
          <div class="advantage-item">
            <h3>分布式存储</h3>
            <p>采用先进的分布式存储技术，提供高可靠性和可扩展性</p>
          </div>
          <div class="advantage-item">
            <h3>智能管理</h3>
            <p>自动化存储管理系统，降低运维成本和复杂度</p>
          </div>
          <div class="advantage-item">
            <h3>多协议支持</h3>
            <p>支持NFS、CIFS、iSCSI等多种存储协议</p>
          </div>
          <div class="advantage-item">
            <h3>数据去重</h3>
            <p>智能数据去重技术，有效节省存储空间</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 客户案例 -->
    <section class="cases-section">
      <div class="container">
        <h2 class="section-title">成功案例</h2>
        <div class="cases-grid">
          <div class="case-card">
            <div class="case-header">
              <h3>某大型制造企业</h3>
              <span class="case-tag">制造业</span>
            </div>
            <p class="case-description">
              为该企业部署了500TB的分布式存储系统，支持生产数据和办公文档的统一存储管理，提升了数据访问效率50%。
            </p>
            <div class="case-stats">
              <div class="stat-item">
                <span class="stat-number">500TB</span>
                <span class="stat-label">存储容量</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">50%</span>
                <span class="stat-label">效率提升</span>
              </div>
            </div>
          </div>
          <div class="case-card">
            <div class="case-header">
              <h3>某金融科技公司</h3>
              <span class="case-tag">金融</span>
            </div>
            <p class="case-description">
              构建了高安全性的存储平台，满足金融行业严格的数据安全要求，实现了数据的实时备份和快速恢复。
            </p>
            <div class="case-stats">
              <div class="stat-item">
                <span class="stat-number">99.99%</span>
                <span class="stat-label">可用性</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">24/7</span>
                <span class="stat-label">监控保障</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <h2>让我们为您的企业打造专业的存储解决方案</h2>
        <p>立即联系我们，获取免费的存储方案评估和咨询服务</p>
        <button class="cta-button">预约免费咨询</button>
      </div>
    </section>
    
    <!-- 公共底部 -->
    <Footer />
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '企业存储方案实现 - 寅晖科技',
  meta: [
    { name: 'description', content: '寅晖科技提供专业的企业级存储解决方案，包括高可用性存储、数据安全保护、高性能访问等服务，助力企业数字化转型。' },
    { name: 'keywords', content: '企业存储,存储解决方案,数据管理,分布式存储,数据安全,寅晖科技' }
  ]
})
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: #ffffff;
  padding: 120px 20px 80px;
  margin-top: 70px;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 60px;
}

.hero-content {
  flex: 1;
  text-align: left;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1E40AF;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.125rem;
  color: #6B7280;
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.hero-image {
  flex: 1;
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
}

.btn-primary {
  background: #2563EB;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #1D4ED8;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #2563EB;
  border: 2px solid #2563EB;
  padding: 14px 30px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #2563EB;
  color: white;
}

/* Common Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  color: #1F2937;
}

/* Challenges Section */
.challenges-section {
  padding: 100px 0;
  background-color: #f9fafb;
}

.section-subtitle {
  text-align: center;
  color: #6b7280;
  font-size: 1.125rem;
  max-width: 800px;
  margin: -40px auto 60px;
}

.challenges-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.challenge-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  text-align: left;
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.challenge-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.challenge-icon {
  margin-bottom: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #e0e7ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.challenge-icon img {
  width: 30px;
  height: 30px;
}

.challenge-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 15px;
}

.challenge-card p {
  color: #6b7280;
  line-height: 1.6;
}

/* Features Section */
.features-section {
  padding: 100px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.feature-card {
  text-align: center;
  padding: 40px 30px;
  background: white;
  border-radius: 15px;
  border: 1px solid #DBEAFE;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: #93C5FD;
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563EB;
}

.feature-icon svg {
  width: 48px;
  height: 48px;
}

.feature-card h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* Process Section */
.process-section {
  padding: 100px 0;
  background-color: #f9fafb;
}

.process-flow {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 80px;
  position: relative;
}

.process-flow::before {
  content: '';
  position: absolute;
  top: 50px;
  left: 10%;
  right: 10%;
  height: 2px;
  background-color: #dbeafe;
  z-index: 1;
}

.process-step {
  flex: 1;
  text-align: center;
  position: relative;
  max-width: 200px;
}

.step-number {
  width: 32px;
  height: 32px;
  background-color: #2563eb;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1rem;
  margin: 0 auto 20px;
  position: relative;
  z-index: 2;
}

.step-info {
  background: white;
  border-radius: 15px;
  border: 1px solid #DBEAFE;
  padding: 30px 20px;
  transition: all 0.3s ease;
}

.step-icon {
  width: 60px;
  height: 60px;
  background-color: #e0e7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.step-icon img {
  width: 30px;
  height: 30px;
}

.step-info:hover {
  transform: translateY(-5px);
  border-color: #93C5FD;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.step-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1f2937;
}

.step-info p {
  color: #6b7280;
  margin-bottom: 15px;
  line-height: 1.5;
}

.step-duration {
  display: inline-block;
  color: #2563EB;
  font-size: 0.875rem;
  font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .process-flow {
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
  }
  
  .process-flow::before {
    display: none;
  }
  
  .process-step {
    flex: 0 0 calc(50% - 10px);
    max-width: none;
    min-width: auto;
  }
}

@media (max-width: 768px) {
  .process-flow {
    flex-direction: column;
    align-items: stretch;
    gap: 25px;
  }
  
  .process-step {
    flex: none;
    width: 100%;
    max-width: none;
    min-width: auto;
  }
  
  .step-info {
    padding: 25px 20px;
  }
}

@media (max-width: 480px) {
  .process-step {
    max-width: 280px;
  }
  
  .step-info {
    padding: 20px 15px;
  }
  
  .step-icon {
    width: 50px;
    height: 50px;
  }
  
  .step-icon img {
    width: 25px;
    height: 25px;
  }
}

/* Advantages Section */
.advantages-section {
  padding: 80px 0;
  background: #F9FAFB;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.advantage-item {
  background: white;
  padding: 30px;
  border-radius: 8px;
  border-left: 4px solid #2563EB;
}

.advantage-item h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #1F2937;
}

.advantage-item p {
  color: #6B7280;
  line-height: 1.6;
}

/* Cases Section */
.cases-section {
  padding: 80px 0;
  background: white;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
}

.case-card {
  background: #F9FAFB;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #E5E7EB;
}

.case-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.case-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1F2937;
}

.case-tag {
  background: #2563EB;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
}

.case-description {
  color: #6B7280;
  line-height: 1.6;
  margin-bottom: 30px;
}

.case-stats {
  display: flex;
  gap: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #2563EB;
}

.stat-label {
  font-size: 0.875rem;
  color: #6B7280;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #2563EB 0%, #1E40AF 100%);
  padding: 80px 20px;
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  line-height: 1.2;
}

.cta-content p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  line-height: 1.6;
}

.cta-button {
  background: #F97316;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: #EA580C;
  transform: translateY(-2px);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .challenges-grid,
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-container {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .hero-buttons {
    justify-content: center;
  }

  .challenges-grid,
  .features-grid,
  .advantages-grid,
  .cases-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    gap: 20px;
  }


  
  .case-stats {
    justify-content: center;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
}
</style>