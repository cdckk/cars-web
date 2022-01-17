<template>
  <div class="cars-wrap">
    <div class="cars-swiper-wrap">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <cars-list height="600px" />
        </swiper-slide>
        <swiper-slide>
          <cars-list />
        </swiper-slide>
        <swiper-slide>
          <cars-list />
        </swiper-slide>
        <swiper-slide>
          <cars-list />
        </swiper-slide>
        <swiper-slide>
          <cars-list />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import CarsList from './components/CarsList.vue'
export default {
  name: '',
  components: {
    Swiper,
    SwiperSlide,
    CarsList
  },
  props: {
  },
  data () {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
        // Some Swiper option/callback...
      }
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
.cars-wrap {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 94px;
  z-index: 11;
}
.cars-swiper-wrap {
  position: relative;
  padding: 0 58px;
  .swiper-container {
    overflow: initial;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 50%;
    margin-top: -50px;
    width: 60px;
    height: 100px;
    border-radius: 100px;
    background-color: #fff;
    @include webkit(box-shadow, 0 0 18px 0 rgba(0, 0, 0, .2));
    @include webkit(transition, all .5s ease 0s);
    &:hover {
      background-color: $color-main;
    }
  }
}
</style>
