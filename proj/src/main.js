import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueApexCharts);
new Vue({
  router,
  store,
  Vuetify,
  VueApexCharts,
  render: (h) => h(App),
}).$mount("#app");
