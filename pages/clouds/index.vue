<template>
  <v-layout>
    <v-flex>
      <v-data-table :items="facts">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.text }}</td>
        </template>
      </v-data-table>      
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  head () {
    return {
      title: 'Firebase'
    }
  },
  async asyncData () {
    const res = await axios.get('https://vuetify-nuxt-example.firebaseio.com/items.json')
    const facts = res.data
    return { facts }
  }
}
</script>
