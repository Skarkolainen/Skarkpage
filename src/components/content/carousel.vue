<template>
  <v-container>
    <v-carousel show-arrows-on-hover hide-delimiters height="200px" cycle>
      <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
        :src="image.src"
        :alt="image.alt"
        reverse-transition="fade"
        transition="fade"
        style="width: 200px; height: auto"
        justify="center"
      ></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      images: [
        { src: require("@/assets/git.png"), alt: "git-logo" },
        { src: require("@/assets/js.svg"), alt: "js-logo" },
        { src: require("@/assets/logo.png"), alt: "vue-logo" },
        { src: require("@/assets/logo.svg"), alt: "vuetify-logo" },
        { src: require("@/assets/docker.png"), alt: "docker-logo" },
        { src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" },
        { src: require("@/assets/docker.png") },
        { src: require("@/assets/java.png") },
      ],
    };
  },
};
</script>