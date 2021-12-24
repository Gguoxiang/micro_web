<template>
  <div id="app">
    <div class="layout-header">
      <div class="logo">我是爸爸，我有俩儿子<span>现在被点名的是{{ JSON.stringify(user.name) }}</span></div>
      <ul class="sub-apps">
        <li v-for="item in microApps" :class="{active: item.activeRule === current}" :key="item.name" @click="goto(item)">{{ item.name }}</li>
      </ul>
    </div>
    <div style="display: flex;">
      <div id="subapp-viewport0" class="box"></div>
      <div id="subapp-viewport1" class="box"></div>
      <div id="subapp-viewport2" class="box"></div>
    </div>
  </div>
</template>

<script>
import microApps from './micro-app'
import actions from './store'

export default {
  name: 'App',
  data () {
    return {
      microApps,
      current: '/sub_vue',
      user: {
        name: ''
      }
    }
  },
  mounted() {
    // 注册一个观察者函数
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      this.user = state.user
      console.log("主应用观察者：token 改变前的值为 ", prevState);
      console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state);
    });
    console.log('aaaaaa', actions.getGlobalState())
    this.user = actions.getGlobalState().user
  },
  methods: {
    goto (item) {
      console.log(item)
      this.current = item.activeRule
      let url = item.hash ? item.activeRule + item.hash : item.activeRule
      history.pushState(null, item.activeRule, url) // 没引入路由，所以不能用路由切换
    },
  },
  created() {
    const path = window.location.pathname
    if (this.microApps.findIndex(item => item.activeRule === path) >= 0) {
      this.current = path
    }
  },
}
</script>

<style>
html, body{
  margin: 0 !important;
  padding: 0;
}
.box {
  width: 30%;
}
.layout-header{
  height: 50px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  line-height: 50px;
  position: relative;
}
.logo {
  float: left;
  margin: 0 50px;
}
.sub-apps {
  list-style: none;
  margin: 0;
  overflow: hidden;
}
.sub-apps li{
  list-style: none;
  padding: 0 20px;
  cursor: pointer;
  float: left;
}
.sub-apps li.active {
  color: #42b983;
  text-decoration: underline;
}
</style>