export interface Card {
  id: number
  alias: string
  title: string
  dish: {
    cookingTime: number
    servings: number
    difficulty: 'Легко' | 'Средне' | 'Сложно'
  }
  author: string
}
