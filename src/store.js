import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Food from "./models/Food";

var api = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/jake/logs'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    days: [],
    day: {}
  },
  mutations: {
    setDays(state, days = []){
      state.days = days
    },
    setDay(state, day){
      state.day = day
    }

  },
  actions: {
    async getDays({commit}){
      let res = await api.get("")
      commit('setDays', res.data.data)
    },
    async getDay({commit}, id){
      let res = await api.get(id)
      commit('setDay', res.data.data)

    },
    createDay({ commit, dispatch }, payload) {
      api.post("", payload)
        .then(res => {
          dispatch('getDays')
        })
        .catch(err => console.error(err))
    },
    addFood({commit, dispatch, state}, nutritionXData){
      let food = new Food(nutritionXData)
      state.day.foods.push(food)
      api.put(state.day._id, state.day)
        .then(res =>{
          dispatch('getDay', state.day._id)
        })
        .catch(err => {
          state.day.foods.pop()
        })
    }
  }
})
