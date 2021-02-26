<template>
  <div>
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
      style="height: 400px"
    >
      <vl-view
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
      ></vl-view>

      <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon
                src="@/public/favicon.ico"
                :scale="0.4"
                :anchor="[0.5, 1]"
              ></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="wmts">
        <vl-source-wmts
          :attributions="attribution"
          :url="url"
          :layer-name="layerName"
          :matrix-set="matrixSet"
          :matrixIds="matrixIds"
          :format="format"
          :style-name="styleName"
          :tileGrid="tileGrid"
        ></vl-source-wmts>
      </vl-layer-tile>
    </vl-map>
    <div style="padding: 20px">
      Zoom: {{ zoom }}<br />
      Center: {{ center }}<br />
      Rotation: {{ rotation }}<br />
      My geolocation: {{ geolocPosition }}
      <v-btn @click="knapp">knapp</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kart: true,
      geolocPosition: undefined,

      linker: ["https://codesandbox.io/s/w3wp7?file=/src/App.vue"],
      zoom: 2,
      center: [-90, 50],
      rotation: 0,
      layerName: "topo4",
      url: "http://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?&",
      matrixSet: "EPSG:25833",
      matrixIds: [
        "EPSG:25833:4",
        "EPSG:25833:4",
        "EPSG:25833:4",
        "EPSG:25833:4",
      ],
      tileGrid: "",
      format: "image/png",
      styleName: "default",
      attribution:
        'Tiles © <a href="https://services.arcgisonline.com/arcgis/rest/' +
        'services/Demographics/USA_Population_Density/MapServer/">ArcGIS</a>',
    };
  },
  /*computed: {
    url() {
      let layer = "topo4"
      let matrixSet ="EPSG%3A25833"
      let TileMatrix = "EPSG%3A25833%3A4"
      let url= `http://opencache.statkart.no/gatekeeper/gk/gk.open_wmts?&layer=${layer}&style=default&tilematrixset=${matrixSet}&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=EPSG%3A25833%3A4&TileCol=7&TileRow=6`
      return url;
    },
  },*/
  methods: {
    knapp() {
      this.kart = !this.kart;
    },
  },
};
</script>

<style scoped>
</style>
