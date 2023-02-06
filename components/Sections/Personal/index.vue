<template>
  <section id="personal" class="personal">
    <Heading>PERSONAL</Heading>
    <div class="personal__content">
      <div class="banners">
        <Banner
          v-for="{ id, src, alt } in projects"
          :key="id"
          :data-ref="id"
          :src="src"
          :alt="alt"
          @click.native="projectSelected = id"
        />
      </div>
      <div class="card-wrapper">
        <Card
          :title="projects[projectSelected].title"
          :paragraphs="projects[projectSelected].paragraphs"
          :company="projects[projectSelected].company"
          :href="projects[projectSelected].href"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Heading from '@/components/Heading'
import Banner from '@/components/Banner'
import Card from '@/components/Card'

export default {
  name: 'Personal',
  components: {
    Heading,
    Banner,
    Card,
  },
  data() {
    return {
      projectSelected: 0,
      projects: [
        {
          id: 0,
          title: 'TO-DO NOW',
          src: '/images/banners/to-do-now.jpg',
          alt: 'To-do app project banner',
          company: 'Hox.rs - 2021',
          href: 'https://to-do-now.netlify.app/',
          paragraphs: [
            {
              id: 0,
              paragraph:
                "Tudum is an international event that announces several news about Netflix projects. In 2021, the 3rd edition took place to celebrate 10 years of Netflix in Brazil. Almanac Tudum was launched together with the event, it is a book with exclusive material about the company's productions.",
            },
            {
              id: 1,
              paragraph:
                "Hox.rs was responsible for implementing a shorter “virtual version” of Almanac Tudum. Through Figma we had access to the project screens and started development. I worked as a frontend developer creating the code for most of the site's pages.",
            },
            {
              id: 2,
              paragraph:
                "As it was my first time working in a company, I couldn't believe the moment I saw who the project was for. When I entered Figma and saw that someone from Netflix was working there “on my side”, the feeling was of euphoria.",
            },
            {
              id: 3,
              paragraph:
                'Working together with a team of developers, learning from them and creating something for such a big name was wonderful.',
            },
            {
              id: 4,
              paragraph:
                "Of all the projects I've participated so far, this is without a doubt the one I love the most, because it was where it all started and where I was sure it was in this world that I wanted to work.",
            },
          ],
        },
        {
          id: 1,
          title: 'SOUND GLORY',
          src: '/images/banners/sound-glory.jpg',
          alt: 'Sound Glory project banner',
          company: 'Hox.rs - 2021',
          href: 'https://sound-glory.netlify.app/',
          paragraphs: [
            {
              id: 0,
              paragraph:
                'A project to celebrate the content creators who managed to reach the Top 10 Podcasts in Brazil.',
            },
            {
              id: 1,
              paragraph:
                'I participated in two stages in this project, first in the development of the page where I built much of the body of the site, we accessed the data from an endpoint and made the listing showing its information.',
            },
            {
              id: 2,
              paragraph:
                "The second stage was more interesting and challenging, I had never worked with email marketing and it seemed to me to be something very simple, until I discovered the limitations at the code level, for example, the structure of the email had to be made only with tables, the css all inline , some css attributes and html tags didn't work, the images would have to be placed in the cloud for display and several other limitations that I discovered over time.",
            },
            {
              id: 3,
              paragraph:
                'Studying further I found that each email service can interpret its code in a different way, a css attribute could work in Gmail but not in Outlook. So it was necessary to do several tests.',
            },
            {
              id: 4,
              paragraph:
                'Again I was shocked to learn that the project was for none other than Spotify and even more shocked when I went to implement the emails and realized that they would be sent to podcasts that I listened to daily, to the biggest in the country. It was a mixture of endless happiness and fear, there was a big responsibility there, I never did so many tests in my life until I was sure that everything was perfect hahahaha.',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.personal {
  &__content {
    display: flex;
    gap: var(--g-48);

    @media (max-width: 768px) {
      gap: var(--g-8);
    }

    .banners {
      cursor: pointer;
      width: 40%;
      overflow: hidden;
      position: relative;
      padding: var(--p-96) 0;

      @media (max-width: 768px) {
        padding: var(--g-48) 0;
      }
    }
    .card-wrapper {
      width: 60%;
    }
  }
}
</style>
