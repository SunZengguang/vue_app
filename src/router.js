import Vue from 'vue' //导入 vue

import VueRouter from 'vue-router' //导入路由

import Home from '../components/tabbar/Homecontainer.vue'
import Member from '../components/tabbar/MemberContainer.vue'
import Shop from '../components/tabbar/ShopContainer.vue'
import Search  from '../components/tabbar/SearchContainer.vue'


Vue.use(VueRouter)    //安装路由

var router = new VueRouter({
    routes: [  //编写路由规则
       { path:'/home', component:Home },
       { path:'/member', component:Member },
       { path:'/shopping-car', component:Shop },
       { path:'/search', component: Search },
    ],
    linkActiveClass: 'mui-active' //设置路由高亮，mui代码段的类来覆盖
    //上面是用 mui-active 来 替换 router-link-active 这个类
})

export default router //把路由对象暴露出去