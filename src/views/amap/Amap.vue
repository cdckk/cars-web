<template>
  <div class="amap-wrap">
    <el-amap
      class="amap"
      :vid="'amap-vue'"
      :center="center"
      :zoom="zoom"
    >
    </el-amap>
  </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  props: {
  },
  data () {
    return {
      zoom: 16,
      center: [116.404765, 39.918052]
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
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
