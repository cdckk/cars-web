<template>
  <div class="user-wrap">
    <back column="安全设置" />
    <ul class="user-list">
      <router-link to="/password" tag="a" class="arrow">
        <span class="name">修改登录密码</span>
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <span class="name">设置资金密码</span>
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <span class="name">绑定手机号</span>
      </router-link>
      <router-link to="aa" tag="a" class="arrow">
        <span class="name">绑定银行号</span>
      </router-link>
    </ul>
    <button class="login-out">登出</button>
  </div>
</template>

<script>
export default {
  name: 'Safe',
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
  // padding: 27px 30px 0;
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
    a {
      display: block;
      position: relative;
      height: 64px;
      line-height: 64px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
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
