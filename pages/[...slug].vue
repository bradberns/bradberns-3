<script setup lang="ts">
  const { path } = useRoute();
  const cleanPath = path.replace(/\/+$/, '');
  const baseUrl = 'https://bradberns.netlify.app';
  const canonicalPath = baseUrl + (path + '/').replace(/\/+$/, '/');

  const { data, error } = await useAsyncData(`content-${cleanPath}`, async () => {
    // Remove a trailing slash in case the browser adds it, it might break the routing
    // fetch document where the document path matches with the cuurent route
    let article = queryContent('/blog').where({ _path: cleanPath }).findOne();
    // get the surround information,
    // which is an array of documeents that come before and after the current document
    let surround = queryContent('/blog').sort({ date: -1 }).only(['_path', 'headline', 'excerpt']).findSurround(cleanPath, 
    { before: 1, after: 1 });
      return {
        article: await article,
        surround: await surround
        };
    });
  
  useHead({
    titleTemplate: '%s | Brad BernsXXX',
    meta: [
    { name: 'author', content: 'Brad BernsXXX' },
    { name: 'description', content: data.value?.article?.description },
    { property: 'article:published_time', content: data.value?.article?.date },
  // OG
    { hid: 'og:title', property: 'og:title', content: data.value?.article?.title },
    { hid: 'og:url', property: 'og:url', content: canonicalPath },
    { hid: 'og:description', property: 'og:description', content: data.value?.article?.description },
    { hid: 'og:image', name: 'image', property: 'og:image', content: data.value?.article?.img },
    { hid: 'og:type', property: 'og:type', content: 'Article' },
    { hid: 'og:image:type', property: 'og:image:type', content: `image/webp}` },
    { hid: 'og:image:alt', property: 'og:image:alt', content: data.value?.article?.alt },
// Twitter
    { hid: 'twitter:card', name: 'twitter:card', content: 'Summary' },
    { hid: 'twitter:title', name: 'twitter:title', content: data.value?.article?.title },
    { hid: 'twitter:url', name: 'twitter:url', content: canonicalPath },
    { hid: 'twitter:description', name: 'twitter:description', content: data.value?.article?.description },
    { hid: 'twitter:image', name: 'twitter:image', content: data.value?.article?.img },
    { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: data.value?.article?.alt }
  ]
})

  // destrucure `prev` and `next` value from data
  // const [prev, next] = data.value.surround;
</script>

<template>
  <main>
    <article>
      <ContentDoc v-slot="{ doc }">
        <div class="text-center text-slate-200">
            <!-- <h1 class="my-2 text-white text-center text-4xl">
              {{ doc.title }}
            </h1>
            <span class="mb-2 text-lg italic quote">
                {{ doc.date }}
            </span> -->
            <!-- <div class="mx-4">
              <img
                :src="doc.img"
                :alt="doc.alt"
                class="rounded-md w-9/12 mx-auto my-2 lg:my-3"
            />
            </div> -->
        </div>
        <div class="m-2 md:mx-4 bg-neutral-50 
              bg-opacity-70 rounded-md">
              <h1 class=" pt-4 mb-2 text-center text-4xl">
              {{ doc.title }}
            </h1>
            <div class=" text-center">
              <span class="tag">
                {{ doc.date }} 
              </span>
              <span class="tag">
                by: {{ doc.author.name }}
              </span>
            </div>
            
          <div class="mx-4">
              <img
                :src="doc.img"
                :alt="doc.alt"
                class=" rounded-md w-9/12 mx-auto pt-5" 
            />
            </div>
          
          <ContentRenderer class="" :value="doc" />
          <!-- <div class="ml-20 md:mx-auto md:w-1/2 rounded-lg">
          </div> -->
        </div>
      </ContentDoc>
    </article>
    <GetVids />
  </main>
</template>

<style>
    h3 {
  @apply text-3xl py-2 font-semibold text-center;
}
h4{
  @apply text-2xl font-semibold text-center mb-3 ;
}

p {
  @apply text-black mx-4 pl-2 text-left indent-2 mb-3 text-xl;
}
.cta{
  @apply mt-2
}
.links {
  @apply text-lg rounded-lg bg-orange-500
         text-white
         hover:underline
         p-2;
}
.tag {
  @apply text-base italic text-gray-900 bg-gray-100
          rounded-md px-1 pb-1 mx-1 my-2;
}
img.cloud{
    @apply pt-2
}
</style>