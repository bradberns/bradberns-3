<template>
  <div>
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