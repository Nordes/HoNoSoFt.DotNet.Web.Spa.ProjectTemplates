<template>
  <div class="main">
      <nav class="transparent">
          <a href="/" data-tooltip="Boosted on Picnic" class="brand">
              <img class="logo" src="static/images/logo.png" alt="VueJs Core" />
              <span class="color-white">- VueJs Core</span>
          </a>
          <div class="menu"  >
              <a href="https://www.honosoft.com">Picnic menu</a>
          </div>
      </nav>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
