<template>
  <v-layout>
    <v-flex>
      <v-data-table :items="folders">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.attributes.name }}</td>
          <td>{{ props.item.attributes.tags }}</td>
          <!--
          <td class="text-xs-right">{{ props.item.username }}</td>
          <td class="text-xs-right">{{ props.item.email }}</td>
          <td class="justify-center layout px-0">
            <router-link :to="`/users/${props.item.id}`">Ver</router-link>
          </td>
          -->
        </template>
      </v-data-table>      
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: 'Folder'
    }
  },
  async fetch ({ store }) {
    await store.dispatch('folder/getFolders')
  },
  computed: {
    ...mapState({
      folders: state => {
        return state.folder.folders
      }
    })
  }
}
</script>
