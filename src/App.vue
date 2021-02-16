<template>
  <v-app>
    <v-main>
      <the-header app />
      <skarkpage/>
    </v-main>
  </v-app>
</template>

<script>
import Skarkpage from './pages/skarkpage/Skarkpage.vue';
import TheHeader from './components/layout/TheHeader.vue';

export default {
  name: 'App',

  components: {
    Skarkpage,
    TheHeader
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
