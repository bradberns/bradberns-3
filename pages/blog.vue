<script setup lang="ts">
  const title = ref('Blog - Brad BernsXXX')
  const description = ref('A list of all my posts')
  const { data: articles } = await useAsyncData('articles',
      () => queryContent('articles')
      .sort({ number: -1 })
      .find()
  )
  const isOpen = ref(false)
  const items = [
    'https://res.cloudinary.com/thecga/image/upload/v1710031183/Models/mads/mads-1-web.jpg',
    'https://res.cloudinary.com/thecga/image/upload/v1710034592/Models/mads/mads-2_ehnvil_1976c4.jpg',
    
  ]
</script>

<template>
  <Head>
      <Title>{{title}}</Title>
      <Meta name="description" :content="description" />
  </Head>
  <section id="blog" class="flex my-3">
    <h1 class="mx-auto text-white text-3xl">What's New</h1>
  </section>
  <div class="mb-3 mx-3 rounded-lg py-2">
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
    <section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit. Curabitur aliquam, dolor et bibendum rhoncus, 
        quam metus mollis diam, quis commodo massa tellus 
        ac nibh. Suspendisse sagittis magna vitae lectus 
        hendrerit maximus. Curabitur sit amet vehicula velit. 
        Nunc ullamcorper rhoncus elit id gravida. Quisque 
        velit nunc, maximus sed erat vitae, dapibus cursus 
        lectus. Fusce libero nibh, faucibus in lobortis 
        sit amet, scelerisque ac odio. Pellentesque mi enim, 
        imperdiet ac tincidunt luctus, blandit eu orci. 
        Suspendisse maximus facilisis mollis. Mauris pharetra 
        sapien sed nibh cursus porttitor. 
      </p>
    </section>
    <section id="blogPosts" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      mt-2 sm:gap-10 mx-2 mb-1">
      <ContentList path="/blog" v-slot="{ list }">
        <div v-for="article in list" :key="article._path"
          class="rounded-xl shadow-lg hover:shadow-2xl
          cursor-pointer bg-white bg-opacity-[.85]
          text-gray-800 mb-2">
          <NuxtLink class="" :href="article._path">
            <div class="my-1 mt-4 mx-2">
              <img
                      class="w-80 px-1 object-scale-down rounded-xl mx-auto thumbnail"
                      :src="article.img"
                            :alt="article.title"
                        />
                        <div class="">
                            <h3 class="font-semibold ml-2 md:m-0 text-center text-xl pt-2">{{ article.title }}</h3>
                            <!-- <p class="text-center font-normal -m-px pb-2">{{ article.alt }}</p> -->
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </ContentList>
      <div>
        <UButton class="mx-auto"
          label="Get your copy today" @click="isOpen = true" />
      </div>
    </section>
    <div class="m-auto">
      <UPopover :popper="{ placement: 'top' }">
        <UButton color="orange" label="Open"/>
            <template #panel>
                <div class="p-4">
                    <div>
                        <!-- <img src="https://res.cloudinary.com/thecga/image/upload/v1710031183/Models/mads/mads-1-web.jpg" alt=""> -->
                        <CTA />
                    </div>
                </div>
            </template>
    </UPopover>
    </div>
  </div>
</template>
<style scoped>
  p {
    @apply text-white
  }
</style>