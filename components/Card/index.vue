<template>
  <article class="card">
    <div class="card__corner card__corner--top"></div>
    <div class="card__title">{{ title }}</div>
    <div class="card__body">
      <Paragraph v-for="{ id, paragraph } in paragraphs" :key="id">
        {{ paragraph }}
      </Paragraph>
    </div>
    <div class="card__footer">
      <CTA :href="href" target="_blank">VISIT</CTA>
      <span v-if="company" class="card__company">{{ company }}</span>
      <a v-if="repository" class="card__link" :href="repository" target="_blank"
        >REPOSITORY</a
      >
    </div>
    <div class="card__corner card__corner--bottom"></div>
  </article>
</template>

<script>
import Paragraph from '@/components/Paragraph'
import CTA from '@/components/CTA'

export default {
  name: 'Card',
  components: {
    Paragraph,
    CTA,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    paragraphs: {
      type: Array,
      default: () => [],
    },
    company: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
    repository: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  position: relative;
  height: fit-content;
  margin-top: 10.8rem;
  padding: var(--p-32);

  @media (max-width: 768px) {
    margin-top: var(--m-80);
    padding: var(--p-12);
  }

  &__corner {
    position: absolute;
    content: '';
    width: 12.5rem;
    height: 12.5rem;
    border-top: 1px solid var(--dark);
    border-left: 1px solid var(--dark);

    &--top {
      top: 0;
      left: 0;
    }
    &--bottom {
      right: 0;
      bottom: 0;
      transform: rotate(180deg);
    }
  }

  &__title {
    font-size: var(--fs-24);
    font-weight: 700;
    margin-bottom: var(--m-16);

    @media (max-width: 768px) {
      font-size: var(--fs-16);
      line-height: var(--lh-20);
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--m-32);

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: end;
      gap: var(--g-8);
      margin-top: var(--m-16);
    }
  }
  &__company,
  &__link {
    font-size: var(--fs-14);
    line-height: var(--lh-18);

    @media (max-width: 768px) {
      font-size: var(--fs-12);
      line-height: initial;
    }
  }

  &__link {
    position: relative;
    z-index: 1;

    &:hover {
      color: var(--green);
    }
  }
}
</style>
