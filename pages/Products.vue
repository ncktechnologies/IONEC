<template>
  <section id="about-page">
    <div id="hero-wrapper" class="about">
      <div class="hero container">
        <h1 class="intro">We've created <span> solutions </span>
        </h1>

        <p class="sub">
          But here are some of our favourites
        </p>
      </div>
    </div>

    <div id="products-wrapper" class="container">
      <nuxt-link to="/product/engage">
        <div class="product">

          <div class="name blue"><span> Engage </span> <img src="~/assets/img/short-arrow.svg"></div>
        </div>
      </nuxt-link>

      <nuxt-link to="/product/ionepay">
      <div class="product pink">

        <div class="name "><span> iOne Pay </span> <img src="~/assets/img/short-arrow.svg"></div>
      </div>
      </nuxt-link>

      <nuxt-link to="/product/storage">
      <div class="product green">

        <div class="name "><span> Storage </span> <img src="~/assets/img/short-arrow.svg"></div>
      </div>
      </nuxt-link>

      <nuxt-link to="/product/diamondtv">
      <div class="product light-green">

        <div class="name"><span> DiamondTV </span> <img src="~/assets/img/short-arrow.svg"></div>
      </div>
      </nuxt-link>

      <nuxt-link to="/product/icash">
      <div class="product yellow">

        <div class="name "><span> iCash Remit </span> <img src="~/assets/img/short-arrow.svg"></div>
      </div>
      </nuxt-link>

      <nuxt-link to="/product/ionebill">
      <div class="product blue">

        <div class="name "><span> iOne Bill </span> <img src="~/assets/img/short-arrow.svg"></div>
      </div>
      </nuxt-link>

      <nuxt-link to="/product/dagdag">
      <div class="product dag">

        <div class="name"><span> DagDag </span> <img src="~/assets/img/short-arrow.svg"></div>
      </div>
      </nuxt-link>
    </div>

    <div id="work" class="container">
      <h1 class="title">Let's get to work</h1>

      <p class="sub">
        Have an unsolvable problem or an audacious idea?
      </p>
      <span class="subtitle">
          We'd love to hear about it.
        </span>

      <a href="/contact" class="contact"> Contact us </a>
    </div>


  </section>
</template>

<script>
  export default {
    name: "Services"
  }
</script>

<style scoped>

</style>
