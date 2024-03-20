<script lang="ts" setup>
  const { path } = useRoute();
// Set the meta
  const baseUrl = 'https://bradberns.netlify.app';
  const canonicalPath = baseUrl + (path + '/').replace(/\/+$/, '/');
// Page Head properties
useHead({ 
  title: 'About Me | BradBernsXXX',
  meta: [
    { name: 'author', content: 'Brad BernsXXX' },
    { name: 'description', content: 'Creator of @camgasmic. Always looking for women 18 or over to create original adult content with.' },
    { property: 'article:published_time', content: 'March 3rd, 2024' },
  // OG
    { hid: 'og:title', property: 'og:title', content: 'About Me | BradBernsXXX' },
    { hid: 'og:url', property: 'og:url', content: canonicalPath },
    { hid: 'og:description', property: 'og:description', content: 'Creator of @camgasmic. Always looking for women 18 or over to create original adult content with.' },
    { hid: 'og:image', name: 'image', property: 'og:image', content: "https://res.cloudinary.com/thecga/image/upload/c_scale,h_400/v1674781629/SullenYellow-_rkthmn.webp" },
    { hid: 'og:type', property: 'og:type', content: 'Article' },
    { hid: 'og:image:type', property: 'og:image:type', content: `image/webp}` },
    { hid: 'og:image:alt', property: 'og:image:alt', content: 'Brad BernsXXX' },
// Twitter
    { hid: 'twitter:card', name: 'twitter:card', content: 'Summary' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'About Me | BradBernsXXX' },
    { hid: 'twitter:url', name: 'twitter:url', content: canonicalPath },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Creator of @camgasmic. Always looking for women 18 or over to create original adult content with.' },
    { hid: 'twitter:image', name: 'twitter:image', content: 'https://res.cloudinary.com/thecga/image/upload/c_scale,h_400/v1674781629/SullenYellow-_rkthmn.webp' },
    { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Brad BernsXXX' }
  ],
  link: [
    { hid: 'canonical', rel: 'canonical', href: canonicalPath }
    ],
}); 
</script>

<template>
  <main class="m-4 rounded-md"> 
        <div class="w-full text-left py-1 pt-1 px-2 
          bg-neutral-50 bg-opacity-70 text-black rounded-xl">
          <div id="profileImg"
      class="w-full sm:w-1/3 mx-auto mt-4 mb-7 sm:mb-0">
        <!-- About profile image -->
            <img
                src="https://res.cloudinary.com/thecga/image/upload/c_scale,h_400/v1647645730/Me/SullenYellow-crop_kjgk8f.jpg"
                class="rounded-xl w-96 mx-auto ml-0 md:ml-3 md:w-full"
                alt=""
                />
          </div>
        <h1 class="text-3xl text-center">About Me</h1>
        <p class="page mx-2 font-semibold italic mb-1">
          Creator of <a class="text-blue-800 hover:underline" 
                href="https://twitter.com/camgasmic">
                @camgasmic.
                </a> 
            Always looking for women 18
          or over to create original adult content with.
        </p>
        <p class="page mx-2 -mt-3">
          I have been promoting adult #NSFW models for quite some time. Hence
          why <span class="highlight">@TheCamgirlArmy</span> had over 30K followers 
          <span class="highlight">
            before it was suspended.
          </span>
          And now my circumstances have changed. I am on the look out for models
          to collaborate with.
        </p>
        <p class="page mx-2 -mt-3">
          I understand, all to well, how difficult it can be to find someone to
          shoot content; and not try to screw you over in some shape or form.
          And then you have people om social media jumping into your DM's.
          "Let's shoot content together.", or sending unsolicitated pics. Ha ha
          ha, first of, no one wants to see your peen. Secondly, if your a
          random person "voluteering", you have zero idea what it takes to
          create adult content. So please stop doig it.
        </p>
        <p class="page mx-2 -mt-3">
          When I do collaborate, there are a few things I won't compromise.
          First and foremost; anyone involved needs to sign waivers and present
          a valid photo ID, before we move forward. Secondly, we need to agree
          on the content we create. And not stray to far from that agreement.
          Third, if you show late, seem dishonest, sketchy, flakey, I am gone.
          Faster that you can say "What's wrong."
        </p>
      <GetVids />
    </div>
  </main>
</template>
