import { createStore } from "vuex";

export default createStore({
  state: {
    fieldset: 2,
  },
  mutations: {
    increaseFieldset(state) {
      state.fieldset++;
    },
    decreaseFildset(state) {
      state.fieldset--;
    },
  },
  actions: {},
  modules: {},
});
