import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';

// --- Leaflet --- //
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// --- Leaflet --- //
/*
// --- VueLayers ---//
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css' // needs css-loader

Vue.use(VueLayers, {
  dataProjection: 'EPSG:4326',
})
// --- VueLayers ---//
*/
Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})
