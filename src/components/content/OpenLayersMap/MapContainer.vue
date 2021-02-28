<template>
  <div ref="map-root" style="width: 100%; height: 100%"></div>
</template>

<script>
import View from "ol/View";
import Map from "ol/Map";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";

import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";

import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";

import Geolocation from "ol/Geolocation";

// importing the OpenLayers stylesheet is required for having
// good looking buttons!
import "ol/ol.css";

export default {
  name: "MapContainer",
  components: {},
  props: {
    geojson: Object,
  },
  data: () => ({
    olMap: null,
    vectorLayer: null,
    vectorLayer2: null,
    view: null,
    info: null,
    accuracyFeature: new Feature(),
  }),

  mounted() {
    this.view = new View({
      zoom: 0,
      center: [0, 0],
      constrainResolution: true,
    });

    let geolocation = new Geolocation({
      tracking: true,
      trackingOptions: {
        enableHighAccuracy: true,
      },
      // take the projection to use from the map's view
      projection: this.view.getProjection(),
    });

    // listen to changes in position
    geolocation.on("change", function () {
      console.log(geolocation.getPosition());
    });
    geolocation.on("error", function (error) {
      this.info = error.message;
      console.log(this.info);
    });
    let accuracyFeature = new Feature();
    geolocation.on("change:accuracyGeometry", function () {
      accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    });

    let positionFeature = new Feature();
    positionFeature.setStyle(
      new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({
            color: "#3399CC",
          }),
          stroke: new Stroke({
            color: "#fff",
            width: 2,
          }),
        }),
      })
    );

    geolocation.on("change:position", function () {
      var coordinates = geolocation.getPosition();
      positionFeature.setGeometry(coordinates ? new Point(coordinates) : null);
    });

    this.vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [positionFeature, accuracyFeature], // the vector layer is now created empty
      }),
    });

    this.vectorLayer2 = new VectorLayer({
      source: new VectorSource({
        features: [positionFeature, accuracyFeature], // the vector layer is now created empty
      }),
    });

    // this is where we create the OpenLayers map
    this.olMap = new Map({
      // the map will be created using the 'map-root' ref
      target: this.$refs["map-root"],
      layers: [
        // adding a background tiled layer
        new TileLayer({
          source: new OSM(), // tiles are served by OpenStreetMap
        }),
        new TileLayer({
          source: new XYZ({
            url:
              "https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}",
            attributions: '<a href="http://www.kartverket.no/">Kartverket</a>',
          }),
        }),
        this.vectorLayer,
        this.vectorLayer2,
      ],

      // the map view will initially show the whole world
      view: this.view,
    });

    this.updateSource(this.geojson);
  },
  watch: {
    geojson(value) {
      // call `updateSource` whenever the input changes as well
      this.updateSource(value);
    },
  },
  methods: {
    // this will parse the input data and add it to the map
    updateSource(geojson) {
      const view = this.olMap.getView();
      const source = this.vectorLayer.getSource();

      const features = new GeoJSON({
        featureProjection: "EPSG:3857",
      }).readFeatures(geojson);

      source.clear();
      source.addFeatures(features);

      // this zooms the view on the created object
      view.fit(source.getExtent());
    },
  },
};
</script>