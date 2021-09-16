import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
export const eventHub = new Vue();

new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
