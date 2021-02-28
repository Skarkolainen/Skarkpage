<template>
  <v-container class="listeApp">
    <h1 class="heading secondary--text">ListeApp</h1>
    <v-list>
      <v-list-item-group>
        <v-list-item
          v-for="link in links"
          :key="link.route"
          router
          :to="link.route"
        >
          <v-list-item-content
            ><v-list-item-title class="primary--text">
              {{ link.text }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

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
        { text: "ValgtListe", route: "/ListeApp/Liste" },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>
