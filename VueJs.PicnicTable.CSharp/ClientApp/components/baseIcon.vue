<template>
  <span :class="icon" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'unknown'
    }
  }
}
</script>
