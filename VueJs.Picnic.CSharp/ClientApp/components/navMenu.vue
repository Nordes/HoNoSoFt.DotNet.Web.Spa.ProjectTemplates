<template>
  <nav :class="'dark' + collapsedClass">
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
          v-if="route.meta && route.meta.showMenu && route.meta.showMenu === true"
          :key="index"
          :to="{ name: route.name, params: $route.params}"
          class="nav-item"
          exact-active-class="active"
          :title="route.meta.display"
        >
          <icon :icon="route.meta.icon" /><span :class="collapsedClass">{{ route.meta.display }}</span>
        </router-link>
      </template>
      
      <div 
        @click="toggleCollapsed"
        class="pseudo button collapseToggle"
        title="Collapse sidebar">
        <h2 v-if="!collapsed">«</h2>
        <h2 v-if="collapsed">»</h2>
      </div>
    </div>
  </nav>
</template>

<script>
import { routes } from '../router/routes'
export default {
  computed: {
    collapsedClass: function () {
      return this.collapsed === true ? ' collapsed' : ''
    }
  },

  data () {
    return {
      routes,
      collapsed: false
    }
  },

  methods: {
    toggleCollapsed: function (event) {
      this.collapsed = !this.collapsed
    }
  }
}
</script>
