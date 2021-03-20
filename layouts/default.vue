<template>
  <div>
    <div class="content">
      <div class="content__nav">
        <Theme />
        <Nav />
      </div>
      <Nuxt />
    </div>
  </div>
</template>

<style lang="postcss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

p {
  margin: 0;
}

.content {
  margin: 0 auto;
  max-width: 1200px;

  &__nav {
    padding: 12px 0;
    display: flex;
    justify-content: space-between;
  }
}
</style>
