<template>
  <div class="tags">
    <Tag
      v-for="(tag, index) in tags"
      :key="index"
      :tag="tag"
      @onChangeTag="onChangeTag"
    >
      {{ tag.text }}
    </Tag>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import { TagItem } from '~/models/Tag'

@Component
export default class Tags extends Vue {
  @Prop({ type: Array, required: true }) tags!: TagItem[]

  @Emit('onChangeTag')
  private onChangeTag (tag: TagItem) {
    return this.tags
  }
}
</script>

<style lang="postcss">
.tags {
  display: flex;

  .tag {
    margin: 0 6px 0 0;
  }
}
</style>
