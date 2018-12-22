<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="登陆">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            icon="question-o"
            placeholder="请输入用户名"
          />

          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
        </van-cell-group>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            icon="question-o"
            placeholder="请输入用户名"
          />

          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required/>
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      username:'',
      password:''
    };
  }
};
</script>

<style lang="sass" scoped>

</style>