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
    <cookie-consent />
  </div>
</template>

<script>
import NavMenu from 'components/navMenu'
import NavMenuTop from 'components/navMenuTop'
import CookieConsent from 'components/cookieConsent'

export default {
  components: {
    'nav-menu': NavMenu,
    'cookie-consent': CookieConsent,
    'nav-menu-top': NavMenuTop
  }
}
</script>
