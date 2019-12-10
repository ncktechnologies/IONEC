<template>
  <div>
    <transition name="fade-loader" v-if="showLoader">
      <Loader></Loader>
    </transition>

    <Navbar @open="toggle('open')"></Navbar>

    <transition enter-active-class="bounceDown"
                leave-active-class="bounceUp">

      <Sidebar @close="toggle('close')" v-if="showSidebar"></Sidebar>
    </transition>

    <transition mode="out-in"  enter-active-class="slideRight">
     <nuxt/>
    </transition>

    <Footer></Footer>
  </div>
</template>

<script>
  import Loader from '~/components/Loader'
  import Navbar from '~/components/Navbar'
  import Sidebar from '~/components/Sidebar'
  import Footer from '~/components/Footer'

  export default {
    components: {
      Loader,
      Navbar,
      Sidebar,
      Footer
    },
    data(){
      return{
        showLoader: true,
        showSidebar: false
      }
    },
    watch: {
      '$route': function() {
        this.toggle('close')
      }
    },
    methods:{
      toggle(type){
        const body = document.querySelector("body");
        const html = document.querySelector("html");
        if(type === 'open'){
          this.showSidebar = true;
          body.classList.add('no-scroll');
          html.classList.add('no-scroll');
        } else if(type === 'close'){
          this.showSidebar = false;
          body.classList.remove('no-scroll');
          html.classList.remove('no-scroll');
        }
      }
    },
    mounted() {
      const body = document.querySelector("body");
      const html = document.querySelector("html");
      body.classList.add('no-scroll');
      html.classList.add('no-scroll');
      setTimeout(()=> {
        body.classList.remove('no-scroll');
        html.classList.remove('no-scroll');
        this.showLoader = false;
      }, Math.floor((Math.random() * 4))  + "000")
    }
  }
</script>

<style>
  .fade-loader-leave-active{
    opacity: 0;
    transition: all ease 1s;
  }
</style>
