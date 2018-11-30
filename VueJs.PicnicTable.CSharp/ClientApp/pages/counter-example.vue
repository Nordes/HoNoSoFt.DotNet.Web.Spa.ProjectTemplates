<template>
  <div>
    <page-title :title="$t('counter.title')" />

    <p>{{ $t('counter.welcome') }}</p>

    <p>{{ $t('counter.currentCount') }} <strong>{{ $tc('counter.count', currentHitCount, { count: currentHitCount }) }}</strong></p>
    <p>{{ $t('counter.autoCount') }} <strong>{{ $tc('counter.count', autoCount, { count: autoCount }) }}</strong></p>

    <button @click="incrementHitCounter()">{{ $t('counter.btnIncrement') }}</button>
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
      currentHitCount: state => state.counter.hit
    })
  },

  created () {
    setInterval(() => {
      this.autoCount += 1
    }, 1000)
  },

  methods: {
    ...mapActions(['counter/setHit']),

    incrementHitCounter: function () {
      var hitCount = this.currentHitCount + 1
      this['counter/setHit']({ hit: hitCount })
    },

    resetCounter: function () {
      this['counter/setHit']({ hit: 0 })
      this.autoCount = 0
    }
  }
}
</script>
