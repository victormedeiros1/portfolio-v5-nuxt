<template>
  <p class="paragraph"><slot /></p>
</template>

<script>
export default {
  name: 'Paragraph',
}
</script>

<style lang="scss" scoped>
.paragraph {
  font-size: var(--fs-14);
  line-height: var(--fs-18);

  @media (max-wight: 768px) {
    font-size: var(--fs-12);
  }
}
</style>
