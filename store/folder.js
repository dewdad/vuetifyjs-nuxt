import axios from 'axios'

export const state = () => ({
  folder: {},
  folders: []
})

export const mutations = {
  /*
  SET_FOLDER: (state, folder) => {
    state.folder = folder
  },
  */
  SET_FOLDERS: (state, folders) => {
    state.folders = folders
  }
}

export const actions = {
  /*
  async getUser ({ commit }, params) {
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/users/' + params.id)
    commit('SET_USER', data)
  },
  */
  async getFolders ({ commit }) {
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    commit('SET_FOLDERS', data)
  }
  /*,
  async nuxtServerInit ({ commit }, { route, params }) {
    if (process.server && params.id) {
      let { data } = await axios.get('https://jsonplaceholder.typicode.com/users/' + params.id)
      commit('SET_USER', data)
    }
    if (process.server && route.name === 'users') {
      let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      commit('SET_USERS', data)
    }
  }
  */
}
