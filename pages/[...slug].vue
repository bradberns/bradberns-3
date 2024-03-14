<template>
  <main>
      <article>
          <ContentDoc v-slot="{ doc }">
              <div class="text-center text-slate-200">
                  <h1 class="my-2 text-white text-center text-4xl">{{ doc.title }} </h1>
                  <!-- <h2 class="mt-2 mb-2 text-2xl">{{ doc.alt }}</h2> -->
                  <span class="mb-2 text-lg italic quote">
                      {{ doc.date }}
                  </span>
                  <div class="mx-4">
                    <nuxt-img
                      :src="doc.img"
                      :alt="doc.alt"
                      class="rounded-md w-9/12 mx-auto my-2 lg:my-3"
                  />
                  </div>
              </div>
              <div class="m-2 md:mx-4 bg-neutral-50 bg-opacity-70 rounded-md">
                  <ContentRenderer class="" :value="doc" />
                  <div class="ml-20 md:mx-auto md:w-1/2
                              rounded-lg">
                    
                  </div>
                  <br>
              </div>
          </ContentDoc>
      </article>
      <br>

      <!-- PrevNext Component -->
    <!-- <PrevNext :prev="prev" :next="next" /> -->
  </main>
</template>
<script setup lang="ts">
  useHead({
        
        titleTemplate: '%s | Brad BernsXXX',
    })
  // destrucure `prev` and `next` value from data
  // const [prev, next] = data.value.surround;
</script>
<style>
    h3 {
  @apply text-3xl py-2 font-semibold text-center -ml-10 md:m-0;
}
h4{
  @apply text-2xl text-center -ml-10 md:m-0 ;
}

p {
  @apply mx-4 pl-2 text-left indent-2 mb-6 text-xl;
}
.cta{
  @apply mt-2
}
.links {
  @apply text-lg rounded-lg bg-orange-500
         text-white
         hover:underline
         m-1 p-2;
}
.quote {
  @apply mx-4 text-gray-900 bg-gray-100 rounded-md px-2 pb-1 mt-1;
}
img.cloud{
    @apply pt-2
}
</style>