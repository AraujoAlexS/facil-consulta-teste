import { createStore } from "vuex";

export default createStore({
  state: {
    fieldset: 3,
    physicianInfo: {},
  },
  mutations: {
    increaseFieldset(state) {
      state.fieldset++;
    },
    decreaseFildset(state, num) {
      state.fieldset -= num;
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
