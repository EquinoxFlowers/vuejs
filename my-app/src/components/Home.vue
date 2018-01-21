<template>
  <div class="hello">
    <div class="contents">
      <ul class="lists">
        <li class="list" v-for="record in commits">
          <p>名字：{{record.commit.author.name}}</p>
          <p>邮箱:{{record.commit.author.email}}<</p>
          <p>名称：{{record.commit.author.date }}</p>

        </li>
      </ul>
    </div>

  </div>
</template>
<script>
  import  http from 'http'
  var apiURL = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';
  export default {
    name: 'hello',
    data () {
      return {
        branches: ['master', 'dev'],
        currentBranch: 'master',
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
        var xhr = new XMLHttpRequest()
        var self = this;
        xhr.open('GET', apiURL + self.currentBranch)
        xhr.onload = function () {
          self.commits = JSON.parse(xhr.responseText)
        }
        xhr.send()
      }
    }
  }


</script>
<style>
  ul, li {
    list-style: none;
    display: inline-block;
  }

  .lists {
    width: 1200px;
    height: 500px;

  }

  .list {
    width: 300px;
    height: 200px;
    border: 1px slategrey solid;
    padding: 10px;
    float: left;
    margin: 10px;

  }

  .listli img {
    width: 120px;
    height: 100px;
    display: block;
    margin: 0 auto;
    padding-top: 20px;
  }
</style>
