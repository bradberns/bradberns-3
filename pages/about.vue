<script setup lang="ts">
  const title = ref('About - Brad BernsXXX')
  const description = ref('About Me')
</script>

<template>
  <Head>
      <Title>{{title}}</Title>
      <Meta name="description" :content="description" />
  </Head>
  <main class="m-4 rounded-md">
        <div
        class="w-full text-left py-1 pt-1 px-2 bg-neutral-50 bg-opacity-70
          text-black rounded-xl"
      >
      <div class="w-full sm:w-1/3 mx-auto mt-4 mb-7 sm:mb-0">
        <!-- About profile image -->
            <img
                src="https://res.cloudinary.com/thecga/image/upload/c_scale,h_400/v1647645730/Me/SullenYellow-crop_kjgk8f.jpg"
                class="rounded-xl w-96 mx-auto ml-0 md:ml-3 md:w-full"
                alt=""
                />
        </div>
        <h1 class="text-3xl text-center md:text-left my-3 hidden">About</h1>
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
        <div id="aboutPopOverButton" class="mx-auto">
        <div class=" md:mx-48 mx-12">
            <UPopover :popper="{ placement: 'top' }">
                <UButton class="text-2xl" size="lg"
                    block color="orange"
                    label="Get your videos here"/>
                    <template #panel>
                        <div class="p-4">
                            <div>
                                <CTA />
                            </div>
                        </div>
                    </template>
            </UPopover>
          </div>
        </div>
      </div>
    </main>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>