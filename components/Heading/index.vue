<template>
  <header>
    <Bars />
    <h3 class="heading">{{ title }}</h3>
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
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.heading {
  color: var(--green);
  margin-bottom: var(--m-8);
}
</style>
