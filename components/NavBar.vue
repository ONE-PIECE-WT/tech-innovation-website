<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <NuxtLink to="/" class="brand-link">
          <div class="brand-icon">
            <div class="icon-square"></div>
          </div>
          <span class="brand-text">寅晖科技</span>
        </NuxtLink>
      </div>
      
      <div class="nav-menu" :class="{ 'nav-menu-active': isMenuOpen }">
        <NuxtLink to="/" class="nav-link" :class="{ active: $route.path === '/' }">首页</NuxtLink>
        <NuxtLink to="/about" class="nav-link" :class="{ active: $route.path === '/about' }">公司简介</NuxtLink>
        
        <!-- 业务范围下拉菜单 -->
        <div class="dropdown" 
             @mouseenter="isBusinessDropdownOpen = true" 
             @mouseleave="isBusinessDropdownOpen = false">
          <NuxtLink to="/business" class="nav-link dropdown-trigger" 
                    :class="{ active: $route.path === '/business' || $route.path.includes('/barrier-monitoring') || $route.path.includes('/website-development') || $route.path.includes('/dingtalk-development') }">
            业务范围
            <svg class="dropdown-arrow" :class="{ 'dropdown-arrow-open': isBusinessDropdownOpen }" 
                 width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </NuxtLink>
          
          <div class="dropdown-menu" :class="{ 'dropdown-menu-open': isBusinessDropdownOpen }">
            <NuxtLink to="/barrier-monitoring" class="dropdown-item" :class="{ active: $route.path === '/barrier-monitoring' }">
              <div class="dropdown-item-content">
                <span class="dropdown-item-title">道闸与监控安装</span>
                <span class="dropdown-item-desc">专业的道闸系统与监控设备安装服务</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/website-development" class="dropdown-item" :class="{ active: $route.path === '/website-development' }">
              <div class="dropdown-item-content">
                <span class="dropdown-item-title">官网实现</span>
                <span class="dropdown-item-desc">企业官网设计开发与维护服务</span>
              </div>
            </NuxtLink>
            <NuxtLink to="/dingtalk-development" class="dropdown-item" :class="{ active: $route.path === '/dingtalk-development' }">
              <div class="dropdown-item-content">
                <span class="dropdown-item-title">钉钉实现</span>
                <span class="dropdown-item-desc">钉钉应用开发与企业数字化解决方案</span>
              </div>
            </NuxtLink>
          </div>
        </div>
        
        <NuxtLink to="/media" class="nav-link" :class="{ active: $route.path === '/media' }">媒体中心</NuxtLink>
        <button class="contact-btn" @click="scrollToContact">联系我们</button>
      </div>
      
      <div class="nav-toggle" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

// 导航菜单状态
const isMenuOpen = ref(false)
// 业务范围下拉菜单状态
const isBusinessDropdownOpen = ref(false)

// 切换菜单
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 滚动到联系我们区域
const scrollToContact = () => {
  // 如果在首页，滚动到联系区域
  if (process.client) {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      // 如果不在首页，跳转到首页的联系区域
      navigateTo('/#contact')
    }
  }
  // 关闭移动端菜单
  isMenuOpen.value = false
}

// 监听路由变化，关闭移动端菜单
watch(() => useRoute().path, () => {
  isMenuOpen.value = false
})
</script>

<style scoped>
/* 导航栏样式 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.nav-brand {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.brand-link:hover {
  transform: translateY(-1px);
}

.brand-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.icon-square {
  width: 16px;
  height: 16px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 2px;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}

.brand-link:hover .icon-square {
  transform: rotate(45deg) scale(1.1);
}

.brand-text {
  font-size: 1.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-link {
  text-decoration: none;
  color: #666;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding: 8px 0;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.active {
  color: #667eea;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

.contact-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  white-space: nowrap;
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

/* 下拉菜单样式 */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
  color: #666;
}

.dropdown-arrow-open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.08);
  min-width: 280px;
  padding: 8px 0;
  margin-top: 8px;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%) translateY(-10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
}

.dropdown-menu-open {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.dropdown-item {
  display: block;
  padding: 12px 20px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin: 0 8px;
  position: relative;
  overflow: hidden;
}

.dropdown-item:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
  transform: translateX(4px);
}

.dropdown-item.active {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.12) 0%, rgba(118, 75, 162, 0.12) 100%);
  color: #667eea;
}

.dropdown-item-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dropdown-item-title {
  font-weight: 600;
  font-size: 0.95rem;
  line-height: 1.2;
}

.dropdown-item-desc {
  font-size: 0.8rem;
  color: #888;
  line-height: 1.3;
}

.dropdown-item:hover .dropdown-item-desc {
  color: #666;
}

.dropdown-item.active .dropdown-item-desc {
  color: #667eea;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
  padding: 8px;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.nav-toggle:hover span {
  background: #667eea;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .nav-menu {
    gap: 30px;
  }
  
  .nav-container {
    padding: 0 15px;
  }
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 30px 20px;
    gap: 25px;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .nav-menu-active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-toggle {
    display: flex;
  }
  
  .nav-link {
    font-size: 1.1rem;
    padding: 12px 0;
    width: 100%;
    text-align: center;
  }
  
  .contact-btn {
    margin-top: 10px;
    padding: 14px 28px;
    font-size: 1rem;
  }
  
  .brand-text {
    font-size: 1.1rem;
  }
  
  /* 移动端下拉菜单样式 */
  .dropdown {
    width: 100%;
  }
  
  .dropdown-trigger {
    justify-content: center;
    width: 100%;
  }
  
  .dropdown-menu {
    position: static;
    transform: none;
    margin-top: 15px;
    margin-bottom: 10px;
    min-width: auto;
    width: 100%;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .dropdown-menu-open {
    transform: none;
  }
  
  .dropdown-item {
    margin: 0 12px;
    text-align: left;
  }
  
  .dropdown-item:hover {
    transform: none;
  }
}

@media (max-width: 480px) {
  .nav-container {
    padding: 0 15px;
    height: 65px;
  }
  
  .brand-icon {
    width: 36px;
    height: 36px;
  }
  
  .icon-square {
    width: 14px;
    height: 14px;
  }
  
  .brand-text {
    font-size: 1rem;
  }
  
  .nav-menu {
    top: 65px;
    padding: 25px 15px;
  }
}
</style>