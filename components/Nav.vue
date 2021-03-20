<template>
  <div class="nav">
    <nuxt-link class="nav__link" to="/">
      Главная
    </nuxt-link>
    <nuxt-link class="nav__link" to="/articles">
      Статьи
    </nuxt-link>
    <nuxt-link class="nav__link" to="/recipes">
      Рецепты
    </nuxt-link>
    <nuxt-link class="nav__link" to="/about">
      О сайте
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
  display: flex;
  justify-content: flex-end;
  font-size: 18px;
  font-weight: 500;

  &__link {
    color: var(--color-black);
    text-decoration: none;
    margin: 0 16px 0 0;

    &:last-child {
      margin: 0;
    }
  }
}
</style>
