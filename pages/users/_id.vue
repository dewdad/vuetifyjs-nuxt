<template>
  <v-layout>
    <v-flex text-xs-center>
      <h1>{{ user.name }}</h1>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: 'User: ' + this.user.name
    }
  },
  async fetch ({ store, params }) {
    await store.dispatch('user/getUser', params)
  },
  computed: {
    ...mapState({
      user: state => {
        return state.user.user
      }
    })
  }
}
</script>