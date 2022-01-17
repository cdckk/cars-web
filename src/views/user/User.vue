<template>
  <div class="user-wrap">
    <div class="user-info">
      <img class="avatar pull-left" src="../../assets/images/face.png" alt="">
      <div class="base-info pull-left">
        <span>1574848757@qq.com</span>
        <div class="btn">文明驾驶分 0</div>
      </div>
    </div>
    <ul class="user-list">
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-1"></i>
        <span class="name">我的账户</span>
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-2"></i>
        <span class="name">租车订单</span>
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-3"></i>
        <span class="name">实名认证</span>
      </router-link>
      <router-link to="/safe" tag="a" class="arrow">
        <i class="icon icon-user-link-4"></i>
        <span class="name">安全设置</span>
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <i class="icon icon-user-link-5"></i>
        <span class="name">帮助中心</span>
      </router-link>
    </ul>
    <button class="login-out">登出</button>
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
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/icon.scss';
.user-wrap {
  .user-info {
    @extend %clearfix;
    span {
      color: #909090;
      font-size: 18px;
    }
    .btn {
      width: 120px;
      height: 28px;
      margin-top: 20px;
      color: #fff;
      background-color: #11a5f8;
      border-radius: 100px;
      line-height: 28px;
      text-align: center;
    }
  }
  .avatar {
    width: 84px;
    height: 84px;
    margin: 0 20px 0 15px;
    border-radius: 100px;
    vertical-align: middle;
  }
  .login-out {
    position: absolute;
    left: 50%;
    bottom: 40px;
    margin-left: -80px;
    width: 160px;
    height: 68px;
    line-height: 70px;
    text-align: center;
    color: #fff;
    background-color: #2d3339;
    border-radius: 100px;
    border: none;
  }
  .user-list {
    margin-top: 65px;
    a {
      display: block;
      position: relative;
      height: 64px;
      line-height: 64px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    .icon {
      vertical-align: middle;
      display: inline-block;
      width: 30px;
      height: 30px;
      margin: 0 15px 0 2px;
    }
    .name {
      color: #909090;
      vertical-align: middle;
    }
    .arrow::after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      width: 10px;
      height: 10px;
      border-top: 1px solid #ccc;
      border-right: 1px solid #ccc;
      @include webkit(box-sizing, border-box);
      @include webkit(transform, rotate(45deg));
      opacity: 0.5;
    }
  }
}
</style>
