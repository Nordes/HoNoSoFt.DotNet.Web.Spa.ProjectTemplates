import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import axios from 'axios'
import router from './router/index'
import store from './store'
import { sync } from 'vuex-router-sync'
import VeeValidate from 'vee-validate'

import App from './App.vue'
require("./assets/custom_picnic.scss")
// require('./assets/site.css') // <== if you want to use your own css or scss.

// Mode details on: https://vuejs.org/v2/guide/components-registration.html
const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  true,
  // The regular expression used to match base component filenames
  /base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Strip the leading `./` and extension from the filename
      fileName.replace(/base/, '').replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

Vue.prototype.$http = axios
Vue.use(VeeValidate);

sync(store, router)

new Vue({
  el: '#app',
  store,
  router,
  ...App
})