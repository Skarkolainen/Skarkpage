<template>
  <v-app>
    <navbar></navbar>
    <v-main class="primary">
      <router-view></router-view>
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
@font-face {
  font-family: "CooperBlack";
  src: local("CooperBlack"),
   url(./assets/fonts/CooperBlackRegular.ttf) format("truetype");
}
#app {
  font-family: 'CooperBlack';
 /* background-color: yellow;*/
}

</style>
