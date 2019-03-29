import Vue from "vue";
import App from "./App.vue";
const WOW = window.WOW;
new WOW().init();
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
