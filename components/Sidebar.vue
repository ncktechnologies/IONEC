<template>
  <nav id="sidebar">
    <section class="container">
      <div class="close">
        <img src="~/assets/img/close.svg" alt="close toggle" @click="$emit('close')">
      </div>
      <div class="menu">
        <div><nuxt-link class="link active" to="/">Home</nuxt-link></div>
        <div><nuxt-link class="link" to="/products">Products</nuxt-link></div>
        <div><nuxt-link to="/services" class="link"> Services </nuxt-link></div>
        <div><nuxt-link class="link" to="/about">About</nuxt-link></div>
        <div><a class="link" href="#">Contact</a></div>
      </div>
      <div class="social-wrapper">
        <a href="#"><img src="~/assets/img/nav-twitter.svg"></a>
        <a href="#"><img src="~/assets/img/nav-facebook.svg"></a>
        <a href="#"><img src="~/assets/img/nav-instagram.svg"></a>
        <a href="#"><img src="~/assets/img/nav-linkedin.svg"></a>
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
