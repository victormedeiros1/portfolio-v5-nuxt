<template>
  <div
    :class="`bars ${green && 'bars--green'} ${small && 'bars--small'} ${
      reverse && 'bars--reverse'
    } ${end && 'bars--end'}`"
  >
    <div :class="`bar bar--small ${dark && 'bar--dark'}`"></div>
    <div :class="`bar bar--medium ${dark && 'bar--dark'}`"></div>
    <div :class="`bar bar--large ${dark && 'bar--dark'}`"></div>
  </div>
</template>

<script>
export default {
  name: 'Bars',
  props: {
    green: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    end: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.bars {
  width: 9rem;
  display: flex;
  flex-direction: column;
  gap: var(--g-8);

  &--small {
    width: 1.5rem;
    gap: var(--g-4);
  }
  &--reverse {
    flex-direction: column-reverse;
  }

  &--end {
    align-items: end;
  }
  .bar {
    background-color: var(--green);
    height: 0.125rem;

    &--dark {
      background-color: var(--dark);
    }
    &--small {
      width: 33%;
    }
    &--medium {
      width: 66%;
    }
    &--large {
      width: 100%;
    }
  }
}
</style>
