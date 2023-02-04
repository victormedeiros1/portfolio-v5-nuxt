<template>
  <main class="hero">
    <div class="hero__content">
      <h1 class="hero__title">JOSÉ VICTOR</h1>
      <h2 class="hero__subtitle">FRONT-END DEVELOPER</h2>
      <CTA href="#">DISCOVER</CTA>
    </div>
    <hr class="hero__divider" />
    <div class="hero__brand">
      <Brand />
    </div>
    <div class="hero__social-medias">
      <SocialMedias />
    </div>
  </main>
</template>

<script>
import Brand from '@/components/Brand'
import CTA from '@/components/CTA'
import SocialMedias from '@/components/SocialMedias'

export default {
  name: 'Hero',
  components: {
    Brand,
    CTA,
    SocialMedias,
  },
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  text-align: right;
  align-items: center;
  gap: var(--g-48);

  @media (max-width: 768px) {
    min-height: 100vh;
    flex-direction: column-reverse;
    text-align: center;
  }

  &__divider {
    height: 25rem;
    border: 1px solid var(--gray);

    @media (max-width: 768px) {
      display: none;
    }
  }
  &__title {
    max-width: 20rem;
    color: var(--dark);
    font-size: var(--fs-96);
    line-height: var(--lh-96);
    margin-bottom: var(--m-16);

    @media (max-width: 768px) {
      max-width: 12rem;
      font-size: var(--fs-64);
      line-height: var(--lh-64);
      margin: 0 auto var(--m-16) auto;
    }
  }
  &__subtitle {
    color: var(--green);
    font-size: var(--fs-32);
    margin-bottom: var(--p-32);

    @media (max-width: 768px) {
      max-width: 10rem;
      margin: 0 auto var(--m-32) auto;
    }
  }
  &__social-medias {
    position: absolute;
    bottom: 2rem;
  }
}
</style>
