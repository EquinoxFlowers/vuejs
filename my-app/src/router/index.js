import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'*/
import  Home from '../components/Home.vue'
import List from '../components/List.vue'

Vue.use(Router);

export default new Router({
  routes: [
 /*   {path: '/', name: 'HelloWorld', component: HelloWorld},*/
    {path:'/home',name:'Home',component:Home},
    {path:'/list',name:'List',component:List},
   
  ]
})
