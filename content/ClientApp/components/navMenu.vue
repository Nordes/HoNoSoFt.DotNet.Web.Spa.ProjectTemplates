<template>
  <nav class="dark">
      <div class="brand">
          <!-- <a href="/" data-tooltip="Boosted on Picnic"> -->
              <img class="logo" src="static/images/logo.png" alt="VueJs Core" />
              <span class="color-white" data-tooltip="Boosted on Picnic">- VueJs Core</span>
          <!-- </a> -->
      </div>
      <!-- responsive-->
      <input id="menu" type="checkbox" class="show">
      <label for="menu" class="burger button success">&#8801;</label>
      
      <div class="menu">
        <template v-for="(route, index) in routes">
          <router-link v-bind:key="index" :to="route.path" class="nav-item" exact-active-class="active">
            <icon :icon="route.icon" class="mr-2" /><span>{{ route.display }}</span>
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
