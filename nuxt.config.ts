// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  css: ['~/assets/css/main.css'],

  app: {
    head: { charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
	
  },
    
    // pageTransition: { name:'fade', mode: 'out-in'}
      },

  modules: ['@nuxt/ui', '@nuxt/content', 'nuxt-icon'],

  content: {
    
  },

  devtools: {
    enabled: true
  }
})