// // 引入高德地图
import Vue from 'vue'
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  key: '8b01c7b6a841d2595e6ffcb6c6ef214d', // 这里写你申请的高德地图的key
  plugin: ['AMap.Geolocation', 'AMap.Walking', 'AMap.Marker', 'AMap.Geolocation'],
  v: '1.4.15',
  uiVersion: '1.0.11'
})
