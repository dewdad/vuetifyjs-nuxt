<template>
  <v-layout>
    <v-flex>
      <!--<vue-markdown>{{ folder.body }}</vue-markdown>-->
    </v-flex>
  </v-layout>
</template>

<script>
// import { mapState } from 'vuex'
import VueMarkdown from 'vue-markdown'

export default {
  head () {
    return {
      title: 'Folder: ' + this.name
    }
  },
  components: {
    VueMarkdown
  },
  async asyncData ({ store, params }) {
    const content = await import('~/contents/' + params.name + '/README.md')
    const attr = content.attributes
    return {
      name: attr.name
    }
  }
  /*,
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
  */
}
</script>