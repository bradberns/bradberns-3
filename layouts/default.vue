<script setup>
  
</script>

<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <Cookie />
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
 
  .page-enter-active,
.page-leave-active {
  transition: all 0.7s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
