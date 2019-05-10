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

          <van-field
            v-model="LoginPassword"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
        </van-cell-group>
        <div>
          <van-button type="primary" size="large" @click="loginHandler">登陆</van-button>
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

          <van-field
            v-model="RegistPassword"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />
        </van-cell-group>
        <div>
          <van-button type="primary" size="large" @click="registeHandler">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import axios from 'axios'
import url from '@/service.config.js'
export default {
  data() {
    return {
      active: 0,
      LoginUsername: "",
      LoginPassword: "",
      RegistUsername: "",
      RegistPassword: ""
    };
  },
  methods: {
    //注册时的事件处理函数
    registeHandler() {
      axios({
        method: 'post',
        url: url.registUser,
        data:{
          userName:this.RegistUsername,
          passWord:this.RegistPassword
        }
      })
        .then(res => {
          if(res.data.code == 200){
            this.$toast.success('注册成功')
            this.RegistPassword = this.RegistUsername = '';
          }else{
            this.$toast.fail('注册失败')
          }
        })
        .catch(err => {
          console.log(err)
        });
      
    },
    //登录时的事件处理函数
    loginHandler(){
      axios({
        method: 'post',
        url:url.loginUser,
        data:{
          userName: this.LoginUsername,
          passWord: this.LoginPassword
        }
      }).then(res=>{
        console.log(res)
        if(res.data.code == 200){
          this.$toast.success('登录成功')
        }else{
            this.$toast.fail('登录失败')
          }
      }).catch(err=>{
        console.log(err)
      })
    }
  }
};
</script>

<style lang="sass" scoped>

</style>