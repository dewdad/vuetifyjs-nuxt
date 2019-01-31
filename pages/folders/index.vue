<template>
  <v-layout>
    <v-flex>
      <v-data-table :items="folders">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.attributes.name }}</td>
          <td>{{ props.item.attributes.tags }}</td>
          <td class="justify-center layout px-0">
            <router-link :to="props.item.path">Ver</router-link>
          </td>
        </template>
      </v-data-table>   
    </v-flex>
  </v-layout>
</template>

<script>
import folders from '~/contents/folders.js'

export default {
  head () {
    return {
      title: 'Folders'
    }
  },
  async asyncData ({ store, params }) {
    async function asyncImport (folder) {
      let content = await import('~/contents/' + folder + '/README.md')
      content.path = '/folders/' + folder
      return content
    }
    return Promise.all(folders.map(folder => asyncImport(folder)))
      .then((res) => {
        return {
          folders: res
        }
      })
  }
}
</script>
