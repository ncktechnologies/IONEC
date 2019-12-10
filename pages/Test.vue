<template>
  <section id="test">
    <div class="wrapper" :class="{preview:preview, show: show}">
      <img src="~/assets/img/toggle.svg" @mouseover="over('open')" @mouseleave="over('close')" @click="show = ! show">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Alias ea ipsa nulla quam rem sed!
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Services",
    data(){
      return{
        preview: false,
        show : false
      }
    },
    methods:{
      over(type){
        this.preview = type === 'open';
      }
    }
  }
</script>

<style lang="scss" scoped>
  #test {
    height: 50vh;
    position: relative;
    .wrapper{
      width: 400px;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      clip-path: circle(20px at 86.5% 12.5%);
      transition: clip-path 1s cubic-bezier(0.39, 0.575, 0.565, 1), background-color .2s 1s;

      &.preview{
        background-color: #fff;
        clip-path: circle(30px at 86.5% 12.5%);
        transition: clip-path 1s cubic-bezier(0.39, 0.575, 0.565, 1)
      }

      &.show{
        clip-path: circle(1000px at 50% 50%);
        background-color: green;
        transition: clip-path 2s cubic-bezier(0.39, 0.575, 0.565, 1) 0s;
      }

      img{
        position: absolute;
        top: 10%;
        right: 10%;
        cursor: pointer;
        width: 30px;
        z-index: 5;
      }

      p{
        text-align: center;
        padding: 1rem;
        color: #fff;
        line-height: 24px;
      }
    }
  }
</style>
