import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Card } from '~/models/Card'

const mockCards = (params: { offset: number, count: number }): Card[] => {
  const cards: Card[] = []
  for (let ind = params.offset; ind < params.offset + params.count; ind++) {
    cards.push({
      id: ind,
      alias: Math.random().toString(16).substr(2, 32),
      title: `Title ${ind + 1}`,
      dish: {
        cookingTime: Math.floor(((Math.random() * 40) + 1)),
        difficulty: 'Easy',
        servings: Math.floor(((Math.random() * 8) + 1))
      },
      author: 'Hank Douglas'
    })
  }
  return cards
}

@Module({
  name: 'modules/cards',
  namespaced: true,
  stateFactory: true
})
export default class CardModule extends VuexModule {
  cards: Card[] = []

  get getCards () {
    return this.cards
  }

  @Action
  getCard (id: number) {
    const card = this.cards.find(card => card.id === id)
    return card ?? null
  }

  @Mutation
  setCards (cards: Card[]) {
    this.cards = cards
  }

  @Action
  async fetchNewCards (params: { offset: number, count: number }) {
    const cards = await mockCards(params)
    this.context.commit('setCards', cards)
  }
}
