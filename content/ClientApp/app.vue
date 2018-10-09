<template>
  <div class="main">
    <nav-menu></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from 'components/nav-menu'
export default {
  components: {
    'nav-menu': NavMenu
  },
  data () {
    return {
    }
  }
}
</script>
