import Vue from 'vue'
import Vuex from 'vuex'
import I18n from './modules/i18n'
import Counter from './modules/counter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    counter: Counter,
    i18n: I18n
  }
})
