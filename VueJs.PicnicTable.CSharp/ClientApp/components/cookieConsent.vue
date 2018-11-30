<template>
  <div id="cookieConsent" :class="{ hideConsent: !showConsent}">
    <div id="closeCookieConsent" @click="toggleContent">x</div>
    <div class="flex one text-center">
      <span>This website is using cookies.</span>
      <span><a href="#" class="button" style="width:400px" target="_blank">More details can be found here</a></span>
      <span><a @click="toggleContent" style="width:400px" class="button success">I accept</a></span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var data = localStorage.getItem('store.cookieConsent');

    return {
      showConsent: !data
    }
  },

  methods: {
    toggleContent: function () {
      this.showConsent = !this.showConsent
      if (!this.showConsent) {
        localStorage.setItem("store.cookieConsent", "true") // Change this into the store.
      }
    }
  }
}
</script>

<style scoped>
/*Cookie Consent Begin*/
#cookieConsent {
    background-color: rgba(20,20,20,0.8);
    min-height: 46px;
    font-size: 14px;
    color: #ddd;
    font-weight: bold;
    padding: 20px 0 120px 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    visibility: visible;
    opacity: 1;
    transition: 2s;
}

#cookieConsent.hideConsent {
  visibility: hidden;
  opacity: 0;
  top: -140px;
  transition: top 2s, visibility 2s, opacity 1.5s ease-out;
}

#closeCookieConsent {
    position: absolute;
    right: 10px; 
    top: 2px;
}

#closeCookieConsent:hover {
    color: #FFF;
}
/*Cookie Consent End*/
</style>
