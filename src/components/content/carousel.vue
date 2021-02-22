<template>
  <v-container>
    <v-carousel show-arrows-on-hover hide-delimiters continuous height="220px" cycle interval="2000">
      <v-carousel-item
        v-for="(image, i) in images"
        :key="i"
        :src="image.src"
        :alt="image.alt"        
        style="max-width: 200px; height: auto"
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

      //FIXME Bør populeres i computed, med alle bilder i gitt mappe
      images: [
        { src: require("@/assets/git.png"), alt: "git-logo" },
        { src: require("@/assets/github.png"), alt: "github-logo" },
        { src: require("@/assets/js.svg"), alt: "js-logo" },
        { src: require("@/assets/logo.png"), alt: "vue-logo" },
        { src: require("@/assets/logo.svg"), alt: "vuetify-logo" },
        { src: require("@/assets/docker.png"), alt: "docker-logo" },
        { src: require("@/assets/linux-logo.png") },
        { src: require("@/assets/java.png") },
        { src: require("@/assets/postgis.jpg") },
        { src: require("@/assets/leaflet.jpg") },

                { src: require("@/assets/vscode.jpg") },
        { src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" },
        
        
      ],
    };
  },
};
</script>