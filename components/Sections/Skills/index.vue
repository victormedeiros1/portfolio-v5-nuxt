<template>
  <section id="skills" class="skills" data-aos="zoom-in" data-aos-delay="400">
    <nuxt-img
      class="skills__art"
      src="/images/skills.webp"
      alt="Diagram with my skills"
      sizes="xs:380px, sm:600px, md:730px, lg:970px"
      width="970px"
      height="808px"
      preload
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
    max-width: 60.625rem;
  }
}
</style>
