
<template>
  <nav>
    <!-- TOP NAVBAR -->
    <v-app-bar flat app class="primary">
      <v-app-bar-nav-icon
        class="black--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        style="cursor: pointer"
        @click="$router.push('/')"
        class="grey--text"
        ><span class="font-weigth-light secondary--text">Skarkpage</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text disabled depressed class="black--text">
        <span class="secondary--text">Logg inn</span>
        <v-icon right class="secondary--text">mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- VENSTRE NAVDRAWER -->
    <v-navigation-drawer app v-model="drawer" class="secondary primary--text">
      <v-list>
        <!--FIXME Bedre kontrast på hover -->
        <v-list-item
          @click="drawer = false"
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="primary--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              {{ link.text }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <my-carousel></my-carousel>
        <div class="hidden-md-and-up"  style="clear: both; height: 120px;"></div>
      </template>

      <v-footer v-if="false" class="justify-center pl-0" heigth="200" app>
        <span>2018</span>
      </v-footer>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import myCarousel from "../content/carousel.vue";
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard-outline", text: "Skarkpage", route: "/" },
        {
          icon: "mdi-format-list-checks",
          text: "ListeApp",
          route: "/ListeApp",
        },
        { icon: "mdi-map", text: "Kart", route: "/kart" },
      ],
    };
  },
  components: {
    myCarousel,
  },
};
</script>

<style scoped>
</style>
