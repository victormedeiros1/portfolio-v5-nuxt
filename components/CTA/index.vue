<template>
  <a class="CTA" :href="href">DISCOVER</a>
</template>

<script>
export default {
  name: 'CTA',
  props: {
    href: {
      type: String,
      default: '#',
    },
  },
}
</script>

<style lang="scss" scoped>
.CTA {
  width: fit-content;
  display: inline-block;
  color: var(--dark);
  font-size: var(--fs-20);
  line-height: var(--lh-14);
  font-weight: 700;
  text-decoration: none;
  border: 2px solid var(--dark);
  border-radius: 0px 100px;
  transition: 0.3s;
  padding: var(--p-16) var(--p-64);

  &:hover {
    background-color: var(--dark);
    color: var(--light);
    border-radius: 100px 0px;
  }
}
</style>
