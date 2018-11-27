<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'unknown'
    },
    spin: {
      type: Boolean,
      default: false
    }
  },

  render: function (createElement) {
    if (this.spin) {
      return createElement('i', { 
        attrs: {
          class: `${this.icon} animate-spin`
          } 
        })
    }

    return createElement('span', { 
      attrs: {
        class: this.icon
        } 
      })
  }
}
</script>
