// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/HelloWorld";
import { name } from "../../package.json";

Vue.use(VueRouter);
let prefix = window.__POWERED_BY_QIANKUN__ ? `/micrApp/${name}` : "/";

const routes = [
  {
    path: prefix,
    name: "Home",
    component: Home
  },
  {
    path: `${prefix}/about`,
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/HelloWorld")
  }
];

export default routes;