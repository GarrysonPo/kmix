<template>
  <div class="pagination">
    <button
      class="pagination__button"
      :class="{ pagination__button_disabled: pageNumber === 1 }"
      :disabled="pageNumber === 1"
      @click="onChangePage(pageNumber - 1)"
    >
      «
    </button>
    <button
      v-for="(item, index) in items"
      :key="index"
      class="pagination__button"
      :class="{ pagination__button_active: index + 1 === pageNumber }"
      @click="onChangePage(index + 1)"
    >
      {{ index + 1 }}
    </button>
    <button
      class="pagination__button"
      :class="{ pagination__button_disabled: pageNumber === items.length }"
      :disabled="pageNumber === items.length"
      @click="onChangePage(pageNumber + 1)"
    >
      »
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class Pagination extends Vue {
  @Prop({ type: Number, default: 1 }) pageNumber!: number;
  private items: number[]

  constructor () {
    super()
    this.items = new Array(6)
  }

  @Emit('onChangePage')
  onChangePage (pageNumber: number) { }
}
</script>

<style lang="postcss">
.pagination {
  display: flex;

  &__button {
    background-color: transparent;
    border: none;
    padding: 8px;
    outline: none;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    margin: 0 2px;
    width: 32px;
    height: 32px;
  }
}

.pagination__button_active {
  background-color: var(--color-orange);
  border-color: var(--color-orange);
  color: var(--color-white);
}

.pagination__button_disabled {
  cursor: default;
}
</style>
