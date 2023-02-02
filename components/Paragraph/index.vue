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
  margin-bottom: var(--m-16);

  @media (max-width: 768px) {
    font-size: var(--fs-10);
    line-height: var(--fs-14);
  }
}
</style>
