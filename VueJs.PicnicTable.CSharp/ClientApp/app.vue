<template>
  <div class="main">
    <nav-menu />
    <router-view
      id="content"
      class="main-content"
    />
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
