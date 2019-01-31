// import axios from 'axios'

export const state = () => ({
  folder: {},
  folders: []
})

export const mutations = {
  INIT: (state) => {
    state.folders = []
  },
  ADD_FOLDER: (state, folder) => {
    state.folders.push(folder)
  }
}

export const actions = {
  async getFolders ({ commit }) {
    commit('INIT')

    let folders = ['uno', 'dos']

    async function asyncImport (file) {
      let content = await import(`~/contents/${file}.md`)
      commit('ADD_FOLDER', content)
    }
    folders.map(file => asyncImport(file))
  },
  async nuxtServerInit ({ commit }, { route, params }) {
    if (process.server && params.id) {
      // ToDo
    }
    if (process.server && route.name === 'folder') {
      // ToDo
    }
  }
}
