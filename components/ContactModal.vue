<script lang="ts" setup>
 import { ref } from 'vue';

 const open = ref(false)

const form = ref({
  access_key: "d300a0c4-7943-4850-8a9e-7ead4627c05d",
  subject: "New Message from Brad Berns Website",
  name: "",
  email: "",
  message: "",

});
const result = ref("");
const status = ref("");

const submitForm = async () => {
result.value = "Please wait...";
try {
  const response = await $fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: form.value,
  });

  result.value = response.message;

  if (response.status === 200) {
    status.value = "success";
  } else {
    console.log(response); // Log for debugging, can be removed
    status.value = "error";
  }
} catch (error) {
  console.log(error); // Log for debugging, can be removed
  status.value = "error";
  result.value = "Something went wrong!";
} finally {
  // Reset form after submission
  form.value.name = "";
  form.value.email = "";
  form.value.message = "";

  // Clear result and status after 5 seconds
  setTimeout(() => {
    result.value = "";
    status.value = "";
  }, 5000);
}
};
</script>

<template>
  <div class="mx-auto ">
    <button class="text-gray-900 text-lg mr-2 bg-orange-400 rounded-md mx-1 p-2" @click="open = true">Contact Me</button>
  </div>

  <div v-if="open" class="modal border border-orange-700 rounded-lg bg-white top-[45%] lg:top-[20%]">
    <div id="header">
      <div class="text-black text-center text-2xl">Contact Me</div>
      <div class=" text-sm mx-2 text-black italic">
        Always looking for women 18 or over to create original adult content with.
         If you are interested in collaborating, or shooting content together, 
         don't hesitate to contact me.
      </div>
      
      <form @submit.prevent="submitForm">
            <input class="mt-1 mb-2 h-9 border border-blue-500  w-9/12 px-2 rounded bg-white text-xl" 
              type="text" name="name" v-model="form.name" placeholder="name" />
            <br>
            <input class="mb-2 h-9 w-9/12 border border-blue-500  px-2 rounded bg-white text-xl" 
              type="email" name="email"  v-model="form.email" placeholder="email"/>
            <br>
            <textarea class="mb-2 h-20  w-9/12 border border-blue-500  px-2 rounded bg-white text-xl" 
              name="message" v-model="form.message" placeholder="message"></textarea>
            <br>
            <button class="bg-orange-400 py-1 px-3 text-gray-900 text-xl 
              rounded" type="submit">Send</button>
          </form>
    </div>
    <div class="text-left">
      <button class="bg-orange-400 py-.05 px-2 ml-1 
        mb-1 text-xl rounded-lg text-gray-900" @click="open = false">X</button>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  /* top: 45%; */
  left: 50%;
  width: 350px;
  height: auto;
  margin-left: -175px;
}
input textarea{
  @apply text-gray-500
}
</style>
