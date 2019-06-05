import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

var api = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/jake/logs'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    days: []
  },
  mutations: {
    setDays(state, days = []){
      state.days = days
    }
  },
  actions: {
    async getDays({commit}){
      let res = await api.get("")
      commit('setDays', res.data.data)
    },
    createDay({ commit, dispatch }, payload) {
      api.post("", payload)
        .then(res => {
          dispatch('getDays')
        })
        .catch(err => console.error(err))
    }
  }
})
