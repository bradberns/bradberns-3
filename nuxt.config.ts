// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  css: ['~/assets/css/main.css'],

  app: {
    head: { charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
	
  },
    
    // pageTransition: { name:'fade', mode: 'out-in'}
      },

  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-icon',
  ],

  content: {
    
  },

  image: {
    // Options
    dir: 'public/img/',
    quality: 80,
    domains: ['nuxtjs.org'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/<company>/image/fetch/',
      modifiers: {
        effect: 'sharpen:100',
        quality: 'auto:best',
      }
  },
},

  devtools: {
    enabled: true
  }
})
