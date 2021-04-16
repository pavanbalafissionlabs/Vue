import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],

    Regi: [],
  },
  mutations: {
    setUsers: (state, payload) => {
      state.users = payload;
    },
    setuserInput: (state, payload) => {
      state.Regi = payload;
    },
  },
  actions: {
    setUsersAction: (state, payload) => {
      state.commit("setUsers", payload);
    },
    setRegister: (state, payload) => {
      state.commit("setuserInput", payload);
    },
  },
  modules: {},
  getters: {
    listOfUsers: (state) => state.users,
    RegiOfForm: (state) => state.Regi,
  },
});
