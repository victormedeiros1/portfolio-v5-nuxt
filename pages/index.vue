<template>
  <div class="app-container">
    <Navbar />
    <Hero />
    <About />
    <Works />
    <Personal />
    <Skills />
    <Contact />
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Sections/Hero'
import About from '@/components/Sections/About'
import Works from '@/components/Sections/Works'
import Personal from '@/components/Sections/Personal'
import Skills from '@/components/Sections/Skills'
import Contact from '@/components/Sections/Contact'

export default {
  name: 'Index',
  components: {
    Navbar,
    Hero,
    About,
    Works,
    Personal,
    Skills,
    Contact,
  },
  mounted() {
    AOS.init({
      once: true,
      disable: 'mobile',
    })
  },
}
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  background-image: var(--bg-white);
  background-size: cover;
  background-attachment: fixed;
}
</style>
