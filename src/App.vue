<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener('mouseup', (e) => {
      const carsSwiper = document.getElementsByClassName('cars-swiper-wrap')
      // console.log('carsContent',carsSwiper[0],e.target)
      if (carsSwiper && !carsSwiper[0].contains(e.target)) {
        // 没有在车辆列表中点击，且列表有存在
        this.$store.commit('global/SET_CARS_LIST_STATUS', true)  //true表示已经点击
      }

      const dom = document.getElementById('children-view')
      // console.log('dom',dom)
      // 判断点击的东西是不是在弹窗的范围内，是不是弹窗对象
      if (dom) {
        if (!dom.contains(e.target)) {
          const routerName = this.$route.name
          if(routerName == 'index') { return false }
          // console.log(routerName)
          this.$router.push({
            name: 'index'
          })
        }
      }
    })
  }
}

</script>
<style lang="scss">
// @import '@/views/styles/normalize.css'
#app {
}
</style>
