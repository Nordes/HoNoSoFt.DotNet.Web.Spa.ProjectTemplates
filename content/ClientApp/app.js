import Vue from 'vue'
import axios from 'axios'
import router from './router/index'

import App from './App.vue'
// require("picnic/releases/picnic.min.css")
require("picnic/src/picnic.scss")
require('./assets/site.css')


Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})