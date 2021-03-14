<template>
  <section v-if="card" class="block">
    <h1>{{ card.title }}</h1>
    <p>Cooking time: {{ card.dish.cookingTime }}</p>
    <p>Servings: {{ card.dish.servings }}</p>
    <p>Difficulty: {{ card.dish.difficulty }}</p>
    <h2>Description</h2>
    <p>
      Lorem
    </p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import { Card } from '~/models/Card'
import CardModule from '~/store/modules/cards'

@Component
export default class CardIdPage extends Vue {
  private card!: Card | null

  constructor () {
    super()
    this.card = null
  }

  async mounted () {
    const id = parseInt(this.$route.params.id, 10)
    const cardModule = getModule(CardModule, this.$store)
    await cardModule.fetchNewCards({ offset: id, count: 1 })
    this.card = await cardModule.getCard(id)
  }

  // validate () {
  // console.log(this.$route.params)
  // const cardId = parseInt(this.$route.params.id, 10)
  // console.log('card id equals', cardId)
  //   return true
  // }
}
</script>

<style lang="postcss" scoped>
.block {
  /* border-radius: var(--border-radius);
  padding: 8px 16px; */
}
</style>
