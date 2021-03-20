<template>
  <div>
    <Heading size="xl">
      Статьи
    </Heading>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Heading from '~/components/Heading.vue'

@Component({
  components: {
    Heading
  }
})
export default class ArticlesPage extends Vue {

}
</script>
