<template>
  <section id="works" class="works">
    <Heading>WORKS</Heading>
    <div class="works__content">
      <div class="banners">
        <Banner src="/images/banners/netflix.jpg" alt="Netflix Tudum" />
        <Banner
          src="/images/banners/spotify.jpg"
          alt="Spotify Top Podcasters"
        />
        <Banner
          src="/images/banners/omega.jpg"
          alt="Omega Movimento Luz Livre"
        />
      </div>
      <div class="card">
        <div class="card__corner card__corner--top"></div>
        <div class="card__title">NETFLIX TUDUM</div>
        <div class="card__body">
          <Paragraph
            >Tudum is an international event that announces several news about
            Netflix projects. In 2021, the 3rd edition took place to celebrate
            10 years of Netflix in Brazil. Almanac Tudum was launched together
            with the event, it is a book with exclusive material about the
            company's productions.</Paragraph
          >
          <Paragraph
            >Hox.rs was responsible for implementing a shorter “virtual version”
            of Almanac Tudum. Through Figma we had access to the project screens
            and started development. I worked as a front-end developer creating
            the code for most of the site's pages.
          </Paragraph>
          <Paragraph
            >As it was my first time working in a company, I couldn't believe
            the moment I saw who the project was for. When I entered Figma and
            saw that someone from Netflix was working there “on my side”, the
            feeling was of euphoria.
          </Paragraph>
          <Paragraph
            >Working together with a team of developers, learning from them and
            creating something for such a big name was wonderful.
          </Paragraph>
          <Paragraph
            >Of all the projects I've participated so far, this is without a
            doubt the one I love the most, because it was where it all started
            and where I was sure it was in this world that I wanted to work.
          </Paragraph>
        </div>
        <div class="card__footer">
          <CTA>VISIT</CTA>
          <span class="card__date">Hox.rs - 2021</span>
        </div>
        <div class="card__corner card__corner--bottom"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from '@/components/Heading'
import Banner from '@/components/Banner'
import Paragraph from '@/components/Paragraph'
import CTA from '@/components/CTA'

export default {
  name: 'Works',
  components: {
    Heading,
    Banner,
    Paragraph,
    CTA,
  },
}
</script>

<style lang="scss" scoped>
.works {
  &__content {
    display: flex;
    gap: var(--g-48);

    @media (max-width: 768px) {
      gap: var(--g-8);
    }

    .banners {
      width: 35%;
      overflow: hidden;
      position: relative;
      padding: var(--p-80) 0;

      @media (max-width: 768px) {
        padding: var(--p-48) 0;
      }
    }

    .card {
      width: 65%;
      position: relative;
      height: fit-content;
      margin-top: 9rem;
      padding: var(--p-32);

      @media (max-width: 768px) {
        margin-top: var(--m-64);
        padding: var(--p-12);
      }

      &__corner {
        position: absolute;
        content: '';
        width: 25rem;
        height: 25rem;
        border-top: 1px solid var(--dark);
        border-left: 1px solid var(--dark);

        @media (max-width: 768px) {
          width: 12.5rem;
          height: 12.5rem;
        }

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
        }
      }

      &__footer {
        display: flex;
        justify-content: space-between;
        margin-top: var(--m-32);

        @media (max-width: 768px) {
          flex-direction: column-reverse;
          align-items: center;
          gap: var(--g-8);
          margin-top: var(--m-16);
        }
      }
      &__date {
        font-size: var(--fs-14);
        line-height: var(--lh-18);
      }
    }
  }
}
</style>
