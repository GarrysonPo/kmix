<template>
  <h1 v-if="size === 'xl'" class="heading heading_size_xl">
    <slot />
  </h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Heading extends Vue {
  @Prop({ type: String, required: true }) size!: 'xs' | 's' | 'm' | 'l' | 'xl'
}
</script>

<style lang="postcss">
.heading {
  font-family: var(--font-family);
  color: var(--color-black);
}

.heading_size_xl {
  font-size: 32px;
  line-height: 32px;
  margin: 12px 0 18px;
}
</style>
