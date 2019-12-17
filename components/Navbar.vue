<template>
  <nav id="navbar">
    <div class="nav-wrapper container">
      <div class="logo">
        <a href="/"><img class="logo-m" src="~/assets/img/logo.svg" alt="ioneC logo"></a>
        <a href="/"><img class="logo-d" src="~/assets/img/logo_d.svg" alt="ioneC logo"></a>
      </div>
      <div class="toggle-wrapper">
        <div class="info-wrapper">
          <div class="info">
            <a href="mailto:info@ionec.com">
              <img src="~/assets/img/mail.svg" alt="ionec mail">
              <span>info@ionec.com</span>
            </a>
          </div>

          <div class="info">
            <a href="tel:+234 816 774 1826 ">
            <img src="~/assets/img/phone.svg" alt="ionec mail">
            <span>+234 816 774 1826</span>
            </a>
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
