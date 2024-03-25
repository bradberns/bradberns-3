<script setup lang="ts">
const route = useRoute()

const links = [
  [{
    label: 'Brad Bernsxxx',
    labelClass: 'md:text-xl',
    icon: 'i-heroicons-home',
    to: '/'
  }, {
    label: 'About',
    labelClass: 'md:text-xl',
    icon: 'i-heroicons-question-mark-circle',
    to: `/about`
  },
  ], 
  [
    {
    label: 'Contact',
    labelClass: 'md:text-xl',
    icon: 'i-heroicons-light-bulb',
    to: '/contact'
  }, 
]
]
</script>

<template>
    <nav id="navigation" class=" fixed top-0 w-full bg-white">
      <UHorizontalNavigation 
        :links="links"
        class=" pr-3 mx-2
            border-gray-200 
            dark:border-gray-800" />  
    </nav>
</template>

