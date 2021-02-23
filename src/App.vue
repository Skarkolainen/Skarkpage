<template>
  <v-app>
    <navbar app></navbar>
    <v-main class="primary">
      <router-view></router-view>
      <!-- class: m for margin, x for x-retning( left og right), b for bottom, 4 for strength -->
    </v-main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: "App",
  components: {
    navbar: Navbar,
    "v-footer": Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
</style>
