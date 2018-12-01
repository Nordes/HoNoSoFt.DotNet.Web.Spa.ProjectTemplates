<template>
  <div class="main">
    <nav-menu />
    <router-view
      id="content"
      class="main-content"
    />

    <!-- If you require to have a consent for cookies, it's available here. -->
    <!-- <cookie-consent /> -->
  </div>
</template>

<script>
import NavMenu from 'components/navMenu'
import CookieConsent from 'components/cookieConsent'

export default {
  components: {
    'nav-menu': NavMenu
    // If you require to have a consent for cookies, it's available here.
    // 'cookie-consent': CookieConsent
  },
  data () {
    return {
    }
  }
}
</script>
