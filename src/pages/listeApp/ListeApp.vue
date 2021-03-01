<template>
  <v-container class="listeApp">
    <h1 class="heading secondary--text">ListeApp</h1>
    <v-row class="my-2">
      <div v-for="link in links" :key="link.route">
        <v-btn :to="link.route" elevation="2" outlined>{{ link.text }}</v-btn>
      </div>
    </v-row>
    <v-container class="my-5">
      <h3>Visning av lagNyListe, listeoversikt eller en enkeltliste</h3>
      <router-view></router-view>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      links: [
        {
          text: "Lag ny liste",
          route: "/ListeApp/nyListe",
        },
        {
          text: "Alle lister",
          route: "/ListeApp/ListeOversikt",
        },
        { text: "ValgtListe", route: "/ListeApp/ListeNavn" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
