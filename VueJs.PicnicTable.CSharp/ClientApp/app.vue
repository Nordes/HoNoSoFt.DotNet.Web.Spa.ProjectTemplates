<template>
  <div class="main">
    <nav-menu />
    <router-view
      id="content"
      class="main-content"
    />
    <cookie-consent />
  </div>
</template>

<script>
import NavMenu from 'components/navMenu'
import CookieConsent from 'components/cookieConsent'

export default {
  components: {
    'nav-menu': NavMenu,
    'cookie-consent': CookieConsent
  }
}
</script>
