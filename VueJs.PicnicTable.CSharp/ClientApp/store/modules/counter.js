/**
 * Example of a counter (usual demo... you know the drill)
 */

const COUNTER_SET_HIT = 'COUNTER_SET_HIT'

export default {
  namespaced: true,

  state: {
    hit: 0
  },

  mutations: {
    [COUNTER_SET_HIT] (state, obj) {
      state.hit = obj.hit
    }
  },

  actions: {
    setHit ({ commit }, obj) {
      commit(COUNTER_SET_HIT, obj)
    }
  },

  getters: {
  },

  modules: {
    // Declare sub-modules
  }
}
