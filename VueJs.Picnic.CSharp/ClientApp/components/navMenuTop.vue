<template>
  <div class="topmenu">
    <div class="topmenu-flex">
      <img
        class="logo"
        src="static/images/logo.png"
        alt="VueJs Core"
      />
      <span class="brandTop">VueJs Core</span>
    </div>
    <span>{{$route.meta.display}}</span>
    <div class="user">[Login/Logout]</div>
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
