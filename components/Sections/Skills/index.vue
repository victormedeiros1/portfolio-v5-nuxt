<template>
  <section id="skills" class="skills">
    <img
      class="skills__art"
      src="/images/skills.webp"
      alt="Diagram with my skills"
      width="950px"
      height="788px"
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
