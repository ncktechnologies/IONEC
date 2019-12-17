<template>
  <nav id="sidebar">
    <section class="container">
      <div class="close">
        <img src="~/assets/img/close.svg" alt="close toggle" @click="$emit('close')">
      </div>
      <div class="menu">
        <div><a class="link" href="/">Home</a></div>
        <div><nuxt-link class="link" to="/products">Products</nuxt-link></div>
        <div><nuxt-link to="/services" class="link"> Services </nuxt-link></div>
        <div><nuxt-link class="link" to="/about">About</nuxt-link></div>
        <div><nuxt-link class="link" to="/contact">Contact</nuxt-link></div>
      </div>
      <div class="social-wrapper">
        <a target="_blank" href="https://twitter.com/IOneCLimited"><img src="~/assets/img/nav-twitter.svg"></a>
        <a target="_blank" href="https://www.facebook.com/Innovate1company"><img src="~/assets/img/nav-facebook.svg"></a>
        <a target="_blank" href="https://www.instagram.com/ionec__limited"><img src="~/assets/img/nav-instagram.svg"></a>
        <a target="_blank" href="https://www.linkedin.com/in/ionec"><img src="~/assets/img/nav-linkedin.svg"></a>
      </div>
    </section>
  </nav>
</template>

<script>
  export default {
    name: "Sidebar"
  }
</script>

<style scoped>

</style>
