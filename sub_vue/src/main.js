// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
import Vue from "vue";
import App from "./App.vue";
import routes from "./router";
// import store from "./store";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

let install = null;
function render(props = {}) {
  const { container, routerBase } = props;
  const router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: "history",
    routes
  });
  install = new Vue({
    router,
    // store,
    render: h => h(App)
  }).$mount(container ? container.querySelector("#app") : "#app");
}
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  render();
}

export async function bootstrap() {}

export async function mount(props) {
  render(props);
}
export async function unmount() {
  install.$destroy();
  install.$el.innerHTML = ""; // 子项目内存泄露问题
  install = null;
}
