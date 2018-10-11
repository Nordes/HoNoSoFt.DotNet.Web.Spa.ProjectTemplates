<template>
  <div class="main">
    <section class="flex three-1000 three-1200 four-1400 main-section">
      <nav-menu class="full third-1000 third-1200 fourth-1400" />
      <router-view id="content" class="full two-third-1000 two-third-1200 three-fourth-1400" />
    </section>
  </div>
</template>

<style scoped>
  .main-section { min-height:100%; }
</style>

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
