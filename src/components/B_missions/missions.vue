<template>
<<<<<<< HEAD
    <div>
        <h1>我是项目</h1>
=======
    <div class="main-body">
       	<div class="wtLa">
       		<div class="C-l">
       			<div class="header">
       				<span>项目</span>
       				<i class="iconfont icon-tianjiaadd144"></i>
       			</div>
       			<div class="body-list">
       				<div class="search-area">
       					<i class="iconfont icon-sousuo"></i>
       					<input type="text" placeholder="搜索任务">
       				</div>
       				<ul ref='itemWrapper' class="itemWrapper">
       					<div @click='zhuan()' class="lis">
       						<i class="iconfont icon-right" :class="{'rotate-caret':select}"></i>
       						<a href="javascript:;">工作</a>
       					</div>
       					<div class="box" :style="{height:robotH}">
       						<ul>
       							<li v-for="(item,index) of work" class="work" @click="ac(index)" :class="{active:$route.name.indexOf(item.title) != -1}">
	   								<router-link :to='item.url'>
	   									<i class="iconfont" :class='item.icon'></i>
	   									{{item.title}}
	   								</router-link>
	   							</li>
       						</ul>	
       					</div>
       					<div @click="zhuan1()" class="lis">
       						<i class="iconfont icon-right" :class="{'rotate-caret':select1}"></i>
       						<a href="javascript:;">项目</a>
       					</div>
       					<li v-for="(item,index) of vList" :class="{active:$route.name.indexOf(item.title) != -1}">
       						<router-link :to='item.url'>
       							<i class="iconfont " :class='item.icon'></i>
       							{{item.title}}
       						</router-link>
       					</li>
       				</ul>
       			</div>
       		</div>
       		<div class="C-r">
       			<router-view></router-view>
       		</div>
       	</div>
>>>>>>> lfm
    </div>
</template>

<script>
    export default {
<<<<<<< HEAD
        name: "items"
=======
        data(){
        	return{
        		select:false,
        		select1:false,
        		num:0,
        		robotH:0,
        		vList:[
        			{
        				title:'配置中心',
        				url:"/missions/configuration/",
        				icon:"icon-peizhizhongxin1"
        			},
        			{
        				title:'回收站',
        				url:"/missions/trash/",
        				icon:"icon-huishouzhan"
        			}
        		],
        		// 工作
        		work:[
        			{
        				title:'下属任务',
        				url:"/missions/subordinate/",
        				icon:"icon-xiashurenwu-"
        			},
        			{
        				title:'我的任务',
        				url:"/missions/my/",
        				icon:"icon-woderenwu"
        			},
        		]
        	}
        },
        methods:{
        	zhuan:function(){
            	this.select = !this.select;
            	if(this.robotH==0){
                    this.robotH=this.work.length*42+'px'
                }else{
                    this.robotH=0;
                }
        	},
        	zhuan1:function(){
            	this.select1 = !this.select1
        	},
        	ac(index){
        		this.num = index;
        	}

        },

>>>>>>> lfm
    }
</script>

<style scoped>
<<<<<<< HEAD

