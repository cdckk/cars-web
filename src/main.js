import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Form, FormItem, Button, Input } from 'element-ui'
import ElementUI from 'element-ui'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 全局路由守卫
import './router/per'

// 高德地图
import './plugin/aMap'

// 全局组件
import './components/back/back.js'

import "./plugin/compositionApi";

Vue.use(ElementUI)
// Vue.use(Form)
// Vue.use(Button)
// Vue.use(Input)
// Vue.use(FormItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
