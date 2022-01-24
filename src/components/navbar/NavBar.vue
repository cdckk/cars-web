<template>
  <div class="navbar-wrap">
    <ul>
      <li>
        <i class="icon icon-help"></i>
      </li>
      <li>
        <i class="icon icon-search"></i>
      </li>
      <li>
        <a class="select-car-btn">选择车辆</a>
      </li>
      <li>
        <i class="icon icon-location" @click="selfLocation"></i>
      </li>
      <li>
        <i class="icon icon-user" @click="toUser"></i>
      </li>
    </ul>
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
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    toUser () {
      this.$router.push('/user')
    },
    selfLocation() {
      this.$store.commit('location/SELF_LOCATION')
    }
  }
}
</script>

<style scoped lang="scss">
.navbar-wrap {
  li {
   display: inline-block;
  }
  .icon {
    vertical-align: middle;
    margin: 0 17px;
    cursor: pointer;
  }
  position: fixed;
  left: 0;
  right: 0;
  bottom: 80px;
  z-index: 10;
  text-align: center;
  .select-car-btn {
    display: inline-block;
    width: 240px;
    height: 84px;
    margin: 0 17px;
    border-radius: 100px;
    line-height: 84px;
    text-align: center;
    color: #fff;
    font-size: 26px;
    font-weight: 300;
    background-color: $color-main;
  }
}
</style>
