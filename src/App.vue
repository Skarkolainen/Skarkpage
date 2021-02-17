<template>
  <v-app class="grey lighten-4">
    <navbar></navbar>
    <v-main>
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
import Navbar from './components/layout/Navbar.vue'

export default {
  name: 'App',
  components: {
    'navbar': Navbar
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
  background-color: yellow;
}

</style>
