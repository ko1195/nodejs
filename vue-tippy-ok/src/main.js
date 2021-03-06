// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import axios from "axios";
import VueTippy from 'vue-tippy';

Vue.config.productionTip = false;

Vue.use(VueTippy);
Vue.prototype.$http = axios;
window.axios = require('axios');

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<div class='container'><App/></div>"
});
