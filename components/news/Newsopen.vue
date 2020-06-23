<template>
  <div class = "bigBox">
    <div class="title">{{  list.title}}</div>
    <div class="subtitle">
      <span>发表时间:{{list.add_time | timeFormat}}</span>
      <span>点击 {{list.click}} 次</span>
    </div>
    <hr />
    <div class="content" v-html='list.content'></div>
  </div>
</template>

<style lang="scss" scoped>
.bigBox{
    //你敢信，margin 的赋值中间不能有逗号？
    padding: 0  4px;
    .title{
        font-size: 16px;
        color: red;
        text-align: center;
        margin:15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        span{
            color: blue;
            font-size: 12px;
        }
    }
}
</style>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id,
            list:{}
        }
    },
    created(){
        this.openNews()
    },
    methods:{
        openNews(){
            this.$http.get('http://api.cms.liulongbin.top/api/getnew/' + this.id).then(result =>{
                if(result.body.status === 0){
                    this.list = result.body.message[0]
                }else{
                    Toast('加载失败')
                }
            })
        }
    }
}
</script>