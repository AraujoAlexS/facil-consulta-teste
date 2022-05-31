import { createStore } from "vuex";

export default createStore({
  state: {
    fieldset: 1,
    physicianInfo: {},
  },
  mutations: {
    increaseFieldset(state) {
      state.fieldset++;
    },
    decreaseFildset(state) {
      state.fieldset--;
    },
    addPhysicianInfo(state, info) {
      state.physicianInfo = {
        ...state.physicianInfo,
        ...info,
      };
    },
  },
  actions: {},
  modules: {},
});
