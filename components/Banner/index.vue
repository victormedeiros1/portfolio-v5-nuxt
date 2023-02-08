<template>
  <nuxt-img
    class="banner"
    :src="src"
    :alt="alt"
    sizes="xs:500px md:620px lg:800px"
  />
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
    srcMobile: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.banner {
  width: 180%;
  height: initial;
  max-width: 37.5rem;
  transform: translateX(-11%) translateY(0) rotate(20deg);

  @media (max-width: 768px) {
    width: 150%;
    transform: translateX(-17%) translateY(0) rotate(20deg);
    margin-top: -1vw;
  }
}
</style>
