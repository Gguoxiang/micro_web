// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import microApps from './micro-app'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const config = {
  beforeLoad: [
      app => {
          console.log("%c before load",
          'background:#0f0 ; padding: 1px; border-radius: 3px;  color: #fff',
          app);
      }
  ], // 挂载前回调
  beforeMount: [
      app => {
          console.log("%c before mount",
          'background:#f1f ; padding: 1px; border-radius: 3px;  color: #fff',
          app);
      }
  ], // 挂载后回调
  afterUnmount: [
      app => {
          console.log("%c after unload",
          'background:#a7a ; padding: 1px; border-radius: 3px;  color: #fff',
          app);
      }
  ] // 卸载后回调
}

registerMicroApps(microApps, config)
setDefaultMountApp(microApps[0].activeRoule) // 默认打开第一个子项目
start()