<template>
  <nav class="dark">
      <div class="brand">
          <!-- <a href="/" data-tooltip="Boosted on Picnic"> -->
              <img class="logo" src="/static/images/logo.png" alt="VueJs Core" />
              <span class="color-white" data-tooltip="Boosted on Picnic">- VueJs Core</span>
          <!-- </a> -->
      </div>
      <!-- responsive-->
      <input id="menu" type="checkbox" class="show">
      <label for="menu" class="burger button success">&#8801;</label>
      
      <div class="menu">
        <template v-for="(route, index) in routes">
          <router-link v-bind:key="index" :to="{ name: route.name, params: $route.params}" class="nav-item" exact-active-class="active">
            <icon :icon="route.icon" /><span>{{ route.display }}</span>
          </router-link>
        </template>
      </div>
      <div>
        <select v-model="langSelected">
          <option v-for="(lang, idx) in langs" :value="lang" :key="idx" selected>{{lang}}</option>
        </select>
      </div>
  </nav>
</template>

<script>
    import { routes } from '../router/routes'
    export default {
      watch: {
        langSelected: function (newVal, oldVal) {
          // Vuex could also be used instead.
          if (this.$router.params === null || this.$router.params === undefined)
            this.$router.push({path: this.$router.route, params : { lang: newVal} });
          else 
            this.$router.push({path: this.$router.route, params : this.$router.lang = newVal });
        }
      },
      data () {
        return {
          routes,
          collapsed: true,
          langs: ['en', 'fr','ja'],
          langSelected: 'en' // default
        }
      },

      methods: {
        toggleCollapsed: function (event) {
          this.collapsed = !this.collapsed
        }
      }
    }
</script>
