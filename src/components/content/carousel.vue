<template>
  <v-container class="float-right">
    <div style="padding: 5%">
      <VueSlickCarousel
        :arrows="false"
        :dots="false"
        :vertical="true"
        autoplay
        :autoplaySpeed="1500"
        :rows="2"
      >
      
        <div>
          
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="100"
            max-width="100"
            src="@/assets/docker.png"
          ></v-img>
        </div>
        <div>
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="100"
            max-width="100"
            src="@/assets/logo.png"
          ></v-img>
        </div>
        <div>
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="100"
            max-width="100"
            src="@/assets/js.svg"
          ></v-img>
        </div>
                <div>
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="100"
            max-width="100"
            min-width="100"
            min-height="100"
            src="@/assets/git.png"
          ></v-img>
        </div>
      </VueSlickCarousel>
    </div>
  </v-container>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
};
</script>