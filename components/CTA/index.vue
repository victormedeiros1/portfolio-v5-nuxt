<template>
  <a class="CTA" :href="href" :arial-label="ariaLabel" :target="target"
    ><slot
  /></a>
</template>

<script>
export default {
  name: 'CTA',
  props: {
    href: {
      type: String,
      default: '#',
    },
    target: {
      type: String,
      default: '_self',
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.CTA {
  position: relative;
  z-index: 1;
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

  @media (max-width: 768px) {
    font-size: var(--fs-14);
    line-height: initial;
    border: 1px solid var(--dark);
    padding: var(--p-10) var(--p-32);
  }

  &:hover {
    background-color: var(--dark);
    color: var(--light);
    border-radius: 100px 0px;
  }
}
</style>
