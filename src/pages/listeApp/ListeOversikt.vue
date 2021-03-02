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
      <template v-slot:item.aktive="{ item }">
        <v-chip :color="getColor(item.aktive)" dark>
          {{ item.aktive }}
        </v-chip>
      </template>

      <template v-slot:item.endret="{ item }">
        <span dark>
          {{ item.endret | tabellDato }}
        </span>
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
          endret: 201812181630,
        },
        {
          navn: "Middagstips",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: 201812181631,
        },
        {
          navn: "Ønskeliste",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: 201912181630,
        },
        {
          navn: "Handleliste2",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: 201812191630,
        },
        {
          navn: "Middagstips2",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: 201812181630,
        },
        {
          navn: "Ønskeliste2",
          aktive: 5,
          fullførte: 2,
          opprettet: 24,
          endret: 201812181630,
        },
      ],
    };
  },
  methods: {
    getColor(calories) {
      if (calories > 400) return "red";
      else if (calories > 200) return "orange";
      else return "green";
    },
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
  filters: {
    tabellDato: function (dato) {
      const år = Math.floor(dato / 100000000)
      const mnd = Math.floor((dato - (år * 100000000)) / 1000000)
      return år.toString() + " " + mnd.toString();
    },
  },
};
</script>

<style lang="css" scoped>
.row-pointer >>> tbody tr :hover {
  cursor: pointer;
}
</style>