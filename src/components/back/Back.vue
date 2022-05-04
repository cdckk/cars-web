<template>
  <div class="header-back">
    <div class="nav-header-left" @click="goBack">
      <i class="back-icon"></i>
      <h4 class="back-title">{{ title }}</h4>
    </div>
    <div class="nav-header-right">
      <slot name="navHeaderRight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {
  },
  props: {
    column: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  computed: {
    title() {
      return this.$store.state.app.routerName
    }
  },
  created () {
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.header-back {
  margin-bottom: 65px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.back-icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  position: relative;
  top: 1px;
  margin-right: 16px;
  border-top: 1px solid #00a3ff;
  border-left: 1px solid #00a3ff;
  @include webkit(transform, rotate(-45deg));
}
.back-title {
  display: inline-block;
  color: #fff;
  font-size: 16px;
}
.nav-header-left {
  float: left;
}
.nav-header-right {
  float: right;
  color: #fff;
}
</style>
