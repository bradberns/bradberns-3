<script setup lang="ts">
const route = useRoute()

const links = [
  [{
    label: 'Brad Bernsxxx',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'About',
    icon: 'i-heroicons-question-mark-circle',
    to: `/about`
  },
  ], 
  [{
    label: 'Contact',
    icon: 'i-heroicons-light-bulb',
    to: '/contact'
  }, 
]
]
</script>

<template>
    <nav id="navigation" class=" px-1 bg-white">
      <UHorizontalNavigation 
        :links="links"
        class="mb-2 border-b
            border-gray-200 
            dark:border-gray-800" />  
    </nav>
</template>

