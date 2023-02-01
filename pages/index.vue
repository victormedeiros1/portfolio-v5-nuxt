<template>
  <div class="app-container">
    <Hero />
    <About />
  </div>
</template>

<script>
import Hero from './sections/Hero'
import About from './sections/About'

export default {
  name: 'Index',
  components: {
    Hero,
    About,
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
