<!-- <script setup lang="ts">
const { prev, next } = useContent()
</script>

<template> 
  <div class="flex justify-around pt-3 pb-1">
    <NuxtLink class="text-white" v-if="prev" :to="prev._path"><= {{ prev.title }}</NuxtLink>
    <NuxtLink class="text-white" v-if="next" :to="next._path">{{ next.title }} =></NuxtLink>
  </div>
</template> -->

<template>
  <div class="flex justify-between pt-3 pb-1 mr-10">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="prev-next"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="prev-next"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style>
.prev-next {
  @apply px-3 py-1 text-lg font-bold border text-white
 bg-primary hover:bg-opacity-80
rounded-md hover:text-blue-800;
}
</style>
