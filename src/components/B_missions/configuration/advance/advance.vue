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
                        title:'提醒管理',
                        url:"/B_missions/configuration/advance/reminder-mode",
                    },
                    {
                        title:'通知管理',
                        url:"/B_missions/configuration/advance/notification-mode",
                    },
                    {
                        title:'事件',
                        url:"/B_missions/configuration/advance/event",
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