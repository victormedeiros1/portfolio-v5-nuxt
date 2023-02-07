<template>
  <main id="hero" class="hero">
    <div class="hero__content">
      <h1 class="hero__title" data-aos="fade-right" data-aos-delay="300">
        JOSÉ VICTOR
      </h1>
      <h2 class="hero__subtitle" data-aos="fade-right" data-aos-delay="400">
        FRONTEND DEVELOPER
      </h2>
      <div data-aos="fade-right" data-aos-delay="500">
        <CTA href="#about" aria-label="Scroll to About section">DISCOVER</CTA>
      </div>
    </div>
    <hr class="hero__divider" data-aos="zoom-in" data-aos-delay="600" />
    <div class="hero__brand">
      <Brand data-aos="fade-down" data-aos-delay="700" />
    </div>
    <div class="hero__social-medias">
      <SocialMedias vertical data-aos="fade-down" data-aos-delay="200" />
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
    top: 1rem;
    left: 1rem;
  }
}
</style>
