<template>
  <section id="about" class="about">
    <div class="about__content">
      <Heading data-aos="fade-right" data-aos-delay="200">ABOUT</Heading>
      <h4 class="about__subtitle" data-aos="fade-right" data-aos-delay="300">
        NICE TO MEET YOU!
      </h4>
      <Paragraph data-aos="fade-right" data-aos-delay="400"
        >I started programming in 2017 and graduated as a Computer Technician at
        the IFRN. I liked to program, it was an interesting challenge, but I
        took a real rush when I got to the web development part.</Paragraph
      >
      <Paragraph data-aos="fade-right" data-aos-delay="500"
        >When I got to know the frontend and saw the infinite sea of
        possibilities, I fell in love, I always liked the visual and creative
        side of things, so I started to interact with the community, working as
        a team, meeting and exchanging knowledge with new people.
        essential.</Paragraph
      >
      <Paragraph data-aos="fade-right" data-aos-delay="600"
        >Today, I'm studying Information Systems at UFRN. I want to be a great
        developer and I am every day studying and striving more and more to
        become one.</Paragraph
      >
    </div>
    <div class="about__photo" data-aos="fade-left" data-aos-delay="700">
      <nuxt-img
        class="banner"
        src="/images/photo.webp"
        alt="José Victor photo"
        sizes="xs:300px, sm:500px"
        width="500px"
        height="650px"
        preload
      />
    </div>
  </section>
</template>

<script>
import Heading from '@/components/Heading'
import Paragraph from '@/components/Paragraph'

export default {
  name: 'About',
  components: {
    Heading,
    Paragraph,
  },
}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  align-items: center;
  gap: var(--g-48);

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 0;
  }

  &__subtitle {
    font-size: var(--fs-24);
    font-weight: 700;
    margin-bottom: var(--m-16);

    @media (max-width: 768px) {
      font-size: var(--fs-16);
    }
  }
  &__content {
    width: 100%;
    max-width: 37.5rem;

    @media (max-width: 768px) {
      min-width: initial;
    }
  }
  &__photo {
    img {
      max-width: 31.25rem;
      min-width: 25rem;
      width: 100%;
      height: initial;

      @media (max-width: 768px) {
        min-width: initial;
      }
    }
  }
}
</style>
