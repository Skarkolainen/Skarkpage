<template>
  <div class="home">
    <h1 class="secondary--text">Welcome to Skarkpage</h1>
    <div v-if="false">
      <p class="red white--text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam,
        voluptatum modi debitis rem consequatur illo ratione earum. Suscipit rem
        voluptatem dignissimos tempora cumque doloribus obcaecati qui fuga,
        corrupti, laudantium culpa?
      </p>
      <p class="pink lighten-4 text--darken-4 red--text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto obcaecati
        accusamus incidunt deserunt quaerat. Est quo hic, laudantium enim
        quibusdam eum dignissimos ullam? Vel quibusdam ut, repellat fugit libero
        maiores.
      </p>
      <h1 class="display-4">Massive display</h1>
      <h4 class="display-1">small display</h4>
      <p class="headline">This is a headline</p>
      <p class="subheading">This is a subheading</p>
      <p class="caption">this is a caption</p>

      <v-btn class="pink white--text">button</v-btn>
      <br />
      <br />
      <v-btn depressed dark color="pink">Click me</v-btn>
      <br />
      <br />
      <v-btn text color="pink">click</v-btn>

      <br />
      <br />
      <v-btn depressed large class="pink white--text">
        <v-icon left large>mdi-email</v-icon>
        <span> email me</span>
      </v-btn>
    </div>
    <br /><br /><br />

    <div v-if="true" >
      <carousel :autoplay="true" style="width: 20%">
        <slide> <img src="https://via.placeholder.com/150" alt=""> </slide>
        <slide> <img src="https://via.placeholder.com/150" alt=""> </slide>
        <slide> <img src="https://via.placeholder.com/150" alt=""> </slide>
        <slide> <img src="https://via.placeholder.com/150" alt=""> </slide>

      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  data() {
    return {
      links: ['https://ssense.github.io/vue-carousel/examples/',
      'https://madewithvuejs.com/blog/top-vue-js-slider-components']
    }
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>

<style scoped>
</style>
