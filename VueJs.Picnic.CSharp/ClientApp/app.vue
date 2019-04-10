<template>
  <div class="main">
    <nav-menu-top />

    <div class="container"> 
      <nav-menu />
      <router-view
        id="content"
        class="main-content"
      />
    </div>

    <!-- If you require to have a consent for cookies, it's available here. -->
    <!-- <cookie-consent /> -->
  </div>
</template>

<script>
import NavMenu from 'components/navMenu'
import CookieConsent from 'components/cookieConsent'
import NavMenuTop from 'components/navMenuTop'

export default {
  components: {
    'nav-menu': NavMenu,
    'nav-menu-top': NavMenuTop
    // If you require to have a consent for cookies, it's available here.
    // 'cookie-consent': CookieConsent
  },
  data () {
    return {
    }
  }
}
</script>
