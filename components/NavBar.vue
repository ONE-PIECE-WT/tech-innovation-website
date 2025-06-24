<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <NuxtLink to="/" class="brand-link">
          <div class="brand-icon">
            <div class="icon-square"></div>
          </div>
          <span class="brand-text">科技创新</span>
        </NuxtLink>
      </div>
      
      <div class="nav-menu" :class="{ 'nav-menu-active': isMenuOpen }">
        <NuxtLink to="/" class="nav-link" :class="{ active: $route.path === '/' }">首页</NuxtLink>
        <NuxtLink to="/about" class="nav-link" :class="{ active: $route.path === '/about' }">公司简介</NuxtLink>
        <NuxtLink to="/business" class="nav-link" :class="{ active: $route.path === '/business' }">业务范围</NuxtLink>
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