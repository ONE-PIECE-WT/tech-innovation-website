<template>
  <div class="media-center">
    <div class="container">
      <!-- 新闻资讯 -->
      <section class="news-section">
        <div class="section-header">
          <h2 class="section-title">新闻资讯</h2>
        </div>
        
        <div class="news-grid">
          <!-- 新闻卡片 1 -->
          <article class="news-card" data-aos="fade-up" data-aos-delay="100">
            <div class="news-image">
              <NuxtImg 
                src="/news_1.png" 
                alt="我公司获得2023年度科技创新奖" 
                class="news-img"
                loading="eager"
                format="webp"
                quality="85"
                sizes="400px"
              />
              <div class="news-category">公司新闻</div>
            </div>
            <div class="news-content">
              <h3 class="news-title">我公司获得2023年度科技创新奖</h3>
              <p class="news-date">2023-12-15</p>
            </div>
          </article>

          <!-- 新闻卡片 2 -->
          <article class="news-card" data-aos="fade-up" data-aos-delay="200">
            <div class="news-image">
              <NuxtImg 
                src="/news_2.png" 
                alt="新一代AI平台正式发布，引领行业变革" 
                class="news-img"
                loading="lazy"
                format="webp"
                quality="85"
                sizes="400px"
              />
              <div class="news-category">产品发布</div>
            </div>
            <div class="news-content">
              <h3 class="news-title">新一代AI平台正式发布，引领行业变革</h3>
              <p class="news-date">2023-11-28</p>
            </div>
          </article>

          <!-- 新闻卡片 3 -->
          <article class="news-card" data-aos="fade-up" data-aos-delay="300">
            <div class="news-image">
              <NuxtImg 
                src="/news_4.png" 
                alt="我公司与国际科技巨头达成战略合作" 
                class="news-img"
                loading="lazy"
                format="webp"
                quality="85"
                sizes="400px"
              />
              <div class="news-category">合作伙伴</div>
            </div>
            <div class="news-content">
              <h3 class="news-title">我公司与国际科技巨头达成战略合作</h3>
              <p class="news-date">2023-10-18</p>
            </div>
          </article>

          <!-- 新闻卡片 4 -->
          <article class="news-card" data-aos="fade-up" data-aos-delay="100">
            <div class="news-image">
              <NuxtImg 
                src="/news_6.png" 
                alt="2024年科技趋势展望：AI将如何改变未来" 
                class="news-img"
                loading="lazy"
                format="webp"
                quality="85"
                sizes="400px"
              />
              <div class="news-category">行业洞察</div>
            </div>
            <div class="news-content">
              <h3 class="news-title">2024年科技趋势展望：AI将如何改变未来</h3>
              <p class="news-date">2023-12-05</p>
            </div>
          </article>

          <!-- 新闻卡片 5 -->
          <article class="news-card" data-aos="fade-up" data-aos-delay="200">
            <div class="news-image">
              <NuxtImg 
                src="/news_2.png" 
                alt="我公司举办2023年度科技峰会开发者主题演讲" 
                class="news-img"
                loading="lazy"
                format="webp"
                quality="85"
                sizes="400px"
              />
              <div class="news-category">活动报道</div>
            </div>
            <div class="news-content">
              <h3 class="news-title">我公司举办2023年度科技峰会开发者主题演讲</h3>
              <p class="news-date">2023-08-25</p>
            </div>
          </article>

          <!-- 新闻卡片 6 -->
          <article class="news-card" data-aos="fade-up" data-aos-delay="300">
            <div class="news-image">
              <NuxtImg 
                src="/news_6.png" 
                alt="数字化转型白皮书：企业如何应对挑战" 
                class="news-img"
                loading="lazy"
                format="webp"
                quality="85"
                sizes="400px"
              />
              <div class="news-category">研究报告</div>
            </div>
            <div class="news-content">
              <h3 class="news-title">数字化转型白皮书：企业如何应对挑战</h3>
              <p class="news-date">2023-08-30</p>
            </div>
          </article>
        </div>
      </section>

      <!-- 内容区域布局 -->
      <div class="content-layout">
        <!-- 左侧内容 -->
        <div class="left-content">
          <!-- 视频专区 -->
          <section class="video-section">
            <div class="section-header">
              <h2 class="section-title">视频专区</h2>
            </div>
            
            <div class="video-grid">
              <!-- 视频卡片 1 -->
              <div class="video-card" data-aos="fade-up" data-aos-delay="100">
                <div class="video-thumbnail">
                  <NuxtImg 
                    src="/video_1.png" 
                    alt="2023年产品发布会完整回顾" 
                    class="video-img"
                    loading="lazy"
                    format="webp"
                    quality="85"
                    sizes="400px"
                  />
                  <div class="video-play-btn">
                    <i class="fas fa-play"></i>
                  </div>
                  <div class="video-duration">45:20</div>
                </div>
                <div class="video-content">
                  <h3 class="video-title">2023年产品发布会完整回顾</h3>
                </div>
              </div>

              <!-- 视频卡片 2 -->
              <div class="video-card" data-aos="fade-up" data-aos-delay="200">
                <div class="video-thumbnail">
                  <NuxtImg 
                    src="/video_2.png" 
                    alt="AI技术如何赋能传统行业 - 专家访谈" 
                    class="video-img"
                    loading="lazy"
                    format="webp"
                    quality="85"
                    sizes="400px"
                  />
                  <div class="video-play-btn">
                    <i class="fas fa-play"></i>
                  </div>
                  <div class="video-duration">32:15</div>
                </div>
                <div class="video-content">
                  <h3 class="video-title">AI技术如何赋能传统行业 - 专家访谈</h3>
                </div>
              </div>
            </div>
          </section>

          <!-- 企业公告 -->
          <section class="announcement-section">
            <div class="section-header">
              <h2 class="section-title">企业公告</h2>
            </div>
            
            <div class="announcement-list">
              <!-- 公告 1 -->
              <div class="announcement-item" data-aos="fade-up" data-aos-delay="100">
                <div class="announcement-content">
                  <h3 class="announcement-title">关于公司股权激励计划的公告</h3>
                  <p class="announcement-excerpt">
                    为进一步优化公司治理结构，提升管理效率，公司决定于2024年1月1日起实施股权激励计划...
                  </p>
                  <div class="announcement-meta">
                    <span class="announcement-date">2023-12-20</span>
                    <a href="#" class="read-more">查看详情 <i class="fas fa-chevron-right"></i></a>
                  </div>
                </div>
              </div>

              <!-- 公告 2 -->
              <div class="announcement-item" data-aos="fade-up" data-aos-delay="200">
                <div class="announcement-content">
                  <h3 class="announcement-title">2023年度股东大会召开通知</h3>
                  <p class="announcement-excerpt">
                    公司定于2023年12月30日在公司总部召开2023年度股东大会，现将有关事项通知如下...
                  </p>
                  <div class="announcement-meta">
                    <span class="announcement-date">2023-11-15</span>
                    <a href="#" class="read-more">查看详情 <i class="fas fa-chevron-right"></i></a>
                  </div>
                </div>
              </div>

              <!-- 公告 3 -->
              <div class="announcement-item" data-aos="fade-up" data-aos-delay="300">
                <div class="announcement-content">
                  <h3 class="announcement-title">新一轮人才招聘计划启动</h3>
                  <p class="announcement-excerpt">
                    为支持公司业务快速发展，现启动新一轮人才招聘计划，重点招聘AI算法工程师、产品经理等核心岗位...
                  </p>
                  <div class="announcement-meta">
                    <span class="announcement-date">2023-10-10</span>
                    <a href="#" class="read-more">查看详情 <i class="fas fa-chevron-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <!-- 右侧边栏 -->
        <aside class="sidebar">
          <!-- 内容筛选 -->
          <div class="filter-section">
            <h3 class="filter-title">内容筛选</h3>
            
            <!-- 内容类型 -->
            <div class="filter-group">
              <h4 class="filter-subtitle">内容类型</h4>
              <div class="filter-options">
                <label class="filter-option">
                  <input type="checkbox" checked>
                  <span class="checkmark"></span>
                  全部
                </label>
                <label class="filter-option">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  公司新闻
                </label>
                <label class="filter-option">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  产品动态
                </label>
                <label class="filter-option">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  行业洞察
                </label>
                <label class="filter-option">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  活动报道
                </label>
                <label class="filter-option">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                  研究报告
                </label>
              </div>
            </div>

            <!-- 发布时间 -->
            <div class="filter-group">
              <h4 class="filter-subtitle">发布时间</h4>
              <div class="filter-options">
                <label class="filter-option">
                  <input type="radio" name="time" checked>
                  <span class="radiomark"></span>
                  全部时间
                </label>
                <label class="filter-option">
                  <input type="radio" name="time">
                  <span class="radiomark"></span>
                  本周
                </label>
                <label class="filter-option">
                  <input type="radio" name="time">
                  <span class="radiomark"></span>
                  本月
                </label>
                <label class="filter-option">
                  <input type="radio" name="time">
                  <span class="radiomark"></span>
                  本季度
                </label>
                <label class="filter-option">
                  <input type="radio" name="time">
                  <span class="radiomark"></span>
                  本年度
                </label>
              </div>
            </div>
          </div>

          <!-- 热门标签 -->
          <div class="tags-section">
            <h3 class="tags-title">热门标签</h3>
            <div class="tags-cloud">
              <span class="tag">人工智能</span>
              <span class="tag">大数据</span>
              <span class="tag">云计算</span>
              <span class="tag">数字化转型</span>
              <span class="tag">5G</span>
              <span class="tag">物联网</span>
              <span class="tag">区块链</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
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

