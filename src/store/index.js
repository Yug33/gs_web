import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    search: ""
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    search(state, input) {
      state.search = input;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getSearchInput: state => () => state.search
  }
});
