
<template>
  <nav>
    <v-app-bar flat app class="primary">
      <v-app-bar-nav-icon
        class="black--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="grey--text"
        ><span class="font-weigth-light secondary--text">Skarkpage</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text disabled depressed class="black--text">
        <span class="secondary--text">Logg inn</span>
        <v-icon right class="secondary--text">mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="secondary primary--text">
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">

          <v-list-item-action>
            <v-icon class="primary--text">{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              {{link.text}}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {icon: 'mdi-view-dashboard-outline', text:'Skarkpage', route:'/'},
        {icon: 'mdi-format-list-checks', text:'ListeApp', route:'/ListeApp'},
        {icon: 'mdi-map', text:'Kart', route:'/kart'}


      ]
    };
  },
};
</script>

<style scoped>
</style>
