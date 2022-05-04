<template>
  <div class="password">
    <back>
      <template v-slot:navHeaderRight>
        <router-link to="/login" class="color-white opacity-4">登录</router-link>
      </template>
    </back>
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-input class="input" v-model="form.name" placeholder="原始密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input class="input" v-model="form.name" placeholder="新密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input class="input" v-model="form.name" placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <button class="vcode-btn">获取验证码</button>
        <el-input class="input vcode" v-model="form.name" placeholder="验证码">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="button" type="primary" @click="onSubmit" size="medium">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Back from '../../components/back/Back.vue'
export default {
  name: '',
  components: {
    Back
  },
  props: {
  },
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped lang="scss">
.password {
  /deep/.el-input__inner {
    color: #fff;
    background-color: #202429;
    border: none;
    &::-webkit-input-placeholder {
      /* placeholder颜色  */
      color: #646668;
      /* placeholder字体大小  */
      font-size: 12px;
      /* placeholder位置  */
      // text-align: right;
    }
    &::-moz-placeholder {
      color: #646668;
      font-size: 12px;
    }
    &::-ms-input-placeholder {
      color: #646668;
      font-size: 12px;
    }
    &::-moz-placeholder {
      color: #646668;
      font-size: 12px;
    }
  }
  // .input {
  // }
  .vcode-btn {
    width: 100px;
    height: 32px;
    background-color: #34393f;
    color: #fff;
    font-size: 12px;
    border: none;
    border-radius: 5px;
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 100;
    cursor: pointer;
  }
  .button {
    width: 100%;
  }
}
</style>
