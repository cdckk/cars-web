<template>
  <div>
    <!-- 地图组件 -->
    <cars ref="cars" />
    <amap
      ref="map"
      @callbackComponent="callbackComponent" />
      <!-- :parkingLnglat="parkingLnglat" -->
    <!-- 会员 -->
    <!-- <div id="children-view" v-show="show"> -->
    <div id="children-view" :class="[show ? 'open' : '']">
      <router-view />
    </div>
    <!-- 导航 -->
    <nav-bar />
    <login class="login"/>
  </div>
</template>

<script>
import NavBar from '../../components/navbar/NavBar.vue'
import Amap from '../amap/Amap.vue'
import Login from './Login.vue'
import Cars from '../cars/Cars.vue'
import parking from '../../api/parking'
import { getCarsList } from '../../api/cars'

export default {
  name: '',
  components: {
    Amap,
    Cars,
    NavBar,
    Login
  },
  props: {
  },
  data () {
    return {
      // show: false
      // 停车场数据
      // parkingLnglat: []
    }
  },
  computed: {
    show () {
      const route = this.$route
      if (route.name !== 'index') {
        return true
      } else {
        return false
      }
      // return route.name !== 'index' ? true : false
    }
  },
  watch: {
    // $route (value) {
    //   const routerName = value.name
    //   if (this.routerName !== 'index') {
    //     this.show = true
    //   } else {
    //     this.show = false
    //   }
    // }
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
    // document.addEventListener('mouseup', (e) => {
    //   const dom = document.getElementById('children-view')
    //   // 判断点击的东西是不是在弹窗的范围内，是不是弹窗对象
    //   if (dom) {
    //     if (!dom.contains(e.target)) {
    //       const routerName = this.$route.name
    //       if(routerName == 'index') { return false }
    //       // console.log(routerName)
    //       this.$router.push({
    //         name: 'index'
    //       })
    //     }
    //   }
    // })
  },
  methods: {
    callbackComponent(params) {
      // console.log(params)
      this[params.function]()
    },
    // 地图初始化完成回调
    loadMap() {
      /**
       * 地图初始化完后，请求停车场数据
       */
      this.getParking()
    },
    getParking() {
      //获取停车场数据
      parking().then(res => {
        const parkingData = res.data.data
        parkingData.forEach((item) => {
          console.log(item)
          item.position = item.lnglat.split(',')
          item.content = '<img src=" ' +require("../../assets/images/parking_location_img.png") +'">'
          item.offset = [-35,-54]
          item.carsNumberOffset = [-8,-32]
          item.carsNumberContent = `<p style="background-color: yellow; color: #fff">${item.carsNumber}</p>`
          item.event = {
            click: (e) => {
              this.walking(e, item.position) //路线规划
              this.getCarsList(e) //车辆列表

              this.$store.state.global.isClickCarsList = false
            }
          }
          // this.parkingLnglat.push(item.lnglat)
        })
        this.$refs.map.getParkingData(parkingData)
      })
      // console.log(this.parkingLnglat)
    },
    walking(e, positionStart) {
      const data = e.target.getExtData()
      // console.log('e', data)
      this.$refs.map.handlerWalking(data, positionStart)
    },
    getCarsList(e) {
      const data = e.target.getExtData()
      console.log('e',data)
      // return false
      
      // 父组件调子组件的方法
      /**
       * 先判断组件存不存在
       */
      if (this.$refs.cars) {
        this.$refs.cars.getCarsList(data.id, e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  z-index: 999;
}
#children-view {
  width: 410px;
  background-color: #34393d;
  position: fixed;
  right: -600px;
  top: 0;
  bottom: 0;
  padding: 27px 30px 0;
  z-index: 101;
  @include webkit(transition, all 2s);
  @include webkit(box-shadow, -5px 0 38px 0 rgba(0, 0, 0, .4));
  @include webkit(box-sizing, border-box);
  &.open {
    right: 0;
  }
}
</style>
