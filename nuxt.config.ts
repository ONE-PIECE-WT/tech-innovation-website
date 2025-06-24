// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  
  // 添加模块
  modules: [
    '@nuxt/image'
  ],
  
  // 图片优化配置
  image: {
    quality: 80,
    format: ['webp', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  
  // CSS配置
  css: [
    'aos/dist/aos.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  
  // 头部配置
  app: {
    head: {
      title: '科技创新官网',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '专注于科技创新，引领未来发展' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },
  
  // 性能优化
  nitro: {
    compressPublicAssets: true
  }
})