<script setup lang="ts">
  const { path } = useRoute();
  // Set the meta
  const baseUrl = 'https://bradberns.netlify.app';
  const canonicalPath = baseUrl + (path + '/').replace(/\/+$/, '/');
// Page Head properties
useHead({ 
  title: 'Home | BradBernsXXX',
  meta: [
    { name: 'author', content: 'Brad BernsXXX' },
    { name: 'description', content: 'Whats New' },
    { property: 'article:published_time', content: 'March 20th, 2024' },
  // OG
    { hid: 'og:title', property: 'og:title', content: 'Home | BradBernsXXX' },
    { hid: 'og:url', property: 'og:url', content: canonicalPath },
    { hid: 'og:description', property: 'og:description', content: 'Whats New' },
    { hid: 'og:image', name: 'image', property: 'og:image', content: "https://res.cloudinary.com/thecga/image/upload/c_scale,h_400/v1674781629/SullenYellow-_rkthmn.webp" },
    { hid: 'og:type', property: 'og:type', content: 'Article' },
    { hid: 'og:image:type', property: 'og:image:type', content: `image/webp}` },
    { hid: 'og:image:alt', property: 'og:image:alt', content: 'Brad BernsXXX' },
// Twitter
{ hid: 'twitter:card', name: 'twitter:card', content: 'Summary' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'Home | BradBernsXXX' },
    { hid: 'twitter:url', name: 'twitter:url', content: canonicalPath },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Whats New' },
    { hid: 'twitter:image', name: 'twitter:image', content: 'https://res.cloudinary.com/thecga/image/upload/c_scale,h_400/v1674781629/SullenYellow-_rkthmn.webp' },
    { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Brad BernsXXX' }
  ],
  link: [
    { hid: 'canonical', rel: 'canonical', href: canonicalPath }
    ],
}); 
  
</script>

<template>
  <main id="blog" class="mb-3 mx-3 rounded-lg py-2 bg-neutral-50 bg-opacity-70">
    <section id="welcome" class="text-black">
        <div class="flex my-3">
            <h1 class="mx-auto text-3xl">What's New</h1>
        </div>
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
    </section>
    <GetVids id="getVids"/>
  </main>
</template>