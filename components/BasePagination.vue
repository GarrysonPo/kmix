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
    <span
      v-for="(item, index) in new Array(10)"
      :key="index"
    >
      <button
        class="pagination__button"
        :class="{ pagination__button_active: index + 1 === pageNumber }"
        @click="onChangePage(index + 1)"
      >{{ index + 1 }}</button>
    </span>
    <button
      class="pagination__button"
      @click="onChangePage(pageNumber + 1)"
    >
      »
    </button>
    <!-- <button class="paganation__button" @click="onChangePage()"> -->
      <!-- Last -->
    <!-- </button> -->


    <!-- <button
      v-for="item in controls.items"
      :key="item"
      class="pagination__button"
      :class="{ pagination__button_active: item === controls.isActive }"
    >
      {{ control }}
    </button> -->
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
// import { Pagination } from '~/models/BasePagination'

@Component({})
export default class BasePagination extends Vue {
  @Prop({ type: Number, default: 1 }) pageNumber!: number;
  // @Prop({ type: Object, required: true }) controls!: Pagination;

  // private controls: Viewer

  // constructor () {
  //   super()
  // this.controls = {
  //   items: [10, 25, 50],
  //   isActiveItem: 25
  // }
  // }

  private changeView () {
    console.log('clicked!')
  }

  @Emit('onChangePage')
  onChangePage (pageNumber: number) { }
}
</script>

<style lang="postcss">
.pagination {

  &__button {
    border: none;
    padding: 8px;
    background-color: transparent;
    outline: none;
    cursor: pointer;

    &:hover {
      color: var(--color-orange)
    }
  }
}

.pagination__button_active {
  color: var(--color-orange);
}

.pagination__button_disabled {
  color: var(--color-silver);

  &:hover {
    color: var(--color-silver);
  }
}
</style>
