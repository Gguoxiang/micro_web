const microApps = [
  {
    name: '大儿子',
  //   entry: process.env.VUE_APP_SUB_VUE,
    entry: 'http://localhost:8081',
    container: '#subapp-viewport0', // 子应用挂载的div
    activeRule: '/sub_vue'
  },
  {
    name: '大媳妇',
  //   entry: process.env.VUE_APP_SUB_VUE,
    entry: 'http://localhost:8081',
    container: '#subapp-viewport1', // 子应用挂载的div
    activeRule: '/sub_vue1',
    hash: '/about'
  },
  {
    name: '小儿子',
    entry: 'http://localhost:8082',
    container: '#subapp-viewport2', // 子应用挂载的div
    activeRule: '/sub2_vue'
  },
]

const apps = microApps.map((item, i) => {
  return {
    ...item,
    props: {
      routerBase: item.activeRule, // 下发基础路由
    }
  }
})

export default apps