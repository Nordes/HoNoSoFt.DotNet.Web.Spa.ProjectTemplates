<template>
  <div>
    <page-title title="Counter" />

    <p>This is a simple example of an VueJs page component.</p>

    <p>Current count (Vuex): <strong>{{ currentCount }}</strong></p>
    <p>Auto count: <strong>{{ autoCount }}</strong></p>

    <button @click="incrementCounter()">Increment</button>
    <button @click="resetCounter()">Reset</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      autoCount: 0
    }
  },

  computed: {
    ...mapState({
      currentCount: state => state.counter
    })
  },

  created () {
    setInterval(() => {
      this.autoCount += 1
    }, 1000)
  },

  methods: {
    ...mapActions(['setCounter']),

    incrementCounter: function () {
      var counter = this.currentCount + 1
      this.setCounter({ counter: counter })
    },

    resetCounter: function () {
      this.setCounter({ counter: 0 })
      this.autoCount = 0
    }
  }
}
</script>
