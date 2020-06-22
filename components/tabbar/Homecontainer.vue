<template>
  <div>
    <!-- 轮播图区域，auto是显示的间隔时长 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboList" :key="item.id">
        <img :src="item.img" alt srcset />
        <!-- 这里src前面有v-bind进行属性绑定! -->
      </mt-swipe-item>
    </mt-swipe>
  
   <!-- 6宫格 -->
  <ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <router-link to="/home/news">
       <img src="../../images/menu1.png" alt="" srcset="">
        <div class="mui-media-body">新闻资讯</div>
      </router-link>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
            <img src="../../images/menu2.png" alt="" srcset="">
        <div class="mui-media-body">图片分享</div>
      </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
          <img src="../../images/menu3.png" alt="" srcset="">
        <div class="mui-media-body">商品购买</div>
      </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
           <img src="../../images/menu4.png" alt="" srcset="">
        <div class="mui-media-body">留言反馈</div>
      </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
          <img src="../../images/menu5.png" alt="" srcset="">
        <div class="mui-media-body">视频专区</div>
      </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <a href="#">
          <img src="../../images/menu6.png" alt="" srcset="">
        <div class="mui-media-body">联系我们</div>
      </a>
    </li>
  </ul>
  </div>
</template>

<style lang = 'scss' scoped>
/* 设置轮播图的高度为200px */
.mint-swipe {
  height: 200px;
  /* .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: darkcyan;
    }
  } */
  img {
    height: 100%;
    width: 100%;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    img{
        height: 60px;
        width: 60px;
    }
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 10px;
}

</style>

<script>
import { Toast } from "mint-ui"; //这里不懂为什么再次导入一次，不是在入口文件已经导入一次了！？

export default {
  data() {
    return {
      lunboList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http
        .get("http://api.cms.liulongbin.top/api/getlunbo")
        .then(result => {
          // console.log(result.body);
          if (result.body.status === 0) {
            // Toast('加载失败');
            this.lunboList = result.body.message;
          } else {
            // console.log('获取失败');
            Toast("加载失败");
          }
        });
    }
  }
};
</script>