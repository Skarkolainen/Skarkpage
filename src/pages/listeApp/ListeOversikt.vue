<template>
  <v-container>
    <h3>Alle lister</h3>
    <v-data-table
      :headers="overskrift"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    >
    <template>

    </template>
    
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      overskrift: [
        { text: "Navn", value: "navn" },
        { text: "Aktive punkter", value: "aktive" },
        { text: "Fullførte punkter", value: "fullførte" },
        { text: "Dato opprettet", value: "opprettet" },
        { text: "Sist endret", value: "endret" },
      ],
      desserts: [
        {
          navn: "Handleliste",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: new Date(2020,12,31,16,30),
        },
        {
          navn: "Middagstips",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: new Date(2020,12,31,16,31),
        },
        {
          navn: "Ønskeliste",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: new Date(2021,12,31,16,30),
        },
        {
          navn: "Handleliste2",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: new Date(2022,12,31,16,30),
        },
        {
          navn: "Middagstips2",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: new Date(2020,12,30,16,30),
        },
        {
          navn: "Ønskeliste2",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: new Date(2019,12,31,16,30),
        },
      ],
    };
  },
};
</script>