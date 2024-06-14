<script setup>
  
</script>

<template>
  <div>
    <html lang="en"/>
    <Cookie id="cookie-banner"/>
    <Header />
    
      <slot />
    <Footer />
  </div>
</template>

<style>
  body {
    background: url(https://res.cloudinary.com/thecga/image/upload/v1650085734/Stock/web-background-1_emm7az.jpg)
    center / cover no-repeat fixed;
  }
</style>
