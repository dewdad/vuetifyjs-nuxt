<template>
  <v-layout>
    <v-flex>
      <!--
      <v-data-table :items="users">
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{ props.item.id }}</td>
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.username }}</td>
          <td class="text-xs-right">{{ props.item.email }}</td>
          <td class="justify-center layout px-0">
            <router-link :to="`/users/${props.item.id}`">Ver</router-link>
          </td>
        </template>
      </v-data-table>      
      -->
    </v-flex>
  </v-layout>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: 'Folder'
    }
  },
  async fetch ({ store }) {
    const folders = ['uno', 'dos']

    async function asyncImport (file) {
      let content = await import(`~/contents/${file}.md`)
      return content.attributes
    }
    return Promise.all(folders.map(file => asyncImport(file)))
      .then((res) => {
        console.log(res)
        return {
          folders: res
        }
      })
  }
  /*,
  async fetch ({ store }) {
    await store.dispatch('user/getUsers')
  }
  /*,
  computed: {
    ...mapState({
      users: state => {
        return state.user.users
      }
    })
  }
  */
}
</script>
