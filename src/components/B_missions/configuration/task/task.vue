<template>
    <div class='box'>
        <ul class='u'>
            <li v-for='(item,index) of cen' :class="{active:$route.name.indexOf(item.title) != -1}">
                <router-link :to='item.url'>
                    {{item.title}}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                cen:[
                    {
                        title:'任务类型',
                        url:"/B_missions/configuration/task/type-group",
                    },
                    {
                        title:'状态管理',
                        url:"/B_missions/configuration/task/state",
                    },
                    {
                        title:'属性管理',
                        url:"/B_missions/configuration/task/prop",
                    },
                    {
                        title:'数据管理',
                        url:"/B_missions/configuration/task/datasource",
                    },
                    {
                        title:'标签管理',
                        url:"/B_missions/configuration/task/tag-mode",
                    },
                    {
                        title:'优先级管理',
                        url:"/B_missions/configuration/task/priority-mode",
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    ul{
        list-style: none!important;
    }
    .box{
		margin-left: 26px;
    	margin-right: 7px;
        width:100%;
	}
    .box .u{
        overflow:hidden
    }
	.box .u li {
		margin-right: 20px;
		position: relative;
		text-align:center;
		display:block;
        float:left;
        font-size:14px;
	}
    .box .u li span{
        margin-left:15px;
        color:#eee;
    }
    .box .u li a{
		color: #888;
    }
    .box .u li:hover a{
        color:#22d7bb;
    }
    .box .u li.active a{
        color: #22d7bb;
    }
</style>