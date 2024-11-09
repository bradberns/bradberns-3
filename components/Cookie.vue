<script setup lang="ts">
const isOpen = ref(true)

</script>

<template>
  <div>
    <UModal role="alertdialog" name="cookie banner" class="cookies-banner text-center text-black"
      v-model="isOpen" prevent-close>
      <div class="p-4 md:text-md sm:text-sm bg-white">
        By clicking ”Accept”, you agree that 
        <span class=" underline font-semibold text-red-500"> 
        you are over the age of 21
      </span> and to the storing of cookies on your device to
      enhance site navigation and analitics.
        <div class="mt-2 text-center">
          <UButton class="mr-8 rounded-md text-white" size="lg"
              label="Accept" color="green" @click="isOpen = false" />
          <UButton class="rounded-md text-white" size="lg" 
          label="Decline" color="red" to="http://google.com" />
        </div>
      </div>
    </UModal>
  </div>
</template>

<style>
.cookies-banner {
  min-height: 7rem;
  margin-top: 10px;
  padding: 18px;
  font-size: 16px;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 110;
}
</style>