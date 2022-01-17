<template>
  <div class="cars-list">
    <section class="cars-item">
      <header>
        <h4>
          <img class="cars-logo" src="../../../assets/images/cars-logo.png" alt="">
          <span class="name">Mustang 2019款</span>
        </h4>
        <p class="attr">新能源汽车 5座</p>
      </header>
      <div class="cars-content">
        <div class="info">
          <h4 class="cars-number">粤B 745N8</h4>
          <div>
            <ul class="cars-electric">
              <li class="active"></li>
              <li class="active"></li>
              <li class="active"></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p class="distance">
              <span>约</span>
              <strong>600</strong>
              <span>km</span>
            </p>
          </div>
        </div>
        <img src="../../../assets/images/pic001.jpg" alt="">
      </div>
      <footer>
        <a href="javascript: void(0);" class="parking-link">某某停车场</a>
      </footer>
    </section>
    <section class="cars-item cars-detail" :style="'height:' + height">
      <div class="scroll">
        <h4 class="column">
          某某停车厂
          <a class="close" href=""></a>
        </h4>
        <header>
          <h4>
            <img class="cars-logo" src="../../../assets/images/cars-logo.png" alt="">
            <span class="name">Mustang 2019款</span>
          </h4>
          <p class="attr">新能源汽车 5座</p>
        </header>
        <img src="../../../assets/images/pic001.jpg" width="100%" alt="">
        <div class="clearfix">
          <div class="fs-24 pull-left">粤B 745N8</div>
          <p class="distance pull-right">
            <span>约</span>
            <strong>600</strong>
            <span>km</span>
          </p>
        </div>
        <div class="cars-eletric-box">
          <div class="p-r">
            <span class="e-high" style="width: 80%"></span>
            <span class="e-bg"></span>
          </div>
        </div>
        <p class="info main-color text-align">
          取车约支付12.0元停车费，实际补贴12.0元
        </p>
        <ul class="cars-type-list">
          <li class="cars-type-item current">
            <h4 class="name pull-left">日租车</h4>
            <span class="price pull-right">￥300/1天</span>
          </li>
          <li class="cars-type-item">
            <h4 class="name pull-left">日租车</h4>
            <span class="price pull-right">￥300/1天</span>
          </li>
          <li class="cars-type-item">
            <h4 class="name pull-left">日租车</h4>
            <span class="price pull-right">￥300/1天</span>
          </li>
          <li class="cars-type-item">
            <h4 class="name pull-left">日租车</h4>
            <span class="price pull-right">￥300/1天</span>
          </li>
        </ul>
        <div class="clause-dec">
          <span class="pull-left">参保《全面保障服务》用车更放心</span>
          <i class="pull-right current"></i>
          <i class="pull-right"></i>
        </div>
      </div>
      <a class="select-car-btn" href="javascript: void(0)">
        预约用车
      </a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CarsList',
  components: {
  },
  props: {
    height: {
      type: String,
      default: '257px'
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
.cars-item {
  // width: 505px;
  height: 257px;
  margin: auto;
  padding: 28px 20px 0;
  background-color: #fff;
  border-radius: 24px;
  box-sizing: border-box;
}
header {
  display: flex;
  h4, p {
    flex: 1;
  }
  .cars-logo {
    display: inline-block;
    margin-right: 10px;
    line-height: 34px;
    vertical-align: middle;
  }
  .name {
    font-size: 16px;
  }
  p {
    text-align: right;
    line-height: 34px;
    opacity: .5;
  }
}
.cars-content {
  margin: 11px 0 7px;
  @extend %clearfix;
  display: flex;
  .info {
    flex: 1;
    // float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // height: 100%;
  }
  .cars-number {
    font-size: 18px;
  }
  .cars-electric {
    // display: flex;
    display: inline-block;
    padding-top: 10px;
    li {
      display: inline-block;
      width: 7px;
      height: 24px;
      margin-right: 3px;
      border-radius: 100px;
      background-color: #e1e1e1;
    }
  }
  .active {
    background: linear-gradient(#17a8fa, #108dd9);
  }
  .distance {
    display: inline-block;
    margin-left: 5px;
    strong {
      margin: 0 5px;
      font-size: 22px;
    }
    span {
      position: relative;
      top: -2x;
    }
    span:first-of-type {
      opacity: .6;
    }
  }
  img {
    flex: 1;
    // float: right;
    height: 120px;
  }
}
.parking-link {
  position: relative;
  display: block;
  border-top: 1px solid #e1e1e1;
  color: $color-main;
  opacity: .8;
  line-height: 53px;
  &::after {
    content: "";
    height: 8px;
    width: 8px;
    border-top: 1px solid #000;
    border-right: 1px solid #000;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -4px;
    transform: rotate(45deg);
  }
}
.cars-detail {
  // display: none;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  padding-top: 0;
  .scroll {
    height: 100%;
    overflow-y: auto;
  }
  .column {
    position: relative;
    padding: 26px 0 20px;
    margin-bottom: 19px;
    font-size: 20px;
    border-bottom: 1px solid #e1e1e1;
    .close {
      position: absolute;
      top: 25px;
      right: 0;
      width: 26px;
      height: 26px;
      cursor: pointer;
      &::before,
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -10px;
        margin-left: -10px;
        height: 20px;
        border-left: 2px solid #999c9f;
      }
      &::before {
        // transform: rotate(45deg);
        @include webkit(transform, rotate(45deg));
      }
      &::after {
        @include webkit(transform, rotate(-45deg));
      }
    }
  }
  .cars-eletric-box {
    position: relative;
    padding: 15px;
    margin-top: 17px;
    border-radius: 100px;
    background-color: #fff;
    @include webkit(box-shadow, 0 0 10px 0 rgba(0, 0, 0, .1));
    .e-bg {
      display: block;
      height: 8px;
      border-radius: 100px;
      background-color: #e1e1e1;
    }
    .e-high {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background-color: #0f9cee;
    }
  }
  .info {
    margin: 32px 0 27px;
    font-size: 14px;
  }
  .cars-type-item {
    width: 100%;
    height: 43px;
    line-height: 43px;
    padding: 0 17px 0 20px;
    margin-bottom: 15px;
    background-color: #f3f3f3;
    border-style: solid;
    border-color: #f3f3f3;
    border-width: 2px;
    border-radius: 10px;
    font-size: 16px;
    &.current {
      border-color: #0f9cee;
    }
  }
}
.clause-dec {
  @extend %clearfix;
  i {
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background-color: #ccc;
    &.current {
      background-color: $color-main;
    }
    &::after {
      content: "";
      display: block;
      width: 10px;
      height: 7px;
      margin: 4px 0 0 4px;
      border-left: 2px solid #fff;
      border-bottom: 2px solid #fff;
      @include webkit(transform, rotate(-45deg));
    }
  }
}
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
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -120px;
  margin-bottom: -42px;
}
</style>
