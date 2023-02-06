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
          :repository="projects[projectSelected].repository"
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
          href: 'https://to-do-now.netlify.app/',
          repository: 'https://github.com/victormedeiros1/to-do-now',
          paragraphs: [
            {
              id: 0,
              paragraph:
                'This project brought me big changes. The goal was to experiment with new technologies and play with Redux in practice, as the need to manage the state of my applications in a more organized and scalable way was already knocking the door.',
            },
            {
              id: 1,
              paragraph:
                "When it came time to list what would be needed to create the application, I thought it would be cool to use some tools different from the ones I usually use to increase the range of possibilities, Vite and Stitches are some examples, it was a very interesting process, it's good to get out of the zone of comfort.",
            },
          ],
        },
        {
          id: 1,
          title: 'SOUND GLORY',
          src: '/images/banners/sound-glory.jpg',
          alt: 'Sound Glory project banner',
          href: 'https://sound-glory.netlify.app/',
          repository: 'https://github.com/victormedeiros1/sound-glory',
          paragraphs: [
            {
              id: 0,
              paragraph:
                'The idea of creating my own music player was very exciting and after a few projects I realized that I was ready to start this old idea. This was my first personal project combining TypeScript with Redux, what a rewarding experience.',
            },
            {
              id: 1,
              paragraph: `Soung Glory is special to me, while working on it I found that each project transmits a different energy. Everything I've worked on until today has always involved only screens, when I clicked on "Play" for the first time and heard the music play, I don't know how to explain it, I felt that I was progressing in my journey and producing something different, that feeling is priceless.`,
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