.media-center {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  scroll-behavior: smooth;
  padding: 40px 0;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  margin-bottom: 30px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  position: relative;
  padding-bottom: 10px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 2px;
}

/* 新闻资讯 */
.news-section {
  margin-bottom: 60px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.news-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.news-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.news-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.news-card:hover .news-img {
  transform: scale(1.05);
}

.news-category {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #667eea;
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.news-content {
  padding: 20px;
}

.news-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-date {
  color: #666;
  font-size: 0.9rem;
}

/* 内容布局 */
.content-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
}

.left-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* 视频专区 */
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.video-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.video-thumbnail {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.video-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.video-card:hover .video-play-btn {
  background: rgba(102, 126, 234, 0.9);
  transform: translate(-50%, -50%) scale(1.1);
}

.video-duration {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}

.video-content {
  padding: 15px;
}

.video-title {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 企业公告 */
.announcement-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.announcement-item {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.announcement-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
}

.announcement-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

.announcement-excerpt {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.announcement-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.announcement-date {
  color: #999;
  font-size: 0.9rem;
}

.read-more {
  color: #667eea;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #764ba2;
}

.read-more i {
  margin-left: 4px;
  font-size: 0.8rem;
}

/* 侧边栏 */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.filter-section,
.tags-section {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.filter-title,
.tags-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

.filter-group {
  margin-bottom: 25px;
}

.filter-group:last-child {
  margin-bottom: 0;
}

.filter-subtitle {
  font-size: 1rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 12px;
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter-option {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.9rem;
  color: #666;
  transition: color 0.3s ease;
}

.filter-option:hover {
  color: #333;
}

.filter-option input {
  display: none;
}

.checkmark,
.radiomark {
  width: 16px;
  height: 16px;
  border: 2px solid #ddd;
  margin-right: 8px;
  transition: all 0.3s ease;
}

.checkmark {
  border-radius: 3px;
}

.radiomark {
  border-radius: 50%;
}

.filter-option input:checked + .checkmark {
  background: #667eea;
  border-color: #667eea;
}

.filter-option input:checked + .radiomark {
  background: #667eea;
  border-color: #667eea;
}

.filter-option input:checked + .checkmark::after {
  content: '✓';
  color: white;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.filter-option input:checked + .radiomark::after {
  content: '';
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
  margin: 3px;
}

/* 标签云 */
.tags-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: #f8f9fa;
  color: #666;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tag:hover {
  background: #667eea;
  color: white;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .content-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .news-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .video-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .news-grid {
    grid-template-columns: 1fr;
  }

  .video-grid {
    grid-template-columns: 1fr;
  }

  .container {
    padding: 0 15px;
  }

  .media-center {
    padding: 20px 0;
  }

  .section-title {
    font-size: 1.5rem;
  }
}
</style>