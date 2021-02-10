import Request from "@/util/httpRequestUtils"

const state = {
  user: null
}

const getters = {
  user: (state) => state.user
}

const actions = {
  async fetchUserProfile({ commit }, username) {
    try {
      const response = await Request.getRequest(`/users/${username}`)
      console.log('Profile response is: ', response)
      commit("SET_USER_PROFILE", response.data)
    } catch(err) {
      console.log('Error from profile fetching: ', err)
    }
  }
}

const mutations = {
  SET_USER_PROFILE: (state, user) => (state.user = user)
}

export default {
  state,
  getters,
  actions,
  mutations,
}
