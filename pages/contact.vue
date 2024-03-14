<script setup lang="ts">
  const title = ref('Contact - Brad BernsXXX')
  const description = ref('Contact Me')
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
      <div class="w-full sm:w-1/3 mx-auto my-3">
        <!-- profile image -->
            <img
                src="https://res.cloudinary.com/thecga/image/upload/c_scale,h_400/v1647645730/Me/SullenYellow-crop_kjgk8f.jpg"
                class="rounded-xl w-96 mx-auto ml-0 md:ml-3 md:w-full"
                alt=""
                />
        </div>
        <h1 class="text-3xl text-center md:text-left my-3 hidden">Contact Me</h1>
        <p class="page italic">
          Creator of <a class="text-blue-800 hover:underline" 
                href="https://twitter.com/camgasmic">
                @camgasmic.
                </a> 
            Always looking for women 18
          or over to create original adult content with.
        </p>        
        <div id="aboutPopOverButton" class="mx-auto">
        <div class=" md:mx-48 mx-12">
            <UPopover :popper="{ placement: 'top' }">
                <UButton class="text-2xl mb-2" size="lg"
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