<template>
  <footer id="footer">
    <div class="foot-wrapper container">
      <div class="logo">
        <img class="logo-d" src="~/assets/img/logo_d.svg" alt="ioneC logo">
      </div>


      <div class="section-wrapper">
        <div class="section">
          <h3 class="title">Our offices</h3>

          <p class="address">
            <span> <b> Nigeria: </b> 14A, Oba Elegushi Street, Ikoyi, Lagos State, Nigeria</span>

            <span>
            <b> Kenya: </b> I & M Bank House, 7th Floor,
            2nd Ngong Avenue - Upperhill, Nairobi, Kenya
            </span>

            <span>
              <b> United Kingdom: </b>  25, Dalmeyer Road London, NW10 2XA, London
              </span>
          </p>
        </div>

        <div class="section">
          <h3 class="title">Contact</h3>

          <p class="address">
            <a href="mailto: info@ionec.com"> info@ionec.com </a>

            <br>
            <a href="tel: +234 816 774 1826"> +234 816 774 1826 </a>

            <br>

            i-one-c Limited
          </p>
        </div>

        <div class="section">
          <h3 class="title">Product</h3>

          <p class="address">
            <a href="/product/ionebill"> iONE BILL </a>

            <br>

            <a href="/product/ionepay"> iONE PAY </a>

            <br>
            <a href="/product/engage"> ENGAGE </a>

            <br>

            <a href="/product/dagdag"> DAG DAG </a>
          </p>
        </div>

        <div class="section">
          <h3 class="title"> Connect </h3>

          <p class="socials">
            <a href="https://twitter.com/IOneCLimited"><img src="~/assets/img/twitter.svg"></a>
            <a href="https://www.facebook.com/Innovate1company"><img src="~/assets/img/facebook.svg"></a>
            <a href="https://www.instagram.com/ionec__limited/"><img src="~/assets/img/instagram.svg"></a>
            <a href="https://www.linkedin.com/in/ionec/"><img src="~/assets/img/linkedin.svg"></a>
          </p>
        </div>
      </div>

    </div>
    <div class="copyright">
      <div class="container">
      <span> All rights reserved. Innovate One Company, LTD.  &copy; {{date}} </span>

      <span>
        © {{date}} Innovate One Company, Ltd. All rights reserved All text, graphics, audio files, code, downloadable
        material, and other works on this web site are the copyrighted works of iOneC, Inc. All Rights Reserved. Any
        unauthorized redistribution or reproduction of any copyrighted materials on this web site is strictly
        prohibited. Other product and company names are trademarks of their respective owners. This web site contains
        simulated images; actual appearance may vary.
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    computed:{
      date(){
        return new Date().getFullYear()
      }
    }
  }
</script>
