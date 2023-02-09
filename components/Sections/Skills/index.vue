<template>
  <section id="skills" class="skills">
    <nuxt-img
      class="skills__art"
      src="/images/skills.webp"
      alt="Diagram with my skills"
      sizes="xs:600px sm:720px md:970px"
      width="970px"
      height="808px"
    />
  </section>
</template>

<script>
export default {
  name: 'Skills',
}
</script>

<style lang="scss" scoped>
.skills {
  text-align: center;

  &__art {
    width: 100%;
    height: initial;
    max-width: 59.375rem;
  }
}
</style>
