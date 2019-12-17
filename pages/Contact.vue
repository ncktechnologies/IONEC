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
              <input type="text" name="fullname" id="fname" placeholder=" ">
              <label for="fname">First name</label>
            </div>

            <div class="field">
              <input type="text" name="fullname" id="lname" placeholder=" ">
              <label for="lname">Last name</label>
            </div>
          </div>

          <div class="field">
            <input type="text" name="email" id="email" placeholder=" ">
            <label for="email">Email</label>
          </div>

          <div class="flex two">
            <div class="field">
              <input type="text" name="email" id="area" placeholder=" ">
              <label for="area">Area code</label>
            </div>

            <div class="field">
              <input type="text" name="email" id="phone" placeholder=" ">
              <label for="phone">Phone</label>
            </div>
          </div>

          <div class="field">
            <input type="text" name="email" id="project" placeholder=" ">
            <label for="project">Project Type</label>
          </div>

          <div class="field">
            <textarea rows="2" id="message" placeholder=""></textarea>
            <label for="message">Message</label>
          </div>

          <div class="shoot">
            <a href="#" class="send"> Shoot it!</a>
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
  export default {
    name: "Services"
  }
</script>

<style scoped>

</style>
