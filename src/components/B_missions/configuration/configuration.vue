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
        <!-- <div class="b">
        	<div class="tu">
        		<img src="../../../assets/B-k.png">
        	</div>
        </div> -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
	data(){
		return{
			cen:[
				{
					title:'作业',
        			url:"/B_missions/configuration/project",
				},
				{
					title:'任务',
        			url:"/B_missions/configuration/test",
				},
				{
					title:'安全',
        			url:"/B_missions/configuration/security",
				},
				{
					title:'高级',
        			url:"/B_missions/configuration/advance",
				},
				{
					title:'全局',
        			url:"/B_missions/configuration/global",
				}
			]
		}
	}
}
</script>

<style scoped>
	div{
		height:100%;
	}
	*{
		box-sizing: border-box;
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
	.b{
    	flex: 1;
	    display: flex;
	    flex-direction: column;
	    padding: 15px;
	    height: calc(100% - 50px);
	}
	.b .tu{
		width: 100%;
		height:100%;
    	background: #fff;
    	position: relative;
	}
	.b .tu img{
		position: absolute;
		top:45%;
		left:45%;
	}
	
</style>
