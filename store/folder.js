// import axios from 'axios'
import folders from '~/contents/folders.js'

export const state = () => ({
  folder: {},
  folders: []
})

export const mutations = {
  INIT: (state) => {
    state.folders = []
  },
  SET_FOLDER: (state, folder) => {
    state.folder = folder
  },
  ADD_FOLDER: (state, folder) => {
    state.folders.push(folder)
  }
}

export const actions = {
  async getFolder ({ commit }, params) {
    async function asyncImport (folder) {
      let content = await import(`~/contents/${folder}/README.md`)
      if (content.attributes.name === params.name) {
        commit('SET_FOLDER', content)
      }
    }
    folders.map(folder => asyncImport(folder))
  },
  async getFolders ({ commit }) {
    commit('INIT')
    async function asyncImport (folder) {
      let content = await import(`~/contents/${folder}/README.md`)
      commit('ADD_FOLDER', content)
    }
    folders.map(folder => asyncImport(folder))
  },
  async nuxtServerInit ({ commit }, { route, params }) {
    if (process.server && params.name) {
      // ToDo
    }
    if (process.server && route.name === 'folders') {
      // ToDo
    }
  }
}
