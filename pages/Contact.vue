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
          <div class="flex one">
            <div class="field">
              <input type="text" v-model="contact.first_name" name="fullname" id="fname" placeholder=" ">
              <label for="fname">First name</label>
            </div>

            <div class="field">
              <input type="text" v-model="contact.last_name"  name="fullname" id="lname" placeholder=" ">
              <label for="lname">Last name</label>
            </div>
          </div>

          <div class="field">
            <input type="text" v-model="contact.email" name="email" id="email" placeholder=" ">
            <label for="email">Email</label>
          </div>

          <div class="flex two">
            <div class="field">
              <input type="text" v-model="contact.area_code" name="email" id="area" placeholder=" ">
              <label for="area">Area code</label>
            </div>

            <div class="field">
              <input type="text" v-model="contact.phone" name="email" id="phone" placeholder=" ">
              <label for="phone">Phone</label>
            </div>
          </div>

          <div class="field">
            <input type="text" v-model="contact.project_type" name="email" id="project" placeholder=" ">
            <label for="project">Project Type</label>
          </div>

          <div class="field">
            <textarea rows="2" v-model="contact.message" id="message" placeholder=""></textarea>
            <label for="message">Message</label>
          </div>

          <div class="shoot">
            <button  @click="submitForm()" type="submit" class="send"> Shoot it!</button>
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

import axios from 'axios'

  class Contact{

    constructor(contact){

        this.first_name = contact.first_name || 'name',
        this.email = contact.email || 'yunusabdulqudus1@gmail.com',
        this.last_name = contact.last_name,
        this.area_code = contact.area_code,
        this.phone = contact.phone,
        this.project_type = contact.project_type,
        this.message = contact.message || 'ddddddddd'

    }

  }

  export default {
    name: "Services",

    data(){

      return{

        contact: new Contact({}),

      }

    },

    methods: {


       submitForm () {

    
          // this.submitting = true
          // this.$ga.event('submit', 'form', this.$i18n.locale)
          // this.error = false

          axios.post('', {
              name: this.contact.first_name,
              email: this.contact.email,
              msg: this.contact.message

            }).then(res => {

            console.log(res)

          }).catch(err => {

            console.log(err.response)
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
