<template>
  <nav class="dark">
    <div class="brand">
      <img
        class="logo"
        src="static/images/logo.png"
        :alt="$t('navMenu.title')"
      >
      <span
        class="color-white"
        data-tooltip="Boosted on Picnic"
        style="padding-right:1em"
      >{{ $t('navMenu.title') }}</span>
      <select
        v-model="langSelected"
        style="width: 60px; float:right; right:0px;"
      >
        <option
          v-for="(lang, idx) in langs"
          :key="idx"
          :value="lang"
          selected="lang == langSelected"
        >{{ $t(`navMenu.lang.${lang}`) }}</option>
      </select>
    </div>
    <!-- responsive-->
    <input
      id="menu"
      type="checkbox"
      class="show"
    >
    <label
      for="menu"
      class="burger button success"
    >&#8801;</label>

    <div class="menu">
      <template v-for="(route, index) in sortedRoutes">
        <router-link
          :key="index"
          :to="{ name: route.name, params: $route.params}"
          class="nav-item"
          exact-active-class="active"
        >
          <icon :icon="route.meta.icon" /><span v-t="route.meta.i18n" />
        </router-link>
      </template>
    </div>
  </nav>
</template>

<script>
import { routes } from '../router/routes'
export default {
  computed: {
    sortedRoutes: function () {
      var desiredRoutes = routes.filter(f=> f.meta !== null && f.meta !== undefined && f.meta.order !== null && !isNaN(f.meta.order))
      return desiredRoutes.sort((f, g) => f.meta.order < g.meta.order ? -1 : f.meta.order === g.meta.order ? 0 : 1)
    }
  },

  data () {
    return {
      routes,
      collapsed: true,
      langs: ['en', 'fr', 'ja'], // Could be more dynamic.
      langSelected: this.$i18n.locale // default
    }
  },

  watch: {
    langSelected: function (newVal, oldVal) {
      // Vuex could also be used instead.
      if (this.$router.params === null || this.$router.params === undefined) { this.$router.push({ path: this.$router.route, params: { lang: newVal } }) } else { this.$router.push({ path: this.$router.route, params: this.$router.lang = newVal }) }
    }
  },

  mounted () {
    setTimeout(f=> this.langSelected = this.$i18n.locale, 100) // Hack for now. 
  },

  methods: {
    toggleCollapsed: function (event) {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
