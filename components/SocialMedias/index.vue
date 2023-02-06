<template>
  <div :class="`social-medias ${vertical && 'social-medias--vertical'}`">
    <a
      href="https://www.instagram.com/victor_mdrss/"
      aria-label="Visit my Instagram profile"
      rel="author"
      target="_blank"
    >
      <Instagram />
    </a>
    <div v-if="!vertical" class="social-medias__divider"></div>
    <a
      href="https://www.linkedin.com/in/josevictordev/"
      aria-label="Visit my professional profile on LinkedIn"
      rel="author"
      target="_blank"
    >
      <LinkedIn />
    </a>
    <div v-if="!vertical" class="social-medias__divider"></div>
    <a
      href="https://github.com/victormedeiros1"
      aria-label="Visit my GitHub profile to see more projects"
      rel="author"
      target="_blank"
    >
      <GitHub />
    </a>
    <div v-if="!vertical" class="social-medias__divider"></div>
    <a
      href="https://www.figma.com/@victormedeiros1"
      aria-label="Visit my Figma profile to see interfaces of my projects"
      rel="author"
      target="_blank"
    >
      <Figma />
    </a>
  </div>
</template>

<script>
import Instagram from '@/components/Icons/Instagram.vue'
import LinkedIn from '@/components/Icons/LinkedIn.vue'
import GitHub from '@/components/Icons/GitHub.vue'
import Figma from '@/components/Icons/Figma.vue'

export default {
  name: 'SocialMedias',
  components: {
    Instagram,
    LinkedIn,
    GitHub,
    Figma,
  },
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.social-medias {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--g-16);

  &--vertical {
    flex-direction: column;
  }

  &__divider {
    width: 0.25rem;
    height: 0.25rem;
    background-color: var(--dark);
    border-radius: 50%;
  }
}
</style>
