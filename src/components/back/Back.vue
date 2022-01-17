<template>
  <div class="header-back">
    <i class="back-icon"></i>
    <h4 class="back-title">{{ column }}</h4>
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
  },
  created () {
  },
  methods: {
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
</style>
