<template>
  <div
    :class="{ tag, tag_active: tag.isActive }"
    @click="onChangeTag(tag)"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { TagItem } from '~/models/Tag'

@Component
export default class Tag extends Vue {
  @Prop({ type: Object, required: true }) tag!: TagItem
  private isActive: boolean

  constructor () {
    super()
    this.isActive = false
  }

  @Emit('onChangeTag')
  private onChangeTag (tag: TagItem) {
    this.tag.isActive = !this.tag.isActive
  }
}
</script>

<style lang="postcss">
.tag {
  background-color: transparent;
  cursor: pointer;
  padding: 4px 8px;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  transition: var(--speed-animation);

  &:hover {
    background-color: var(--color-blue);
    color: var(--color-white);
  }
}

.tag_active {
  background-color: var(--color-blue);
  color: var(--color-white);
}
</style>
