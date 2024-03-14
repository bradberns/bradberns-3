<!-- <template>
    <div>
        <h1>Carousel</h1>
    </div>
</template> -->

<script setup lang="ts">
const items = [
  'https://res.cloudinary.com/thecga/image/upload/c_scale,h_600/v1664532236/Models/Frame-00777_sbbrir.png',
  'https://res.cloudinary.com/thecga/image/upload/c_scale,h_600/v1664532236/Models/Frame-00777_sbbrir.png',
  'https://res.cloudinary.com/thecga/image/upload/c_scale,h_600/v1664532236/Models/Frame-00777_sbbrir.png',
  'https://res.cloudinary.com/thecga/image/upload/c_scale,h_600/v1664532236/Models/Frame-00777_sbbrir.png',
  'https://res.cloudinary.com/thecga/image/upload/c_scale,h_540,q_100/v1674792868/Models/MadisonSky-1_yef22k.webp',
  'https://res.cloudinary.com/thecga/image/upload/c_scale,h_400/v1674781629/SullenYellow-_rkthmn.webp',
  'https://res.cloudinary.com/thecga/image/upload/c_scale,h_500,q_100/v1674795987/Models/KenzieLove_1_mzvp1o.webp'
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
    class=" w-72 mx-auto borer-primary "
  >
    <img :src="item" class="w-full" draggable="false">
  </UCarousel>
</div>
</template>