=======
	*{
		box-sizing: border-box;
	}
	a{
		text-decoration: none;
	}
	ul{
		list-style: none!important;
	}
	.main-body{
		position: relative;
	    width: calc(100% - 70px);
	    overflow: hidden;
	    display: flex;
	    display: -ms-flexbox;
	    display: -webkit-flex;
	    -ms-flex-direction: row;
	    flex-direction: row;
	    -webkit-box-flex: 1;
	    -ms-flex: 1 1 0px;
	    flex: 1 1 0;
	    -webkit-flex: 1 1 0;
	    background: #eee;
	    float: right;
	    top:0;
	    height:100%;
	}
	.wtLa{
		width: 100%;
		height:100%;
		overflow: hidden;
		display: flex;
	}
	.C-l{
		display: -webkit-flex;
	    -webkit-box-orient: vertical;
	    -webkit-box-direction: normal;
	    -ms-flex-direction: column;
	    flex-direction: column;
	    position: relative;
	    width: 240px;
	    background: rgba(253,253,253,.95);
	    border-right: 1px solid #ddd;
	    -webkit-transition: width .2s ease-in-out;
	    transition: width 1s ease-in-out;
	    height:100%;
	    overflow: hidden;
	}
	.C-l .header{
		height: 50px;
	}
	.C-l .header span{
		float: left;
	    margin: 0 20px;
	    color: #333;
	    line-height: 60px;
	    font-size: 16px;
	}
	.C-l .header a img{
		height: 20px;
	}
	.icon-tianjiaadd144{
		width: 20px;
		float: right;
	    margin: 0 20px;
	    line-height: 60px;
		color: #ddd;
		font-weight:bold;
		transition: all 0.2s ease;
	}
	.icon-tianjiaadd144:hover{
		color: #22d7bb;
		font-weight:bold;
	}
	.C-l .body-list{
		-webkit-box-flex: 1;
	    -ms-flex: 1 1 0px;
	    flex: 1 1 0;
	    -webkit-flex: 1 1 0;
	    overflow: hidden;
	    margin-bottom: 3px;
	}
	.C-l .body-list .search-area{
		padding: 0 20px 10px;
    	position: relative;
	}
	.C-l .body-list .search-area input{
		background: #f3f3f3;
	    color: #caccd5;
	    height: 36px;
	    font-size: 14px;
	    padding-left: 28px;
	    border-radius: 20px;
	    border: 1px solid transparent;
	    display: block;
	    width: 100%;
	    line-height: 1.5;
	    border:none;
	    outline: none;
	    transition: all 0.3s;
	    border: 1px solid transparent;

	}
	.C-l .body-list .search-area input:hover{
		background: #fdfdfd;
		border:1px solid #ccc;
	}
	.C-l .body-list .search-area input:focus{
		background: #fdfdfd;
	    border: 1px solid #22d7bb;
	}

	.C-l .body-list ul .lis a{
		color:#333;
	}

	.C-l .body-list ul li,.C-l .body-list ul .lis{
		font-size:14px;
		width: 240px;
		margin-bottom: 2px;
	    padding: 8px 20px;
	    position: relative;
	    transition: all 0.5s ease;
	}
	.C-l .body-list ul li:hover{
		box-shadow: 0 0 8px 2px #eee;
	}
	.C-l .body-list ul li a{
		font-size:14px;
	    cursor: pointer;
	    color:#333;
	}
	.C-l .body-list ul li .iconfont,.C-l .body-list ul .iconfont{
		color: #aaa;
		font-size:12px;
		transition: all 0.5s ease;
		margin-right: 6px;
	    display: inline-block;
	    width: 14px;
	    vertical-align: middle;
	}
	.icon-sousuo{
		position: absolute;
	    top: 10px;
	    left: 30px;
	    color: #8f8f8f;
	}
	.rotate-caret {
	    -webkit-transform: rotate(45deg);
	    transform: rotate(45deg);
	}
	.C-l .body-list .box{
		width:100%;
		overflow: hidden;
		transition: all 0.5s ease;
	}
	.C-l .body-list .box .work{
		padding:0;
	}
	.C-l .body-list .box .work a{
		color: #666;
	    display: block;
	    padding: 9px 20px 9px 39px;
	    position: relative;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    transition: box-shadow .2s,-webkit-box-shadow .2s;
	    border-right: 4px solid transparent;
	    font-size:14px;
	}
	.active{
		background: #e7f9f6;
	    text-decoration: none;
	    border-right: 4px solid #22d7bb;
	}
	.active a{
	    color: #22d7bb;
	}
	.C-l .body-list .box .work a .iconfont{
		color: #22d7bb;
		display: inline-block;
	    margin-right: 8px;
	    font-size: 15px;
	    position: relative;
	    top: 1px;
	    width:16px;
	    height:24px;
	}
	.C-l .body-list .box .work:hover a{
		background:#fff;
		box-shadow: 0 0 8px 2px #eee;
		color: #22d7bb;
	}
	.C-r{
		width: 100%;
		flex:1 1 0;
		overflow:scroll;
	}
>>>>>>> lfm
</style>