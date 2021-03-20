<template>
  <div class="cards">
    <Heading size="xl">
      Рецепты
    </Heading>
    <div class="cards__control">
      <Tags :tags="tags" @onChangeTag="onChangeTag" />
      <Pagination
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
import Pagination from '~/components/Pagination.vue'
import Heading from '~/components/Heading.vue'
import Tags from '~/components/Tags.vue'
import { Card } from '~/models/Card'
import CardModule from '~/store/modules/cards'
import { TagItem } from '~/models/Tag'

@Component({
  components: {
    BaseCard,
    Pagination,
    Heading,
    Tags
  }
})
export default class MainPage extends Vue {
  private cards: Card[]
  private tags: TagItem[]
  private pageNumber: number
  private countCards: number

  constructor () {
    super()
    this.cards = []
    this.pageNumber = 0
    this.countCards = 24
    this.tags = [
      { value: 'Easy', text: 'Легко', isActive: false },
      { value: 'Intermediate', text: 'Средне', isActive: false },
      { value: 'Hard', text: 'Тяжело', isActive: false }
    ]
  }

  async mounted () {
    this.syncPageNumbers()
    this.syncTags()
    await this.updateCards(this.pageNumber)
  }

  private syncPageNumbers () {
    const pageNumber = (typeof this.$route.query.pageNumber === 'string')
      ? parseInt(this.$route.query?.pageNumber, 10)
      : 1
    this.pageNumber = pageNumber
  }

  private syncTags () {
    const difficulty = (typeof this.$route.query.difficulty === 'string')
      ? this.$route.query?.difficulty
      : ''

    if (difficulty !== '') {
      const tags = difficulty.split(',')

      tags.forEach((tagValue) => {
        this.tags.forEach((tag, index) => {
          if (tag.value === tagValue) {
            this.tags[index].isActive = true
          }
        })
      })
    }
  }

  private async onChangePage (pageNumber: number) {
    this.pageNumber = pageNumber
    this.syncUrl(this.tags)
    await this.updateCards(pageNumber)
  }

  private onChangeTag (tags: TagItem[]) {
    this.syncUrl(tags)
  }

  private async updateCards (pageNumber: number) {
    const cardModule = getModule(CardModule, this.$store)
    await cardModule.fetchNewCards({
      offset: (pageNumber - 1) * this.countCards,
      count: this.countCards
    })
    this.cards = cardModule.getCards
  }

  private syncUrl (tags: TagItem[]) {
    let difficulty = ''
    tags.forEach((tag) => {
      if (tag.isActive) {
        difficulty += tag.value + ','
      }
    })
    difficulty = difficulty.slice(0, -1)

    this.$router.push({
      query: {
        pageNumber: this.pageNumber.toString(),
        ...(difficulty !== '') ? { difficulty } : {}
      }
    })
  }
}
</script>

<style lang="postcss">
.cards {
  display: grid;

  &__control {
    display: flex;
    justify-content: space-between;
    padding: 12px 0 16px 0;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }
}
</style>
