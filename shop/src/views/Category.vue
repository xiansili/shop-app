<template>
  <div>
    <van-nav-bar title="商品类型" border></van-nav-bar>
    <van-row>
      <van-col span="6" class="nav">
        <ul>
          <li
            :class="{active:active == index}"
            @click="selectCategory(item.typeId, index)"
            v-for="(item, index) in typeList"
            :key="index"
          >{{item.typeName}}</li>
        </ul>
      </van-col>
      <van-col span="18" class="container">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list class="content" v-model="loading" @load="onLoad" :finished="finished">
            <div class="content-item" v-for="(item ,index) in productList" :key="index">
              <img :src="item.img" alt>
              <p class="content-item-name">{{item.name}}</p>
              <p class="content-item-price">{{item.price}}</p>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-col>
    </van-row>
  </div>
</template>


<script>
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {
      typeList: [],
      productList: [],
      active: 0,
      typeId: 1,
      start: 0,
      limit: 10,
      finished: false,
      isLoading: false,
      loading: false
    };
  },
  created() {
    axios({
      method: "get",
      url: url.getTypes
    })
      .then(res => {
        this.typeList = res.data;
        console.log(this.typeList);
        this.selectCategory(this.typeId, this.active);
      })
      .catch(err => {});
  },

  methods: {
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.getProductList();
      }, 2000);
    },
    onRefresh() {
      setTimeout(() => {
        this.productList = [];
        this.$toast.success("刷新成功");
        this.isLoading = false;
        this.getProductList();
      }, 2000);
    },
    selectCategory(typeId, index) {
      this.active = index;
      this.typeId = typeId;
      this.productList = [];
      this.getProductList();
      this.finished = false;
    },
    getProductList() {
      this. loading = true;
      axios({
        method: "get",
        url: url.getProductsByType,
        params: {
          typeId: this.typeId,
          start: this.productList.length,
          limit: this.limit
        }
      })
        .then(res => {
          if (res.data.length != 0) {
            this.productList = this.productList.concat(res.data);
          } else {
            this.finished = true;
          }

          this. loading = false;
          // console.log(this.productList);
        })
        .catch(err => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  background: #eee;
  li {
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 1px solid #fff;
    padding: 3px;
    text-align: center;
  }
  .active {
    background: #fff;
  }
}
.container {
  position: fixed;
  top: 46px;
  bottom: 1rem;
  right: 0;
  overflow-y: scroll;
}
.content {
  display: flex;
  flex-wrap: wrap;
  &-item {
    width: 40%;
    padding: 0 10px;
    text-align: center;
    img {
      width: 2rem;
      height: 2rem;
    }
    &-name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>