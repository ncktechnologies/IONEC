<template>
  <section id="test">
    <div class="controls">
      <img class="left-arrow" src="~/assets/img/arrow-left.svg" alt="">
      <img class="right-arrow" src="~/assets/img/arrow-right.svg" alt="">
    </div>
    <section class="">
      <div class="carousel-wrapper">
        <div class="carousel">
          Some text
        </div>
        <div class="carousel ">

        </div>
        <div class="carousel ">
          some text
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: "Services",
    head() {
      return {
        script: [
          {src: 'https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js', body: true}
        ],
        link: [
          {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.css'}
        ]
      }
    },
    data() {
      return {
        preview: false,
        show: false
      }
    },
    methods: {
      over(type) {
        this.preview = type === 'open';
      }
    },
    mounted() {
      window.addEventListener('load', function () {
        new Glider(document.querySelector('.glider'), {
          slidesToShow: 3,
          slideToScroll: 1,
          arrows: {
            prev: document.querySelector('.left-arrow'),
            // may also pass element directly
            next: document.querySelector('.right-arrow')
          },
        })
      })
    }
  }
</script>

<style lang="scss" scoped>
  #test {
    height: 70vh;
    position: relative;
    border: solid 1px red;

    .controls {
      border: solid 1px red;
      width: 20%;
      height: 20%;
      padding: 1rem;

      img {
        width: 20px;
      }
    }

    .carousel-wrapper {
      border: solid 1px #12a2d9;
      height: 40vh;
      width: 50%;
      margin: 0 auto;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;

      .carousel {
        border: solid 1px red;
        width: 40%;
        height: 60%;
        transition: transform 1s ease;

        &:first-child {
          transform: translateX(-30%);
        }

        &:last-child {
          transform: translateX(30%);
          font-family: Roboto, sans-serif;
        }

        &.viewbox {
          transform: scale(1.2) translateX(0);
          transition: transform 1s ease;
        }
      }
    }

    .glider {
      height: 40vh;
    }
  }
</style>
