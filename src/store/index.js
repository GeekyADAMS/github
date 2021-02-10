import Vue from 'vue'
import Vuex from 'vuex'
import ProfileDetails from "./Modules/User/Profile-details"
import Repositories from "./Modules/User/Repositories"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ProfileDetails,
    Repositories
  }
})
