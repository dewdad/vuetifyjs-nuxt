<template>
  <v-layout>
    <v-flex text-xs-center>
      <h1>{{ folder.attributes.name }}</h1>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: 'Folder: ' + this.folder.attributes.name
    }
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