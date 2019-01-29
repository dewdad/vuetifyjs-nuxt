import axios from 'axios'

export const state = () => ({
  user: {},
  users: []
})

export const mutations = {
  SET_USER: (state, user) => {
    state.user = user
  },
  SET_USERS: (state, users) => {
    state.users = users
  }
}

export const actions = {
  async getUser ({ commit }, params) {
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/users/' + params.user)
    commit('SET_USER', data)
  },
  async getUsers ({ commit }) {
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    commit('SET_USERS', data)
  },
  async nuxtServerInit ({ commit }, { route, params }) {
    if (process.server && params.user) {
      let { data } = await axios.get('https://jsonplaceholder.typicode.com/users/' + params.user)
      commit('SET_USER', data)
    }
    if (process.server && route.name === 'users') {
      let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      commit('SET_USERS', data)
    }
  }
}
