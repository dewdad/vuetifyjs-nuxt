// import axios from 'axios'

export const state = () => ({
  folder: {},
  folders: []
})

export const mutations = {
  SET_FOLDERS: (state, folders) => {
    state.folders = folders
  },
  ADD_FOLDER: (state, folder) => {
    state.folders = folder
  }
}

export const actions = {
  async getFolders ({ commit }) {
    const folders = ['uno', 'dos']

    async function asyncImport (file) {
      let content = await import(`~/contents/${file}.md`)
      /*
      return {
        attributes: content.attributes,
        body: content.body,
        html: content.html
      }
      */
      return content.attributes
    }

    return Promise.all(folders.map(file => asyncImport(file)))
      .then((res) => {
        console.log(res)
        commit('ADD_FOLDER', res)
      })
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
