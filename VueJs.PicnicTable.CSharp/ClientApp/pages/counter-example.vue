<template>
  <div>
    <page-title :title="$t('counter.title')" />

    <p>{{ $t('counter.welcome') }}</p>

    <p>{{ $t('counter.currentCount') }} <strong>{{ $tc('counter.count', currentCount, { count: currentCount }) }}</strong></p>
    <p>{{ $t('counter.autoCount') }} <strong>{{ $tc('counter.count', autoCount, { count: autoCount }) }}</strong></p>

    <button @click="incrementCounter()">{{ $t('counter.btnIncrement') }}</button>
    <button @click="resetCounter()">{{ $t('counter.btnReset') }}</button>
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
