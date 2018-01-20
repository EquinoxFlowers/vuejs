<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/list">列表</router-link>

    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      msg: '欢迎来到菜鸟教程！'
    }
  },
}
</script>
<style>

</style>
