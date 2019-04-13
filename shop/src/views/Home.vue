<template>
  <div>
    <van-nav-bar title="首页" left-text="返回" left-arrow>
      <van-icon name="search" slot="left"/>
      <van-icon name="cart" slot="right"/>
    </van-nav-bar>
    <van-swipe :autoplay="3000" class="swipe" indicator-color="white">
      <van-swipe-item v-for="(image, index) in carouselItem" :key="index">
        <img v-lazy="image" :src="image.imgSrc">
        <img src="" alt="">
      </van-swipe-item>
    </van-swipe>
    <!-- <div class="hot">
      <p>热门商品</p>
      <swiper :options="swiperOption" class="hot-swiper">
        <swiper-slide class="swiper-item" v-for="(item, index) in hotProducts" :key="index">
          <img :src="item.img">
        </swiper-slide>
      </swiper>
    </div> -->
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      carouselItem: [
        // 轮播图
        {
          name: "img1",
          imgSrc:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1041994715,1243354266&fm=26&gp=0.jpg"
        },
        {
          name: "img2",
          imgSrc:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=116744544,2055858210&fm=26&gp=0.jpg"
        },
        {
          name: "img3",
          imgSrc:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1490457979,856070595&fm=200&gp=0.jpg"
        }
      ],
    }  
  },  
  components: {
    swiper,
    swiperSlide
  }
    };
</script>


<style lang="scss" scoped>
.swipe {
  height: 3rem;
  background-color: #000;
  & img{
    height: 100%;
    width: 100%;
  }
}
</style>
