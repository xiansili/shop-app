<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="登陆">
        <van-cell-group>
          <van-field
            v-model="LoginUsername"
            required
            clearable
            label="用户名"
            icon="question-o"
            placeholder="请输入用户名"
          />

          <van-field v-model="LoginPassword" type="password" label="密码" placeholder="请输入密码" required/>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large">登陆</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field
            v-model="RegistUsername"
            required
            clearable
            label="用户名"
            icon="question-o"
            placeholder="请输入用户名"
          />

          <van-field v-model="RegistPassword" type="password" label="密码" placeholder="请输入密码" required/>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large" @click="registeHandler">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      active: 0,
      LoginUsername:'',
      LoginPassword:'',
      RegistUsername:'',
      RegistPassword:''
    };
  },
  methods: {

    //注册时的事件处理函数
    registeHandler(){
      //发送ajax请求
      axios({
        // url:'http://localhost:4000/user/registUser',
        method:'post',
        data:{
          x:this.RegistUsername,
          password:this.RegistPassword
        }

      }).then( (res) => { 
      console.log(res)

      })

    }
  },
};
</script>

<style lang="sass" scoped>

</style>