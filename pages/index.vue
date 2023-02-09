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
import ogImage from '~/static/images/ogImage.webp'

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
  head: {
    title: 'José Victor | Frontend Developer',
    meta: [
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'José Victor | Frontend Developer',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        ccontent: 'https://www.movimentoluzlivre.com.br' + ogImage,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Hi, I’m José Victor, frontend developer. I started programming in 2017. I want to be a great developer and I am every day studying and striving more and more to become one.',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.josevictor.dev/',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hi, I’m José Victor, frontend developer. I started programming in 2017. I want to be a great developer and I am every day studying and striving more and more to become one.',
      },
      {
        keywords: 'portfolio, frontend',
      },
      // ==============================================================================
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        property: 'og:title',
        content: 'José Victor | Frontend Developer',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.josevictor.dev/',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.josevictor.dev/' + ogImage,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Hi, I’m José Victor, frontend developer. I started programming in 2017. I want to be a great developer and I am every day studying and striving more and more to become one.',
      },
    ],
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
