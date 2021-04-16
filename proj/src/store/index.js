import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],

    Regi: [],
  },
  mutations: {
    setuserInput: (state, payload) => {
      state.Regi = payload;
    },
  },
  actions: {
    setRegister: (state, payload) => {
      state.commit("setuserInput", payload);
    },
  },
  modules: {},
  getters: {
    RegiOfForm: (state) => state.Regi,
  },
});
