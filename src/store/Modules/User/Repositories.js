import Request from "@/util/httpRequestUtils"

const state = {
  repos: []
}

const getters = {
  repos: (state) => state.repos
}

const actions = {
  async fetchUserRepositories({ commit, state }, payload) {
    try {
      const response = await Request.getRequest(`/users/${payload.user}/repos?per_page=20&sort=updated&page=${payload.page}`)

      // Manually sort repository in order of recently updated if query param is unavailable
      // await response.data.sort(function(a, b) {
      //   const earlier = new Date(a.updated_at);
      //   const later = new Date(b.updated_at);
      //   return later-earlier
      // })

      await response.data.map(repo => {
        repo.forked_from = ''
        if (!repo.language) {
          repo.language = ''
        }
        if (!repo.description) {
          repo.description = '...'
        }
      })

      commit("SET_USER_REPOS", response.data)

      for (let i = 0; i < state.repos.length; i++) {
        if (state.repos[i].fork) {
          const response = await Request.getRequest(`/repos/${payload.user}/${state.repos[i].name}`)
          state.repos[i].forked_from = `${response.data.source.owner.login}/${response.data.source.name}`
        }
      }

    } catch(err) {
      console.log('Error from repo fetching: ', err)
    }
  }
}

const mutations = {
  SET_USER_REPOS: (state, repos) => (state.repos = repos)
}

export default {
  state,
  getters,
  actions,
  mutations,
}
