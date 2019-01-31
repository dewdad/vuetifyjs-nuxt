<template>
  <v-layout>
    <v-flex>
      <vue-markdown>{{ folder.body }}</vue-markdown>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import VueMarkdown from 'vue-markdown'

export default {
  head () {
    return {
      title: 'Folder: ' + this.folder.attributes.name
    }
  },
  components: {
    VueMarkdown
  },
  async fetch ({ store, params }) {
    await store.dispatch('folder/getFolder', params)
  },
  computed: {
    ...mapState({
      folder: state => {
        return state.folder.folder
      }
    })
  }
}
</script>