<template>
  <v-app>
    <navbar></navbar>
    <v-main class="primary">
      <!-- class: m for margin, x for x-retning( left og right), b for bottom, 4 for strength -->
      <router-view class="mx-4 mb-4"></router-view>
    </v-main>
    <v-footer></v-footer>

  </v-app>
</template>

<script>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    'navbar': Navbar,
    'v-footer': Footer
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>
