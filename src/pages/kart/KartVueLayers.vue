<template>
  <v-container id="mapApp" style="height: 100%">
    <v-layout wrap fill-height>
      <v-row no-gutters style="height: 100%">
        <v-col style="border: solid yellow" cols="12" sm="12" md="8">
          <map-container fill-height :geojson="geojson"></map-container>
        </v-col>
        <v-col style="border: solid yellow" cols="12" sm="12" md="4">
          <v-row no-gutters>
            <v-col
              style="height: 300px;"
              no-gutters
              cols="12"
              sm="6"
              md="12"
            >
              <edit :geojson="geojson" v-on:change="geojson = $event"></edit
            ></v-col>
            <v-col style="height: 50%" no-gutters cols="12" sm="6" md="12"
              >inspect</v-col
            >
          </v-row>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
//https://dev.to/camptocamp-geo/integrating-an-openlayers-map-in-vue-js-a-step-by-step-guide-2n1p

import MapContainer from "../../components/content/OpenLayersMap/MapContainer.vue";
import edit from "../../components/content/OpenLayersMap/Edit.vue";
export default {
  data: () => ({
    // this is the initial GeoJSON data
    geojson: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-27.0703125, 43.58039085560784],
            [-28.125, 23.563987128451217],
            [-10.8984375, 32.84267363195431],
          ],
        ],
      },
    },
  }),
  components: {
    MapContainer,
    edit,
  },
};
</script>

<style scoped>
</style>
