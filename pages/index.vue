<template>
  <div>
    <Heading size="xl">
      Главная
    </Heading>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Heading from '~/components/Heading.vue'

@Component({
  components: {
    Heading
  }
})
export default class MainPage extends Vue {
}
</script>

<style lang="postcss">
</style>
