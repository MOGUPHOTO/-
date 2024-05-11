import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// import CollegeContent from "./components/College.vue";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(ElementUI, { size: "small", zIndex: 3000 });

const app = new Vue({
  render: (h) => h(App),
}).$mount("#app");

app.components = {
  App,
};
