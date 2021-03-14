<template>
  <div class="cards">
    <div class="cards__control">
      <BasePagination
        :page-number="pageNumber"
        @onChangePage="onChangePage"
      />
    </div>
    <div class="cards__content">
      <BaseCard
        v-for="card in cards"
        :key="card.id"
        :card="card"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseCard from '@/components/BaseCard.vue'
import { getModule } from 'vuex-module-decorators'
import BasePagination from '~/components/BasePagination.vue'
import { Card } from '~/models/Card'
import CardModule from '~/store/modules/cards'
// import { Pagination } from '~/models/BasePagination'

@Component({
  components: {
    BaseCard,
    BasePagination
  }
})
export default class MainPage extends Vue {
  private cards: Card[]
  private pageNumber: number
  private countCards: number

  constructor () {
    super()
    this.cards = []
    this.pageNumber = 0
    this.countCards = 5
  }

  async mounted () {
    const pageNumber = (typeof this.$route.query?.pageNumber === 'string')
      ? parseInt(this.$route.query?.pageNumber, 10)
      : 1
    this.pageNumber = pageNumber
    await this.updateCards(pageNumber)
  }

  private async onChangePage (pageNumber: number) {
    this.pageNumber = pageNumber
    this.$router.push({
      query: {
        pageNumber: pageNumber.toString()
      }
    })
    await this.updateCards(pageNumber)
  }

  private async updateCards (pageNumber: number) {
    const cardModule = getModule(CardModule, this.$store)
    await cardModule.fetchNewCards({
      offset: (pageNumber - 1) * this.countCards,
      count: this.countCards
    })
    this.cards = cardModule.getCards
  }
}
</script>

<style lang="postcss">
.cards {
  display: grid;

  &__control {
    display: flex;
    flex-direction: row-reverse;
    padding: 12px 16px 8px;
  }

  .card {
    &:last-child {
      margin-bottom: 0;
      border-bottom: none;
    }
  }
}
</style>
