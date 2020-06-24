<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr />
    <textarea placeholder="请输入评论内容(120字)" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-box">
      <!-- 评论的每一项 -->
      <div class="cmt-item">
        <!-- 评论的头部 -->
        <div class="cmt-title">第1楼&nbsp;&nbsp;用户: 匿名用户&nbsp;&nbsp;发表时间：2020-6-23</div>
        <!-- 评论的主体 -->
        <div class="cmt-body">4564321635135</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
  data() {
    return {
        list:'',
        pageIndex: 1
    };
  },
  created(){
      this.getComment();
  },
  methods:{
    //   这里数据接口的内容为空，没办法。。。
      getComment(){
          this.$http.get('http://api.cms.liulongbin.top/api/getcomments/'+ this.id + '?pageindex=' + this.pageIndex ).then(
              result =>{
                  if(result.body.status === 0){
                      this.list = result.body.message;
                  }else{
                      Toast('评论加载失败');
                  }
              }
          )
      }
  },
  props:['id']
//   子组件用自定义属性接收父组件传值
};
</script>
<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 13px;
    height: 85px;
    margin: 0;
  }
  .cmt-box {
    margin: 5px 0;
    .cmt-item {
      .cmt-title {
        background-color: #ccc;
        font-size: 13px;
        line-height: 30px;
      }
      .cmt-body {
        text-indent: 2em;
      }
    }
  }
}
</style>