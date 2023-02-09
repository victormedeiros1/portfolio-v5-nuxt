<template>
  <nav class="navbar" data-aos="fade-left" data-aos-delay="800">
    <Bars small dark end />
    <ul class="navbar__list">
      <li class="navbar__item">
        <NuxtLink to="#hero">HERO</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink to="#about">ABOUT</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink to="#works">WORKS</NuxtLink>
      </li>
      <li class="navbar__item">
        <button class="navbar__theme" @click="toggleTheme">THEME</button>
      </li>
      <li class="navbar__item">
        <NuxtLink to="#projects">PROJECTS</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink to="#skills">SKILLS</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink to="#contact">CONTACT</NuxtLink>
      </li>
    </ul>
    <Bars small dark reverse end />
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleTheme() {
      const html = document.querySelector('html')
      html.classList.toggle('dark-mode')
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--g-4);
    list-style: none;
    margin: var(--m-8) 0;
  }
  &__item {
    font-size: var(--fs-14);
    width: fit-content;

    @media (max-width: 768px) {
      font-size: var(--fs-12);
    }

    button {
      background: none;
      border: none;
    }

    a,
    button {
      font-weight: 600;
      transition: 0.1s;
      text-decoration: none;
      text-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

      &:hover {
        transform: translateX(-0.25rem);
        color: var(--green);
      }
    }
  }
}
</style>
