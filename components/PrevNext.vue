<script setup lang="ts">
const { prev, next } = useContent()
</script>

<template>
  <div class="flex justify-around pt-3 pb-1">
    <NuxtLink class="text-white" v-if="prev" :to="prev._path"><= {{ prev.title }}</NuxtLink>
    <NuxtLink class="text-white" v-if="next" :to="next._path">{{ next.title }} =></NuxtLink>
  </div>
</template>
