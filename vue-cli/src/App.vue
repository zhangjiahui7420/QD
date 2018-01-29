<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/test">测试</router-link> 
      <router-link :to="{name:'test1',params:{username:'zhangjiahui',age:22}}">子路由1</router-link>
      <router-link to="/test/test2">子路由2</router-link>
      <router-link to="/testUrl/5/zhangsan">测试URL</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    home(){
      this.$router.push('/testUrl/5/zhangsan');
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
