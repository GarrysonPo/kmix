<template>
  <div>
    <img
      :src="require(`~/assets/images/${image}`)"
      class="icon"
      @click="onChangeTheme()"
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Theme extends Vue {
  private theme: 'light' | 'dark'
  private image: 'moon.svg' | 'sun.svg'

  constructor () {
    super()
    this.theme = 'light'
    this.image = 'moon.svg'
  }

  private onChangeTheme () {
    this.theme = (this.theme === 'light') ? 'dark' : 'light'
    this.image = (this.theme === 'light') ? 'moon.svg' : 'sun.svg'

    document.body.classList.remove('dark-theme')
    if (this.theme === 'dark') {
      document.body.classList.add('dark-theme')
    }
  }
}
</script>

<style lang="postcss" scoped>
.icon {
  width: 26px;
  height: 26px;
  cursor: pointer;
}
</style>
