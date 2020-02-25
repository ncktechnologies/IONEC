<template>
    <section id="product-page">
        <div class="hero" :style="bg">

        </div>
        <section class="problem container" v-if="page.first_part">

            <ul class="list">
                <li v-for="li in page.first_part.list"> — {{li}}</li>
            </ul>
            <div class="more">
                <h1 class="title" :class="page.name">{{ page ? page.first_part.title : ''}}</h1>

                <p class="content">
                    <span v-for=" problem in page.first_part.problem">  {{ problem }} </span>
                </p>
            </div>
        </section>

        <section class="card-wrapper" v-if="page.second_part">
            <div class="text">
                <div class="text-wrap" data-aos="slide-right">
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

        <section class="solution-wrapper container" v-if="page.third_part">
            <div class="image">
                <img :src="page.third_part.image">
            </div>
            <div class="text" data-aos="fade-right">
                <h1 class="title" :class="page.name">{{page.third_part.title}}</h1>
                <div class="content">
          <span v-for="solution in  page.third_part.text ">
            {{ solution }}
          </span>
                </div>
            </div>
        </section>

        <div class="drinks-wrapper">
            <div class="image">
                <img :src="page.fourth_part.image">
            </div>
            <div class="text" :class="page.name">
                <p data-aos="fade-down">{{ page.fourth_part.text }} </p>
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
            <a :href=" '/product/' + prevPage.name">
                <div class="page" :class="prevPage.name">
                    <p class="control"> Previous Project</p>
                    <h1 class="title"> {{ prevPage.name}} </h1>
                </div>
            </a>

            <a :href="'/product/' + nextPage.name">
                <div class="page" :class="nextPage.name">
                    <p class="control"> Next Project</p>
                    <h1 class="title"> {{ nextPage.name}} </h1>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
    import pages from "~/assets/pages.json";

    export default {
        name: "Services",
        middleware: 'page',
        computed: {
            bg() {
                return {backgroundImage: `url('${this.page.image}')`};
            },
            prevPage() {
                //checks if the currently viewed page is not the first index rotates to last array index
                let prev;
                if (this.index === 0) {
                    prev = pages.length - 1;
                    return pages[prev];
                } else {
                    prev = this.index - 1;
                    return pages[prev];
                }
            },
            nextPage() {
                //checks if the currently viewed page is not the last index rotates to 1st array index
                let next;
                if (this.index === (pages.length - 1)) {
                    next = 0;
                    return pages[next];
                } else {
                    next = this.index + 1;
                    return pages[next];
                }
            }
        },
        asyncData({route}) {
            //gets queried page
            let page = pages.filter(page => page.name === route.params.id);
            //get index
            let index = pages.findIndex(page => page.name === route.params.id);
            return {
                page: {...page[0]},
                index: index
            }
        },
    }
</script>

<style scoped>
    span {
        display: block;
        margin-bottom: 1rem;
    }
</style>
