<template>
  <nav id="navbar">
    <div class="nav-wrapper container">
      <div class="logo">
        <nuxt-link to="/"><img class="logo-m" src="~/assets/img/logo.svg" alt="ioneC logo"></nuxt-link>
       <nuxt-link to="/"><img class="logo-d" src="~/assets/img/logo_d.svg" alt="ioneC logo"></nuxt-link>
      </div>
      <div class="toggle-wrapper">
        <div class="info-wrapper">
          <div class="info">
            <img src="~/assets/img/mail.svg" alt="ionec mail">
            <span>info@ionec.com</span>
          </div>
          <div class="info">
            <img src="~/assets/img/phone.svg" alt="ionec mail">
            <span>+234 816 774 1826</span>
          </div>
        </div>
        <img class="toggle" src="~/assets/img/toggle.svg" alt="ioneC toggle button" @click="$emit('open')">
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar",

  }
</script>

<style scoped>

</style>
