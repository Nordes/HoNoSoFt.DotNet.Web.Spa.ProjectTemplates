<template>
  <div class="main">
    <nav-menu></nav-menu>
    <router-view id="content"></router-view>
  </div>
</template>

<script>
import NavMenu from 'components/navMenu'
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
