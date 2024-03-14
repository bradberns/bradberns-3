<script setup lang="ts">
const items = [
  'https://res.cloudinary.com/thecga/image/upload/v1710363709/Models/mads/madsky1-crop_y78zxu.webp',
  'https://res.cloudinary.com/thecga/image/upload/v1710363706/Models/mads/madsky2-crop_zxpi6r.webp',
  
]
</script>

<template>
    <div class="flex my-3">
        <h1 class="text-3xl mx-auto text-white">Carousel</h1>
    </div>
    <div class=" mx-3 rounded-lg py-2">
  <UCarousel 
    indicators
    v-slot="{ item }"
    :items="items"
    :ui="{
      item: 'basis-full',
      container: 'rounded-lg overflow-hidden '
    }"
    :prev-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-left-20-solid',
      class: '-left-5'
    }"
    :next-button="{
      color: 'gray',
      icon: 'i-heroicons-arrow-right-20-solid',
      class: '-right-5'
    }"
    arrows
    class=" w-64 mx-auto borer-primary "
  >
    <img :src="item" class="w-full" draggable="false">
  </UCarousel>
</div>
</template>