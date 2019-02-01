<template>
  <v-layout>
    <v-flex>
      <vue-markdown>{{ content.body }}</vue-markdown>
    </v-flex>
  </v-layout>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  head () {
    return {
      title: 'Folder: ' + this.content.attributes.name
    }
  },
  components: {
    VueMarkdown
  },
  async asyncData ({ store, params }) {
    const content = await import('~/static/' + params.name + '/README.md')
    return {
      content: content
    }
  }
}
</script>