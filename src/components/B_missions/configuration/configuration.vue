<template>
    <div>
        <div class="t">
        	<i class="iconfont icon-peizhizhongxin1"></i>
        	配置中心
        	<ul>
        		<li v-for='(item,index) of cen' :class="{active:$route.name.indexOf(item.title) != -1}">
        			<router-link :to='item.url'>
						{{item.title}}
					</router-link>
        		</li>
        	</ul>
        </div>
		<div class='thy'>
			<div class='thy-layout'>
				<router-view></router-view>
			</div>
		</div>
        
    </div>
</template>

<script>
export default {
	data(){
		return{
			cen:[
				{
					title:'项目',
        			url:"/B_missions/configuration/project/",
				},
				{
					title:'任务',
        			url:"/B_missions/configuration/task/",
				},
				{
					title:'安全',
        			url:"/B_missions/configuration/security/",
				},
				{
					title:'高级',
        			url:"/B_missions/configuration/advance/",
				},
				{
					title:'全局',
        			url:"/B_missions/configuration/global/",
				}
			]
		}
	}
}
</script>

<style scoped>
	*{
		box-sizing: border-box;
	}
	a{
		text-decoration: none;
	}
	ul{
		list-style: none!important;
	}
	.t{
		height:50px;
		width: 100%;
		background: #fff;
		font-size:16px;
		line-height: 50px;
		padding-left: 20px;
		position: relative;
	}
	.t i{
		font-size:14px;
		color: #22d7bb;
		line-height: 50px;
		margin-right:10px;
	}
	.t ul{
		width: 48%;
	    float: right;
	    overflow: hidden;
	    height: 50px;
	    text-align: center;
	    position: absolute;
	    left: 31%;
	    top: 0;
	}
	.t ul li{
		margin-right: 20px;
	    color: #333;
	    width: 80px;
	    padding: 0px 17px;
	    line-height: 47px;
	    float: left;
	    border-bottom: 3px solid transparent;
	}
	.t ul li.active{
    	border-bottom: 3px solid #22d7bb;
	}
	.t ul li.active a{
		color: #22d7bb;
	}
	.t ul li a{
		color:#333;
		font-size: 14px;
	}
	.thy{
		display: flex;
		flex-direction: column;
		flex: auto;
		height: 100%;
		background: 0 0;
	}
	.thy .thy-layout{
		height: 38px;
		line-height: 38px;
		display: flex;
		flex: 0 0 auto;
		background: rgba(253,253,253,.97);
		padding: 0 15px;
	}
	
</style>
