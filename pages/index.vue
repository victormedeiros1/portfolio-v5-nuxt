<template>
  <div class="app-container">
    <Hero />
  </div>
</template>

<script>
import Hero from './sections/Hero'

export default {
  name: 'Index',
  components: {
    Hero,
  },
}
</script>

<style lang="scss" scoped>
.app-container {
  background-image: var(--bg-white);
  background-size: cover;
  background-attachment: fixed;
}
</style>
