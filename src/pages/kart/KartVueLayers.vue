<template>
  <div>
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:3857"
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
                src="_media/marker.png"
                :scale="0.4"
                :anchor="[0.5, 1]"
              ></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile v-if="kart" id="wmts">
        <vl-source-wmts
          :attributions="attribution"
          :url="url"
          :layer-name="layerName"
          :matrix-set="matrixSet"
          :format="format"
          :style-name="styleName"
        ></vl-source-wmts>
      </vl-layer-tile>

      <vl-layer-tile v-else id="osm">
        <vl-source-osm></vl-source-osm>
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
      zoom: 2,
      center: [0, 0],
      rotation: 0,
      geolocPosition: undefined,
      url: "https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/WMTS/",
      layerName: "0",
      matrixSet: "EPSG:3857",
      format: "image/png",
      styleName: "default",
      attribution:
        'Tiles © <a href="https://services.arcgisonline.com/arcgis/rest/' +
        'services/Demographics/USA_Population_Density/MapServer/">ArcGIS</a>',
    };
  },
  methods: {
    knapp() {
      this.kart = !this.kart;
    },
  },
};
</script>

<style scoped>
</style>
