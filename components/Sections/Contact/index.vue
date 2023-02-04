<template>
  <section class="contact">
    <h3 class="contact__title">I'M OPEN TO <br />NEW OPPORTUNITIES</h3>
    <h4 class="contact__subtitle">LET’S BUILD SOMETHING TOGETHER?</h4>
    <CTA>SAY HELLO</CTA>
    <div class="contact__social-medias">
      <SocialMedias />
    </div>
  </section>
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
}
</style>
