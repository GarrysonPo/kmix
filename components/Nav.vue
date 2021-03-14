<template>
  <div class="nav">
    <nuxt-link class="nav__link" to="/">
      Home
    </nuxt-link>
    <nuxt-link class="nav__link" to="/about">
      About
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss">
a.nuxt-link-exact-active {
  color: var(--color-orange);
}

.nav {
  padding: 8px 0;
  display: flex;

  &__link {
    color: var(--color-black);
    text-decoration: none;
    margin: 0 16px 0 0;
  }
}
</style>
