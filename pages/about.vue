  <template>
    <div>
      <Heading size="xl">
        О сайте
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
  export default class AboutPage extends Vue {

  }
  </script>
