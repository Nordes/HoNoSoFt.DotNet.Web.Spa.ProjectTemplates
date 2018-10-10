<template>
  <div>
    <page-title :title="title"/>
    Hello {{msg}}!
  </div>
</template>

<script>
import PageTitle from 'components/page-title'

export default {
  components: {
    "page-title": PageTitle
  },
  data () {
    return {
      title: "Hello World!",
      msg: 'world'
    }
  },
  created () {
  }
}
</script>
