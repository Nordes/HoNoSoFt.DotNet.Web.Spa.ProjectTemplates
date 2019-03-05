import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import axios from 'axios'
import router from './router/index'
import store from './store'
import { sync } from 'vuex-router-sync'
import VeeValidate from 'vee-validate'
import { i18n, loadLanguageAsync } from './_i18n/setup'
import App from './app.vue'
require('./assets/custom_picnic.scss')
require('./assets/site.scss')

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
Vue.use(VeeValidate)
var _loadLanguageAsync = loadLanguageAsync

router.beforeEach((to, from, next) => {
  let lang = to.params.lang
  let thatStore = store

  if (lang === null || lang === undefined) {
    // console.debug(`Set default language to "${store.state.i18n.lang}" from the local storage`)
    // Usually the language is set by default during the init.
    lang = store.state.i18n.lang === null ? i18n.locale : store.state.i18n.lang // default
  }

  _loadLanguageAsync(lang)
    .then(() => {
      // Save the new value if necessary
      if (thatStore.state.i18n.lang !== lang) {
        thatStore.dispatch('i18n/changeLocale', { lang })
      }
    })
    .then(() => next())
    .catch(err => {
      console.log('Unknown language : ' + err)
      next('/404')
    })
})

store.dispatch('i18n/init', { lang: i18n.locale })

sync(store, router)

new Vue({ // eslint-disable-line
  el: '#app',
  store,
  i18n,
  router,
  ...App
})
