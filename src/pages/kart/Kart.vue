<template>
  <v-container fluid class="px-0 mx-0" style="height: 100%">
    <v-row v-if="true" class="info" style="height: 5%">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </v-row>

    <v-row
      class="pa-0"
      tag="l-map"
      ref="myMap"
      @ready="onReady"
      @locationfound="onLocationFound"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url" :subdomains="subdomains"></l-tile-layer>
    </v-row>
    <l-map v-if="false">
      <!-- for at linter skal se at l-map er i bruk-->
    </l-map>
  </v-container>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      url: `https://opencache{s}.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}`,
      // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      subdomains: ["", "2", "3"],
      zoom: 14,
      center: [65.908566, 10.77278],
      bounds: null,
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      console.log(center);
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    onReady(mapObject) {
      mapObject.locate();
    },
    onLocationFound(location) {
      //alert("posisjon funnet")
      this.centerUpdated(location.latlng);
      //this.zoomUpdated(3)
    },
  },
};
</script>

<style scoped>
</style>
