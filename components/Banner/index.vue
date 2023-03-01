<template>
  <nuxt-img
    class="banner"
    :src="src"
    :alt="alt"
    sizes="xs: 230px, sm:370px, md:450px, lg:620px"
    width="800px"
    height="200px"
    preload
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
  },
}
</script>

<style lang="scss" scoped>
.banner {
  width: 180%;
  height: initial;
  max-width: 37.5rem;
  transform: translateX(-11%) translateY(0) rotate(20deg);
  transition: 0.3s;

  &:hover {
    transform: translateX(-12%) translateY(0) rotate(20deg);
  }

  @media (max-width: 768px) {
    width: 150%;
    transform: translateX(-17%) translateY(0) rotate(20deg);
    margin-top: -1vw;
  }
}
</style>
