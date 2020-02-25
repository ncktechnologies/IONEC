<template>
  <section id="homepage">
    <section id="hero">
      <div class="container">
        <div class="hero-wrapper">
          <div class="left">
            <h1 class="intro"> We innovate your business.</h1>
            <h3 class="sub"> Your #1 in IT and business solutions</h3>
            <div class="blue-socials">
              <a target="_blank" href="https://twitter.com/IOneCLimited"><img src="~/assets/img/twitter.svg"></a>
              <a target="_blank" href="https://www.facebook.com/Innovate1company"><img src="~/assets/img/facebook.svg"></a>
              <a target="_blank" href="https://www.instagram.com/ionec__limited/"><img src="~/assets/img/instagram.svg"></a>
              <a target="_blank" href="https://www.linkedin.com/in/ionec/"><img src="~/assets/img/linkedin.svg"></a>
            </div>
          </div>
          <div class="right">
            <img src="~/assets/img/splatter_d.svg">
          </div>
        </div>
      </div>
    </section>

    <section id="foundation">
      <div class="container">
        <div data-aos="flip-up">
          <h3 class="sub">Our Solid Foundation</h3>

          <h1 class="intro">Our Services Help Maximise Positive Outcomes</h1>
        </div>

        <div class="feature-wrapper">
          <div class="feature" data-aos="fade" data-aos-delay="200">
            <div class="feature-top">
              <img src="~/assets/img/cost-effective.svg" alt="">
            </div>
            <h3 class="feature-title">Cost effective design</h3>
            <p class="feature-text">
              We balance your budget and affordability with an effective user experience or effective campaign to reach
              your audience
            </p>
          </div>

          <div class="feature" data-aos="fade" data-aos-delay="400">
            <div class="feature-top">
              <img src="~/assets/img/connect-clients.svg" alt="">
            </div>
            <h3 class="feature-title">We connect clients</h3>
            <p class="feature-text">
              We love connecting our clients to benefit from each other’s audiences and resources. This is one unique
              way
              we increase our clients’ successes annually.
            </p>
          </div>

          <div class="feature" data-aos="fade" data-aos-delay="600">
            <div class="feature-top">
              <img src="~/assets/img/premium-support.svg" alt="">
            </div>
            <h3 class="feature-title">Premium support</h3>
            <p class="feature-text">
              Once you become a client, we are at your service through phone calls, web calls, 24/7 email support,
              online
              chat, mobile chat and more ways to stay in touch to serve you.
            </p>
          </div>

          <div class="feature" data-aos="fade" data-aos-delay="800">
            <div class="feature-top">
              <img src="~/assets/img/tools-for-you.svg" alt="">
            </div>
            <h3 class="feature-title">Tools for you</h3>
            <p class="feature-text">
              Our in-house, home grown tools for the web and mobile are at your service to compliment your business
              development, marketing or digital distribution.
            </p>
          </div>

        </div>
      </div>
    </section>


    <section id="pillar">
      <div class="backdrop">
        <div class="container">
          <div class="card">
            <h1 class="title"> Our <br> Pillars</h1>
            <p class="content">
              We address your prime objective and increase profitability. We mobilise all our experiences to develop
              your
              business, optimise your performance and provide assistance during all your transformation projects.
            </p>
          </div>
          <div class="pillar-img">
            <img src="~/assets/img/bulb.jpg" alt="">
          </div>
        </div>
      </div>
    </section>

    <section id="services">
      <img class="top-curve" src="~/assets/img/curve.svg">
      <div class="container" data-aos="slide-up">
        <p class="sub"> Working with innovate one company </p>
        <h2 class="intro">Our Services Help Maximise Positive Outcomes</h2>
      </div>


      <div class="service-card-wrapper container" data-aos="fade-down">
        <div class="side-box-wrapper">
          <div class="sidebox">
            <h3 class="title"> Professional <br> Advisory </h3>
            <p class="content">
              Our customer service is top-notch and will communicate with you regularly about the status of your
              project.
              We place our clients’ needs first. Your success is our success.
            </p>
          </div>
          <div class="sidebox view">
            <h3 class="title">Track <br> Record</h3>
            <p class="content">
              Over the years, IONEC has helped companies in different sectors of the economy in providing value to their
              customers/audience.
            </p>
          </div>
          <div class="sidebox">
            <h3 class="title">Customer <br> centric</h3>
            <p class="content">
              We offer professional advisory services to our clients by understanding our customer’s business
              needs/challenges and proffer bespoke/tailor-made solutions that caters to those needs.
            </p>
          </div>
        </div>

      </div>


      <img class="bottom-curve" src="~/assets/img/curve.svg">
    </section>

    <section id="testimonies" class="container">
      <h3 class="sub">Working with innovate one company</h3>

      <h1 class="intro">Hear what people that have worked with us have to say</h1>

      <div class="testimony">
       <!-- <div class="avatar">
          <transition enter-active-class="slideRight">
            <img :src="testimony.image">
          </transition>
        </div>-->

        <div class="left">
          <p class="review">{{ testimony.comment }}</p>

          <span class="name"> {{ testimony.fullname }} </span>
          <span class="title">{{ testimony.position }}</span>

          <!--<div class="controls" @click="leftClick">
            <div class="left">
              <img @click="leftClick" src="~/assets/img/long-arrow-dark-left.svg">
            </div>
            <div class="right" @click="rightClick">
              <img @click="rightClick" src="~/assets/img/long-arrow-dark-left.svg">
            </div>
          </div>-->
        </div>
      </div>
    </section>

    <section id="friends" class="container">
      <h1 class="title">Meet a few of our friends</h1>
      <p class="sub">We keep our friends happy, we can make you happy too</p>


      <div class="carousel">
        <img class="control left-arrow" src="~/assets/img/arrow-left.svg" alt="">

        <section class="glider-contain">
          <div class="img-wrapper glider">
            <div class="img">
              <img src="/friends/6.png">
            </div>
            <div class="img">
              <img src="/friends/9.png">
            </div>
            <div class="img">
              <img src="/friends/access.jpg">
            </div>

            <div class="img">
              <img src="~/assets/img/mtn.svg">
            </div>

            <div class="img">
              <img src="/friends/4.png">
            </div>

            <div class="img">
              <img src="/friends/2.png">
            </div>

            <div class="img">
              <img src="/friends/ddna.jpg">
            </div>


          </div>
        </section>

        <img class="control right-arrow" src="~/assets/img/arrow-right.svg" alt="">
      </div>
    </section>

    <section id="solid" class="container">
      <h3 class="sub" data-aos="flip">Our solid foundation</h3>

      <h1 class="title">Our Services Help Maximise Positive Outcomes</h1>

      <div class="services-wrapper">
        <div class="service dark" data-aos="slide-right" data-aos-easing="ease-in-out-back">
          <h1 class="service-title">Banking Services</h1>

          <p class="service-content"> Financial Inclusion involves making banking services like cash deposits and
            withdrawals, bill payments
            etc. available to individuals and businesses all over the world regardless of their location and income
            level.
          </p>

          <div class="learn-more">
            <!--<a href="#" class="learn dark">Learn more</a>
            <img src="~/assets/img/short-arrow.svg" alt="">-->
          </div>
        </div>

        <div class="service gray" data-aos="slide-left" data-aos-easing="ease-in-out-back">
          <h1 class="service-title blue">Software Solutions</h1>

          <p class="service-content">In the business of process automation, success is guaranteed by a businesses
            ability to manipulate software and hardware for the faster completion of tasks and processes. Another word
            for this is Innovation.
          </p>

          <div class="learn-more">
            <!--<a href="#" class="learn gray">Learn more</a>
            <img src="~/assets/img/short-arrow-dark.svg" alt="">-->
          </div>
        </div>

        <div class="service white" data-aos="slide-left" data-aos-easing="ease-in-out-back">
          <h1 class="service-title blue">Business Consulting</h1>

          <p class="service-content">
            Some businesses have the infrastructure but lack the human resource for Project Implementation and
            execution. We have skilled and proficient Project Managers who aggressively and Strategically “Mid-Wife” and
            nurture projects through infancy.
          </p>

          <div class="learn-more">
            <!-- <a href="#" class="white learn">Learn more</a>
             <img src="~/assets/img/short-arrow-dark.svg" alt=""> -->
          </div>
        </div>

        <div class="service blue" data-aos="slide-right" data-aos-easing="ease-in-out-back">
          <h1 class="service-title">Digital Design <br> Solutions</h1>

          <p class="service-content">
            Our goal is to help you stand out and stay ahead of the competition. We specialize in Digital media and marketing, Content aggregation and creation that align with the persona of your target market.
          </p>

          <div class="learn-more">
            <!--<a href="#" class="learn blue">Learn more</a>
            <img src="~/assets/img/short-arrow.svg" alt="">-->
          </div>
        </div>
      </div>
    </section>

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
  import testimonies from "~/assets/testimonies.json";

  export default {
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
        currentIndex: 0
      }
    },
    computed: {
      testimony() {
        return testimonies[this.currentIndex];
      }
    },
    methods: {
      rightClick: function () {
        if (this.currentIndex < 2) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      },
      leftClick: function () {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = 2;
        }
      },
    },
    mounted() {
      //this.$emit('loadGlider');

      //setInterval(() => this.rightClick(), 5000);

      new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slideToScroll: 1,
        rewind: true,
        arrows: {
          prev: document.querySelector('.left-arrow'),
          // may also pass element directly
          next: document.querySelector('.right-arrow')
        },
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          }
        ]
      });
    }
  }
</script>

<style>

</style>
