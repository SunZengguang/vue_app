import Vue from 'vue'  //导入vue

import app from './App.vue' //导入App组件

import router from './router.js' //导入路由

// import { Header } from 'mint-ui' //从mint-ui中按需求导入组件！

// Vue.component(Header.name, Header)

import MintUI from 'mint-ui' //这里就不按需导入了，老是出错，心累啊！

Vue.use(MintUI) //把导入的组件库安装一下

import 'mint-ui/lib/style.css' //导入组件的样式

import '../lib/mui/css/mui.min.css'

var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: c => c(app)  //将App组件渲染到html页面的挂载点
})