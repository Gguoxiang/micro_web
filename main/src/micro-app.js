const microApps = [
    {
      name: '大儿子',
    //   entry: process.env.VUE_APP_SUB_VUE,
      entry: 'http://localhost:8081',
      activeRule: '/sub_vue'
    },
    {
      name: '小儿子',
      entry: 'http://localhost:8082',
      activeRule: '/sub2_vue'
    }
  ]
  
  const apps = microApps.map(item => {
    return {
      ...item,
      container: '#subapp-viewport', // 子应用挂载的div
      props: {
        routerBase: item.activeRule, // 下发基础路由
      }
    }
  })
  
  export default apps