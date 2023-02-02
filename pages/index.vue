<template>
  <div class="app-container">
    <Hero />
    <About />
    <Works />
  </div>
</template>

<script>
import Hero from './sections/Hero'
import About from './sections/About'
import Works from './sections/Works'

export default {
  name: 'Index',
  components: {
    Hero,
    About,
    Works,
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
