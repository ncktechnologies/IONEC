<template>
  <section id="contact-page">
    <div id="hero-wrapper" class="about">
      <div class="hero container">
        <h1 class="intro">We hoped you'd <br> end up <span> here </span></h1>

        <p class="sub">
          We typically reply in minutes
        </p>
      </div>
    </div>

    <div id="form-wrapper" class="container">



      <div class="form">
        <div class="inputs">
          <div v-show="error"class="field">
            <p style="color:red" >{{error_msg}}</p>

          </div>
          <div class="flex one">


            <!--<div class="field"></div>-->


            <div class="field">
              <input type="text" v-model="contact.first_name"  id="fname" placeholder=" ">
              <label for="fname">First name</label>
            </div>

            <div class="field">
              <input type="text" v-model="contact.last_name"  id="lname" placeholder=" ">
              <label for="lname">Last name</label>
            </div>
          </div>

          <div class="field">
            <input type="text" v-model="contact.email"  id="email" placeholder=" ">
            <label for="email">Email</label>
          </div>

          <div class="flex two">
            <div class="field">
              <input type="number" v-model="contact.area_code"  id="area" placeholder=" ">
              <label for="area">Area code</label>
            </div>

            <div class="field">
              <input type="number" v-model="contact.phone"  id="phone" placeholder=" ">
              <label for="phone">Phone</label>
            </div>
          </div>

          <div class="field">
            <input type="text" v-model="contact.project_type" id="project" placeholder=" ">
            <label for="project">Project Type</label>
          </div>

          <div class="field">
            <textarea rows="2" v-model="contact.message" id="message" placeholder=""></textarea>
            <label for="message">Message</label>
          </div>

          <div class="shoot">
            <button  @click="submitForm()" type="button" class="send"> Shoot it!</button>
          </div>
        </div>


        <div class="presentation-wrapper">
          <h1 class="title">Need our presentation?</h1>

          <p class="sub">
            <span>
              Directly download, print or share the link as a PDF to your partner.
            </span>
          </p>

          <div class="bottom">
            <a href="#"> <img src="~/assets/img/download.svg"> </a>
            <span>Innovation One Company Brochure.pdf (11mb)</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import Axios from 'axios'
import Swal from 'sweetalert'
// import Vue from 'vue'
// import Toasted from 'vue-toasted';
// Vue.use(Toasted);

let options = {
    type : 'error',
    icon : 'error_outline'
};

  class Contact{

    constructor(contact){

        this.first_name = contact.first_name || '',
        this.last_name = contact.last_name || '',
        this.email = contact.email || '',
        this.area_code = contact.area_code || '',
        this.phone = contact.phone || '',
        this.project_type = contact.project_type || '',
        this.message = contact.message || ''

    }

  }

  export default {
    name: "Services",

    data(){

      return{

        contact: new Contact({}),
          error: false,
        error_msg: ''

      }

    },

    methods: {

        // showError($message){
        //
        //     let toast = Vue.toasted.show($message, {
        //         theme: "toasted-primary",
        //         type: "error",
        //         position: "top-right",
        //         duration : 5000
        //     });
        //
        // },

       submitForm () {


           // Swal({ text: 'Please wait while we send your message ...', buttons: false })

           Axios.post('https://ionec.geteasypayng.com/submit', {

              firstname: this.contact.first_name,
              lastname: this.contact.last_name,
              mail: this.contact.email,
              phone: this.contact.phone,
              areacode: this.contact.area_code,
              message: this.contact.message,
              projecttype: this.project_type,


            }).then(res => {

              Swal('Message Sent Successfully.....');
              location.reload();

          }).catch(err => {

              console.log(err.response);

              this.error = true;

              this.error_msg = "Please make sure all fields are filled correctly....";

                  // this.showError(this.error_msg);

              //
              // if (err.response.code === 400){
              //
              //
              //     this.showError(this.error_msg);
              // }
          })

          // try {
          //   await this.$axios.$post('', {
          //     name: this.contact.first_name,
          //     email: this.contact.email,
          //     msg: this.contact.message
          //   })
          //   // this.submitting = false
          //   // this.isSubmitted = true
          //   await new Promise(resolve => setTimeout(resolve, 2500))
          //   this.$emit('close')
          // } catch (e) {
          //   this.submitting = false
          //   this.error = true
          //   console.error(e)
          // }
    }


    }
  }
</script>

<style scoped>

</style>
