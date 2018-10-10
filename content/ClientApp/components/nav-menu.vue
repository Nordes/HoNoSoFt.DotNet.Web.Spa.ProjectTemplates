<template>
    <div>
        <nav class="transparent">
            <div class="brand">
                <a href="/" data-tooltip="Boosted on Picnic">
                    <img class="logo" src="static/images/logo.png" alt="VueJs Core" />
                    <span class="color-white">- VueJs Core</span>
                </a>
            </div>
            <div class="menu flex">
              <template v-for="(route, index) in routes">
                <router-link v-bind:key="index"  :to="route.path" class="nav-item" exact-active-class="active">
                  <icon :icon="route.icon" class="mr-2" /><span>{{ route.display }}</span>
                </router-link>
              </template>
            </div>
        </nav>
    </div>
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
