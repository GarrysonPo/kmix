<template>
  <nuxt-link
    class="card"
    :to="`/catalog/${card.id + 1}`"
  >
    <div class="card__image">
    </div>
    <div class="card__content">
      <p class="card__title">
        {{ card.title }}
      </p>
      <ul class="card__params">
        <li class="card__param">{{ card.dish.cookingTime }}m</li>
        <li class="card__param">{{ card.dish.difficulty }}</li>
        <li class="card__param">{{ card.dish.servings }} servings</li>
      </ul>
      <p class="card__origin">
        <span class="card__by">By</span>
        <span class="card__author">Hank Douglas</span>
      </p>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator'
import { Card } from '~/models/Card'

@Component({})
export default class BaseCard extends Vue {
  @Prop({ type: Object, required: true }) readonly card!: Card
}
</script>

<style lang="postcss">
.card {
  display: flex;
  padding: 8px 0;
  margin: 0 16px 8px 16px;
  text-decoration: none;
  border-bottom: 1px solid var(--color-silver-2);

  &__image {
    width: 64px;
    height: 64px;
    background-color: var(--color-orange);
    border-radius: var(--border-radius);
  }

  &__content {
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    color: var(--color-black);
    font-weight: 500;
    font-size: 16px;
  }

  &__params {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__param {
    color: var(--color-silver);

    &::after {
      content: '|';
      padding: 0 4px;
      color: black;
    }

    &:last-child::after {
      content: '';
    }
  }

  &__by {
    color: var(--color-silver);
  }

  &__author {
    color: var(--color-black);
  }
}

</style>
