<template>
  <div style="height: 100%">
    <div v-if="true" class="info" style="height: 5%">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </div>
    <l-map
      style="height: 100%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url" :subdomains="subdomains"></l-tile-layer>
    </l-map>
  </div>
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
      zoom: 10,
      center: [59.908566, 10.77278],
      bounds: null,
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
  },
};
</script>

<style scoped>
</style>
