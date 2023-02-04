<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <Bars small dark end />
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
        <NuxtLink to="#projects">PROJECTS</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink to="">THEME</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink to="#skills">SKILLS</NuxtLink>
      </li>
      <li class="navbar__item">
        <NuxtLink to="#contact">CONTACT</NuxtLink>
      </li>
      <Bars small dark reverse end />
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 9999;

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--g-4);
    list-style: none;
    margin: 0;
  }
  &__item {
    font-size: var(--fs-14);
    font-weight: 700;
    width: fit-content;

    @media (max-width: 768px) {
      font-size: var(--fs-12);
    }

    a {
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
