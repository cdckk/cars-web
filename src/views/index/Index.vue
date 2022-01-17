<template>
  <div>
    <!-- 地图组件 -->
    <cars />
    <amap />
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
  mounted () {
    document.addEventListener('mouseup', (e) => {
      const dom = document.getElementById('children-view')
      // 判断点击的东西是不是在弹窗的范围内，是不是弹窗对象
      if (dom) {
        if (!dom.contains(e.target)) {
          this.$router.push({
            name: 'index'
          })
        }
      }
    })
  },
  methods: {
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
