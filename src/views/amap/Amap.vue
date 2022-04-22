<template>
  <div class="amap-wrap">
    <el-amap
      class="amap"
      :vid="'amap-vue'"
      :center="center"
      :zoom="zoom"
      :amap-manager="amapManager"
      :events="events"
      >
      <!-- 覆盖物 圆 -->
      <el-amap-circle
        v-for="(item, index) in amapCircle"
        :key="item.id + index"
        :center="item.center"
        :radius="item.radius"
        :fillColor="item.fillColor"
        :strokeColor="item.strokeColor"
        :strokeOpacity="item.strokeOpacity"
        :strokeWeight="item.strokeWeight"
        :vid="index"
        >
      </el-amap-circle>
      <!-- 点坐标 停车场位置 -->
      <el-amap-marker
        v-for="(item) in parkingMarker"
        :key="item.id"
        :extData="item"
        :content="item.content"
        :position="item.position"
        :offset="item.offset"
        :events="item.event"
        >
      </el-amap-marker>
      <!--点坐标 停车场数量 -->
      <el-amap-marker
        v-for="(item,index) in parkingCarsNumber"
        :key="item.id + index"
        :content="item.carsNumberContent"
        :position="item.position"
        :offset="item.carsNumberOffset"
        >
      </el-amap-marker>
      <!--覆盖物 停车场距离信息 -->
      <el-amap-marker
        v-for="(item,index) in parkingInfo"
        :key="item.id + index"
        :extData="item"
        :content="item.text"
        :position="item.position"
        :offset="item.offset"
        >
      </el-amap-marker>
    </el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap'
let amapManager = new AMapManager()

import { getSelfLocation } from './location'
import { Walking } from './walking'

import styleCss from './style'
export default {
  name: '',
  components: {
  },
  props: {
    // parkingLnglat: {
    //   type: Array,
    //   default: () => []
    // }
  },
  data () {
    const self = this
    return {
      amapCircle: [
        {
          center: [0, 0],
          radius: "5",
          fillColor: "#393e43",
          strokeColor: "#393e43",
          strokeOpacity: "0.2",
          strokeWeight: "30",
          id: 1
        }
      ],
      parkingMarker: [
        {
          content: '<img src=" ' +require("../../assets/images/parking_location_img.png") +'">',
          position: [113.96853, 23.01444],
          offset: [-35,-54],
          id: 1
        },
      ],
      parkingCarsNumber: [
        {
          // content: '<img src=" ' +require("../../assets/images/parking_location_img.png") +'">',
          content: '333333',
          position: [113.96853, 23.01444],
          offset: [-35,-54],
          id: 1
        },
      ],
      parkingData: {},
      // 停车场位置
      parkingLnglat: 0,
      // 停车场信息
      parkingInfo: [],
      currentLocation: [],
      map: null,
      amapManager,
      zoom: 16,
      center: [116.404765, 39.918052],
      events: {
        init(o) {
          // 这个方法就可以用高德地图原生的api
          lazyAMapApiLoaderInstance.load().then(() => {
            self.initMap(o)
          })
          
        }
      }
    }
  },
  watch: {
    parkingLnglat: {
      handler(newValue) {
        // console.log(newValue)
        const parkingMarkerItem = JSON.parse(JSON.stringify(this.parkingMarker[0]))
        // newValue.forEach((item,index) => {
          
        //   parkingMarkerItem.position = item.split(',')
        //   parkingMarkerItem.id = 2 + index
        //   console.log(parkingMarkerItem)

        //   this.parkingMarker.push(parkingMarkerItem)
        // })

        for(let i = 0; i < newValue.length; i++) {
          parkingMarkerItem.position = newValue[i].split(',')
          parkingMarkerItem.id = 2 + i
          // console.log(parkingMarkerItem.position)
          // this.parkingMarker.push(parkingMarkerItem)
        }

        // console.log('this.parkingMarker',this.parkingMarker)
      },
      immediate: true
    },
    "$store.state.location.selfLocation": {
      handler(newValue) {
        this.selfLocation()
      },
      // immediate: true
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    initMap(o) {
      this.$emit('callbackComponent', {
        function: 'loadMap'
      });
      this.map = amapManager.getMap()
      // console.log(this.map)
      // let marker = new AMap.Marker({
      //   position: [116.404765, 39.918052]
      // })
      // marker.setMap(o)

      // 地图加载完成获取自身定位
      this.selfLocation()
    },

    // 获取自身定位坐标
    selfLocationComplete(val) {
      const lat = val.position.lat
      const lng = val.position.lng
      console.log('自身定位',[lng, lat])
      this.amapCircle[0].center = [lng, lat]
    },

    selfLocation() {
      console.log('自身定位')
      getSelfLocation({
        map: this.map,
        complete: (val) => {
          console.log('66666')
          this.selfLocationComplete(val)
        }
        // shibai: () => {
        //   console.log('失败')
        // }
      })
    },

    // 停车场数据
    /**
     * 父组件传进来
     */
    getParkingData(data) {
      this.parkingMarker = data
      this.parkingCarsNumber = data
    },
    // 步行路线规划
    handlerWalking(parkingData,positionStart) {
      this.parkingData = parkingData
      const positionEnd = this.amapCircle[0].center
      this.parkingLnglat = positionStart
      const params = {
        map: this.map,
        positionStart: positionStart,
        positionEnd: positionEnd,
        complete: (val) => this.walkingData(val)
      }
      Walking(params)
    },
    walkingData(val) {
      const data = val
      this.$store.state.walking.walkingData = data
      // console.log('vuex', this.$store.state.walking.walkingData)
      this.parkingInfo = [
        {
          position: this.parkingLnglat,
          text: `<div style="${styleCss.parkingInfoWrap}">
                  <span style="${styleCss.parkingNumber}">${this.parkingData.carsNumber}</span>辆车
                  <span style="${styleCss.parkingLine}"></span>
                  距离您${data.routes[0].distance}米
                </div>`,
          offset: [-20, -49]
        }
      ]
      console.log('路线数据', data)
    }
  }
}
</script>

<style scoped lang="scss">
.amap-wrap {
  height: 100vh;
}
// .amap {
//   height: 500px;
//   height: 500px;
// }
</style>
