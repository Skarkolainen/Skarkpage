<template>
  <v-container>
    <h3>Alle lister</h3>
    <v-data-table
      class="row-pointer elevation-1"
      :headers="overskrift"
      :items="lister"
      :items-per-page="5"
      @click:row="klikk"
    >
      <template v-slot:items="props">
        <td>{{ props.item.navn +"hello" }}</td>
        <td class="text-xs-right" style="background-color: yellow;">{{ props.item.opprettet }}</td>

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
        { text: "Date", value: "opprettet" },
        { text: "Sist endret", value: "endret" },
      ],
      lister: [
        {
          navn: "Handleliste",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: new Date(2020, 12, 31, 16, 30).toISOString(),
        },
        {
          navn: "Middagstips",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: new Date(2020, 12, 31, 16, 31).toISOString(),
        },
        {
          navn: "Ønskeliste",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: new Date(2021, 12, 31, 16, 30).toISOString(),
        },
        {
          navn: "Handleliste2",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: new Date(2022, 12, 31, 16, 30).toISOString(),
        },
        {
          navn: "Middagstips2",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: new Date(2020, 12, 30, 16, 30).toISOString(),
        },
        {
          navn: "Ønskeliste2",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: new Date(2019, 12, 31, 16, 30).toISOString(),
        },
      ],
    };
  },
  methods: {
    klikk(props) {
      console.log(props.navn);
      this.$router.push("/ListeApp/" + props.navn);
    },
    customSort: function (items, index, isDesc) {
      //https://codepen.io/mmia/pen/jOPyXad
      items.sort((a, b) => {
        if (index[0] == "date") {
          if (!isDesc[0]) {
            return new Date(b[index]) - new Date(a[index]);
          } else {
            return new Date(a[index]) - new Date(b[index]);
          }
        } else {
          if (typeof a[index] !== "undefined") {
            if (!isDesc[0]) {
              return a[index]
                .toLowerCase()
                .localeCompare(b[index].toLowerCase());
            } else {
              return b[index]
                .toLowerCase()
                .localeCompare(a[index].toLowerCase());
            }
          }
        }
      });
      return items;
    },
  },
};
</script>

<style lang="css" scoped>
.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}
</style>