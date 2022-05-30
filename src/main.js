import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrapCSS from "../node_modules/bootstrap/dist/css/bootstrap.css";
import bootstrapJS from "../node_modules/bootstrap/dist/js/bootstrap.js";
import VueTheMask from "vue-the-mask";

createApp(App)
  .use(store)
  .use(router)
  .use(bootstrapCSS)
  .use(bootstrapJS)
  .use(VueTheMask)
  .mount("#app");
