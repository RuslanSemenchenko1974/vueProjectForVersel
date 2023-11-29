import { createStore } from 'vuex'

export default createStore({
  state: {
    x:[],
    y:[],
  },
  getters:{
    getX(state){
      return state.x;    
    },
    getY(state){
      return state.y;    
    }
  },
  mutations: {
    setX(state, arr){
      state.x = arr;
    },
    setY(state, arr){
      state.y = arr;
    },
    setXYEmpty(state){
      state.x = [];
      state.y = [];
    }
  },
  actions: {
  },
  modules: {
  }
})
