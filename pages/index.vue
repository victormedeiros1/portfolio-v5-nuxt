<template>
  <div class="app-container">
    <Hero />
    <About />
    <Works />
  </div>
</template>

<script>
import Hero from '@/components/Sections/Hero'
import About from '@/components/Sections/About'
import Works from '@/components/Sections/Works'

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
