<template>
  <div class="topmenu">
    <div class="topmenu-flex">
      <img
        class="logo"
        src="static/images/logo.png"
        alt="ITS Core"
      /> <span class="brandTop">VueJs Core</span>
      <select
        v-model="langSelected"
        class="lang"
      >
        <option
          v-for="(lang, idx) in langs"
          :key="idx"
          :value="lang"
          selected
        >{{ lang }}</option>
      </select>

    </div>
    <span>{{$t(route_i18n)}}</span>
    <div class="user">[Login/Logout]</div>
  </div>
</template>

<script>
export default {
  watch:{
    $route (to, from){
      this.route_i18n = to.meta.i18n
    },
    
    langSelected: function (newVal, oldVal) {
      // Vuex could also be used instead.
      if (this.$router.params === null || this.$router.params === undefined) {
        this.$router.push({ path: this.$router.route, params: { lang: newVal } }) 
      } else { 
        this.$router.push({ path: this.$router.route, params: this.$router.lang = newVal }) 
      }
    }
  },
  data () {
    return {
      langs: ['en', 'ja'], // Could be more dynamic.
      langSelected: 'en', // default
      route_i18n: ''
    }
  }
}
</script>
