/**
 * Module for Vuex coupled with vue-router in order to have the following behavior when landing on a page.
 *
 * Behavior:
 *    1. http://mysite.com/my-page
 *       > This will use your last session language or the default. Whichever come first.
 *    2. http://mysite.com/en/my-page
 *       > This will set your current (and next interaction or session) to english as your new default
 *    3. http://mysite.com/ja/my-page
 *       > As precedent, however if 'ja' is not the site default, when you land on (1), it will redirect you to
 *       > http://mysite.com/ja/my-page
 */

const I18N_INIT = 'I18N_INIT'
const I18N_SET = 'I18N_SET'
const I18N_SAVE_STORAGE = 'I18N_SAVE_STORAGE'

// Module example. This is also based on the official documentation at https://vuex.vuejs.org/guide/modules.html
export default {
  namespaced: true,

  state: {
    lang: null // Set upon the first request
  },

  mutations: {
    [I18N_SAVE_STORAGE]: function (state) {
      localStorage.setItem('store.i18n', JSON.stringify(state))
    },

    [I18N_INIT]: function (state, defaultLang) {
      // Check if the ID exists
      if (localStorage.getItem('store.i18n')) {
        // Replace the state object with the stored item
        Object.assign(state, JSON.parse(localStorage.getItem('store.i18n')))
      } else {
        if (state.lang === null) {
          state.lang = defaultLang
        }
      }
    },

    [I18N_SET]: function (state, lang) {
      state.lang = lang
    }
  },

  actions: {
    init (state, obj) {
      state.commit(I18N_INIT, obj.lang)
      state.commit(I18N_SAVE_STORAGE)
    },

    changeLocale ({ commit }, obj) {
      commit(I18N_SET, obj.lang)
      commit(I18N_SAVE_STORAGE)
    }
  },

  getters: {
  },

  modules: {
    // Declare sub-modules
  }
}
