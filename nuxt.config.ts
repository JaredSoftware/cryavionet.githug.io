// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Configuración de rendimiento
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },
  
  // Configuración de CSS
  css: ['~/css/bulma/bulma.css'],
  
  // Configuración de renderizado
  ssr: true,
  
  // Configuración para GitHub Pages
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/cryavionet.githug.io/' : '/',
    head: {
      // Precargar recursos críticos
      link: [
        { rel: 'preload', href: '/cryavionet.githug.io/assets/videoimg.png', as: 'image' },
        { rel: 'dns-prefetch', href: 'https://www.youtube.com' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' }
      ],
      // Meta tags para SEO y rendimiento
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'CryAvionet - Música Rock' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
      ]
    }
  },
  
  // Configuración de desarrollo
  devtools: { enabled: true },
  
  // Configuración de build
  build: {
    transpile: ['node-sass']
  }
})
