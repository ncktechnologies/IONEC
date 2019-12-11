<template>
  <section id="product-page">
    <div class="hero" :style="bg">

    </div>
    <section class="problem container" v-if="page">
      <ul class="list">
         <li v-for="li in page.first_part.list"> —{{li}}</li>
      </ul>
      <div class="more">
        <h1 class="title">{{ page ? page.first_part.title : ''}}</h1>
        <p class="content">
          {{ page.first_part.problem}}
        </p>
      </div>
    </section>

    <section class="card-wrapper">
      <div class="text">
        <div class="text-wrap">
          <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at atque dicta dolor dolorem ea error
          impedit,
          inventore ipsam itaque laboriosam minus mollitia nobis numquam porro quo repudiandae suscipit temporibus.
          </span>

          <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at atque dicta dolor dolorem ea error
          impedit,
          inventore ipsam itaque laboriosam minus mollitia nobis numquam porro quo repudiandae suscipit temporibus.
          </span>
        </div>
      </div>
      <div class="image">
         <img :src="page.second_part.image">
      </div>
    </section>

    <section class="solution-wrapper container">
      <div class="image">
        <img :src="page.third_part.image">
      </div>
      <div class="text">
        <h1 class="title">{{page.third_part.title}}</h1>
        <div class="content">
          <span>
            {{ page.third_part.text }}
          </span>
        </div>
      </div>
    </section>

    <div class="drinks-wrapper">
      <div class="image">
        <img :src="page.fourth_part.image">
      </div>
      <div class="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, magnam, natus. Consequuntur cupiditate
          distinctio, doloremque illo iusto officia perferendis quos! </p>
      </div>
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

    <div class="pages-wrapper">
      <a href="/product/icash">
      <div class="page blue">
        <p class="control"> Next Project</p>
        <h1 class="title">iCash Remit</h1>
      </div>
      </a>

      <a href="/product/iremita">
        <div class="page light-green">
          <p class="control"> Next Project</p>
          <h1 class="title">iCash Remit</h1>
        </div>
      </a>

    </div>
  </section>
</template>

<script>
  import pages from "~/assets/pages.json";

  export default {
    name: "Services",
    computed: {
      bg() {
        return {backgroundImage: `url('${this.page.image}')`};
      },
    },
    asyncData({route}) {
      let page = pages.filter(page => page.name === route.params.id);
      return {
        page: {...page[0]}
      }
    },
    beforeCreate() {

    },
    mounted() {
      console.log(this.page)
    }
  }
</script>

<style scoped>

</style>
