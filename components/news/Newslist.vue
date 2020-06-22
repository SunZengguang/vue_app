<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in newsList' :key="item.id">
					<router-link :to="'/home/news/newsopen/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span> 时间：{{item.add_time|timeFormat}}</span>
                                <span> 点击：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
import { Toast } from "mint-ui"; //这里不懂为什么再次导入一次，不是在入口文件已经导入一次了！？
export default {
    data() {
        return { newsList : ''}
    },
    created(){
        this.getNews();
    },
    methods: {
        getNews(){
            this.$http.get('http://api.cms.liulongbin.top/api/getnewslist').then((result) =>{
                if(result.body.status === 0){
                this.newsList = result.body.message;
                }else{
                Toast("加载失败");
                }
            })
        }
    },
   
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{font-size: 14px;}
        .mui-ellipsis{font-size: 12px;display:flex;justify-content: space-between;color:blue;}
    }
}



</style>