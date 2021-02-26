<template>
  <v-container fluid class="px-0 mx-0" style="height: 100%">
    <v-row v-if="true" class="info" style="min-height: 5%">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
      <v-btn @click="knapp">knapp</v-btn>
    </v-row>

    <v-row
      style="heigth: 90%; border: solid red"
      tag="l-map"
      class="mx-0 mt-0"
      ref="myMap"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url" :subdomains="subdomains"></l-tile-layer>
      <l-circle-marker
        v-if="brukerPosGitt"
        :lat-lng="brukerPos"
        color="red"
      ></l-circle-marker>
    </v-row>
    <l-map v-if="false">
      <!-- for at linter skal se at l-map er i bruk-->
    </l-map>
  </v-container>
</template>

<script>
import { LMap, LTileLayer, LCircleMarker } from "vue2-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
    LCircleMarker,
  },
  data() {
    return {
      url: `https://opencache{s}.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}`,
      // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      subdomains: ["", "2", "3"],
      zoom: 5,
      center: [63.908566, 14.7278],
      brukerPosGitt: false,
      brukerPos: ["", ""],
      bounds: null,
      circleRadius: 50,
      attr:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    };
  },
  methods: {
    knapp() {
      console.log(this.brukerPos);
    },
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      // console.log(center);
      this.center = center;
    },
    boundsUpdated(bounds) {
      this.bounds = bounds;
    },
    userPosition(pos) {
      this.userPos = pos;
    },
    /*onReady(mapObject) {
      this.brukerPos = mapObject.locate({ setView: true, maxZoom: 15 });
      this.brukerPosGitt = true;
    },
    /*onLocationFound(location) {
      //alert("posisjon funnet")
      this.centerUpdated(location.latlng);
      //this.zoomUpdated(3)
    },*/
  },
  computed: {},
  mounted() {
    let this_VueModel = this;
    this.$nextTick(() => {
      let mapObject = this.$refs.myMap.mapObject;
      mapObject
        .locate({ setView: true, maxZoom: 15 })
        .on("locationfound", function (e) {
          this_VueModel.brukerPos = [e.latitude, e.longitude];
          this_VueModel.brukerPosGitt = true;
          console.log("pos  i mountNextTick: " + this_VueModel.brukerPos);
        })
        .on("locationerror", function (e) {
          console.log(e);
          alert("Location access denied.");
        });

      this_VueModel.brukerPosGitt = true;
    });
    console.log("pos  i mount utenforNextTick: " + this_VueModel.brukerPos);
  },
};
</script>

<style scoped>
.leaflet-control {
  background-color: tomato;
  color: tomato;
}
</style>
