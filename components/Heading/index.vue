<template>
  <header>
    <Bars />
    <h3 class="heading"><slot /></h3>
    <Bars reverse />
  </header>
</template>

<script>
import Bars from '@/components/Bars'

export default {
  name: 'Heading',
  components: {
    Bars,
  },
}
</script>

<style lang="scss" scoped>
header {
  margin-bottom: var(--m-32);

  @media (max-width: 992px) {
    margin-bottom: var(--m-24);
  }

  .heading {
    color: var(--green);
    margin-bottom: var(--m-8);
  }
}
</style>
