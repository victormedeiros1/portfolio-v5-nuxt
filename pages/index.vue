<template>
  <div class="app-container">
    <Hero />
    <About />
    <Works />
    <Skills />
  </div>
</template>

<script>
import Hero from '@/components/Sections/Hero'
import About from '@/components/Sections/About'
import Works from '@/components/Sections/Works'
import Skills from '@/components/Sections/Skills'

export default {
  name: 'Index',
  components: {
    Hero,
    About,
    Works,
    Skills,
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
