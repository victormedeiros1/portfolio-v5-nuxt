<template>
  <nuxt-img class="banner" :src="src" :alt="alt" />
</template>

<script>
export default {
  name: 'Banner',
  props: {
    alt: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.banner {
  width: 180%;
  max-width: 37.5rem;
  transform: translateX(-17%) translateY(0) rotate(20deg);

  @media (max-width: 768px) {
    transform: translateX(-23%) translateY(0) rotate(20deg);
    margin-top: -1vw;
  }
}
</style>
