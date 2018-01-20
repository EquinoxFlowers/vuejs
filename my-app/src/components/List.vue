<template>
  <div class="hello">
    <div class="contents">
      <ul class="list">
        <li class="listli" v-for="record in commits">
          <img src="../assets/logo.png" alt="">
          <p>价格:{{record.sites.Name}}</p>
          <p>名称：{{record.sites.Price}}</p>
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  import  http from 'http'
  var apiURL='https://github.com/EquinoxFlowers/json.git'
  export default {
    name: 'hello',
    data () {
      return {
        msg: '欢迎来到菜鸟教程！',
        commits: null
      }
    },
    created:function () {
      this.fetchData()
    },
    watch:{
      currentBranch:'fetchData'
    },
    methods:{
      fetchData:function () {
        var xhr=new XMLHttpRequest()
        var self=this
        xhr.open('GET',apiURL+self.currentBranch)
        xhr.onload=function () {
          self.commits=JSON.parse(xhr.responseText)
        }
        xhr.send()
      }
    }

  }
</script>
<style>
  ul,li{
    list-style: none;
    display:inline-block;
  }

  .list{
    width: 500px;
    height: 500px;

  }
  .listli{
    width: 200px;
    height: 200px;
    border: 1px slategrey solid;
    padding: 10px;
    float: left;
    margin: 10px;

  }
  .listli img{
    width: 120px;
    height: 100px;
    display: block;
    margin: 0 auto;
    padding-top: 20px;
  }
</style>
