<template>
  <nav class="dark">
    <div class="brand">
      <img
        class="logo"
        src="static/images/logo.png"
        alt="VueJs Core"
      >
      <span
        class="color-white"
        data-tooltip="Boosted on Picnic"
      > VueJs Core</span>
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
      <template v-for="(route, index) in routes">
        <router-link
          v-if="route.showMenu"
          :key="index"
          :to="{ name: route.name, params: $route.params}"
          class="nav-item"
          exact-active-class="active"
        >
          <icon :icon="route.icon" /><span>{{ route.display }}</span>
        </router-link>
      </template>
    </div>
  </nav>
</template>

<script>
import { routes } from '../router/routes'
export default {
  data () {
    return {
      routes,
      collapsed: true
    }
  },

  methods: {
    toggleCollapsed: function (event) {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
