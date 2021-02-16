import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';


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
