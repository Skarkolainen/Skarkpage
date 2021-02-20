<template>
  <div>
    <v-row justify="center">
      <v-date-picker
        class="mt-4"
        :value="datePickerFormattedDate"
        @input="valgtDato"
        first-day-of-week="1"
      ></v-date-picker>
    </v-row>
    <v-row justify="center">
      <ul>
        <li>
          <p>ukedag: {{ ukedag }}</p>
        </li>
        <li>
          <p>dato: {{ dato }}</p>
        </li>
        <li>
          <p>ukenr: {{ ukenr }}</p>
        </li>
        <li>
          <p>døgnNr: {{ døgnNr }}</p>
        </li>
        <li v-if="skuddÅr"><p>Dette er et skuddår</p></li>
        <li v-else><p>Dette er ikke et skuddår</p></li>
      </ul>
    </v-row>
  </div>
</template>

<script>
export default {

  //TODO 
  data() {
    return {
      dato: null,
      ukedag: null,
      ukenr: null,
      døgnNr: null,
      skuddÅr: null,
    };
  },
  methods: {
    valgtDato(date) {
      const datoSplittet = date.split("-");
      let år = datoSplittet[0]; 
      let måned = Number(datoSplittet[1])-1; 
      let dag = datoSplittet[2]; 

      let dato = new Date(år, måned, dag);
      this.settDatoTid(dato);
    },

    erSkuddÅr(år) {
      return (år % 4 == 0 && år % 100 != 0) || år % 400 == 0;
    },

    finnDøgnNr(dato) {
      const skuddÅr = this.erSkuddÅr(dato.getFullYear());

      const nyMåned_akkumulerteDager = [
        0,
        31,
        59,
        90,
        120,
        151,
        181,
        212,
        243,
        273,
        304,
        334,
      ];

      let døgnNr = nyMåned_akkumulerteDager[dato.getMonth()] + dato.getDate();

      //Hvis det er skuddår, og dato er forbi 29.februar(dagnr 60 i skuddår), legg til en dag.
      if (skuddÅr && døgnNr > 59 && dato.getMonth() > 1) {
        døgnNr++;
      }

      return døgnNr;
    },

    isoUkeNr(dato) {
      
      //Finn døgnNr
      let døgnNr = this.finnDøgnNr(dato)
      //Finn ukedagNr
      var ukedagNr = ((dato.getDay() + 6) % 7) +1

      //Formel
      return Math.floor((10 + døgnNr - ukedagNr) / 7);
    },
    settDatoTid(dato) {
      var nyDato = dato;
      var måned = [
        "Januar",
        "Februar",
        "Mars",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      var ukedag = [
        "Søndag",
        "Mandag",
        "Tirsdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Lørdag",
        
      ];
      this.dato =
        nyDato.getDate() +
        "." +
        måned[nyDato.getMonth()] +
        "." +
        nyDato.getFullYear();

      this.ukedag = ukedag[nyDato.getDay()];

      this.ukenr = this.isoUkeNr(nyDato);

      this.døgnNr = this.finnDøgnNr(dato);
      this.skuddÅr = this.erSkuddÅr(dato.getFullYear());
    },
  },

  computed: {
    datePickerFormattedDate() {
      let dato = new Date().toISOString().slice(0, 10);
      return dato;
    },
  },

  created() {
    //År, måned, dag, time, minutter, sekunder
    //const dato = new Date(2017, 2, 1, 10, 33, 30);
    const dato = new Date();

    this.settDatoTid(dato);
  },
};
</script>