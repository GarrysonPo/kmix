export interface Card {
  id: number
  alias: string
  title: string
  dish: {
    cookingTime: number
    servings: number
    difficulty: 'Easy' | 'Intermediate' | 'Hard'
  }
  author: string
}
