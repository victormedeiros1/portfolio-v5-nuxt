<template>
  <footer id="contact" class="contact">
    <h3 class="contact__title" data-aos="fade-right" data-aos-delay="200">
      I'M OPEN TO <br />NEW OPPORTUNITIES
    </h3>
    <h4 class="contact__subtitle" data-aos="fade-left" data-aos-delay="300">
      LET’S BUILD SOMETHING TOGETHER?
    </h4>
    <CTA
      href="mailto:josevictordev@gmail.com"
      aria-label="Send me a email"
      data-aos="fade-left"
      data-aos-delay="400"
      >SAY HELLO</CTA
    >
    <div class="contact__social-medias">
      <SocialMedias data-aos="fade-right" data-aos-delay="500" />
    </div>
    <div class="contact__copyright">Copyright © 2023 | José Victor</div>
  </footer>
</template>

<script>
import CTA from '@/components/CTA'
import SocialMedias from '@/components/SocialMedias'

export default {
  name: 'Contact',
  components: {
    CTA,
    SocialMedias,
  },
}
</script>

<style lang="scss" scoped>
.contact {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__title {
    font-family: 'Poppins', sans-serif;
    font-size: var(--fs-64);
    line-height: var(--fs-64);
    font-weight: 900;
    margin-bottom: var(--m-16);

    @media (max-width: 768px) {
      font-size: var(--fs-24);
      line-height: var(--fs-24);
      margin-bottom: var(--m-8);
    }
  }
  &__subtitle {
    color: var(--gray);
    font-size: var(--fs-24);
    font-weight: 400;
    margin-bottom: var(--m-16);

    @media (max-width: 768px) {
      font-size: var(--fs-12);
      margin-bottom: var(--m-24);
    }
  }
  &__social-medias {
    margin-top: var(--m-80);
  }
  &__copyright {
    font-size: var(--fs-14);
    position: absolute;
    bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: var(--fs-12);
    }
  }
}
</style>
