<script lang="ts" setup>
  const { path } = useRoute(); 
// Set the meta
  const baseUrl = 'https://bradberns.netlify.app';
  const canonicalPath = baseUrl + (path + '/').replace(/\/+$/, '/');
//Page Head properties
useHead({ 
  title: 'Contact Me | BradBernsXXX',
  meta: [
    { name: 'author', content: 'Brad BernsXXX' },
    { name: 'description', content: 'Contact me if you are interested in creating content.' },
    { name: "robots", content: "index, follow"},
    { property: 'article:published_time', content: 'March 3rd, 2024' },
  // OG
    { hid: 'og:title', property: 'og:title', content: 'Contact Me | BradBernsXXX' },
    { hid: 'og:url', property: 'og:url', content: canonicalPath },
    { hid: 'og:description', property: 'og:description', content: 'Contact me if you are interested in creating content.' },
    { hid: 'og:image', name: 'image', property: 'og:image', content: "https://res.cloudinary.com/thecga/image/upload/c_scale,h_400/v1674781629/SullenYellow-_rkthmn.webp" },
    { hid: 'og:type', property: 'og:type', content: 'Article' },
    { hid: 'og:image:type', property: 'og:image:type', content: `image/webp}` },
    { hid: 'og:image:alt', property: 'og:image:alt', content: 'Brad BernsXXX' },
// Twitter
    { hid: 'twitter:card', name: 'twitter:card', content: 'Summary' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'Contact Me | BradBernsXXX' },
    { hid: 'twitter:url', name: 'twitter:url', content: canonicalPath },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Contact me if you are interested in creating content.' },
    { hid: 'twitter:image', name: 'twitter:image', content: 'https://res.cloudinary.com/thecga/image/upload/c_scale,h_400/v1674781629/SullenYellow-_rkthmn.webp' },
    { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Brad BernsXXX' }
  ],
  link: [
    { hid: 'canonical', rel: 'canonical', href: canonicalPath }
    ],
}); 
</script>

<template>
  <main class="mb-3 mx-3 mt-12 rounded-lg py-2 bg-neutral-50 bg-opacity-70">
    <div class="w-full text-left py-1 pt-1 px-2 text-black" >
      <h1 class="text-3xl text-center">Contact Me</h1> 
      <div id="profileImg"
          class="w-full sm:w-1/3 mx-auto mt-3 mb-2">
        <!-- profile image -->
        <img src="https://res.cloudinary.com/thecga/image/upload/c_scale,h_400/v1647645730/Me/SullenYellow-crop_kjgk8f.jpg"
              class="rounded-xl w-96 mx-auto ml-0 md:ml-3 md:w-full"
              alt=""/>
      </div>
      <p class="page mx-2 italic">
        Always looking for women 18 or over to create original 
        adult content with. If you are interested in 
        collaborating, or shooting content together, don't hesitate to contact me.
      </p>
      <div class=" text-center -mt-1 mb-3">
        <UButton class="text-xl text-black" size="md" color="white"
          to="mailto:bradbernsxxx@yahoo.com?subject=I am interested in working with you" target="_blank"
          icon="i-heroicons-pencil-square"
          label="Contact Me"/>
      </div>
    </div>
    <GetVids />
  </main>
</template>