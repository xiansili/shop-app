<template>
  <div>
    <van-nav-bar title="首页" left-text="返回" left-arrow>
      <van-icon name="search" slot="left"/>
      <van-icon name="cart" slot="right"/>
    </van-nav-bar>
    <van-swipe :autoplay="3000" class="swipe" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" >
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ["https://img.yzcdn.cn/1.jpg", "https://img.yzcdn.cn/2.jpg"]
    };
  }
};
</script>


<style lang="scss" scoped>
  .swipe{
     height: 3rem;
     background-color: #000;
  }
</style>
