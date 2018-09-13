<template>
    <div class='box'>
        <ul class='u'>
            <li v-for='(item,index) of cen' :class="{active:$route.name.indexOf(item.title) != -1}">
                <router-link :to='item.url'>
                    {{item.title}}
                </router-link>
                <span>|</span>
            </li>
        </ul>
        <div class="t">
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
    export default {
        data(){
            return{
                cen:[
                    {
                        title:'活动任务',
                        url:"/B_missions/my/following/active",
                    },
                    {
                        title:'完成任务',
                        url:"/B_missions/my/following/finish",
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

    	margin-right: 7px;
        width:100%;
        height: 38px;
		line-height: 38px;
		display: flex;
		flex: 0 0 auto;
		background: rgba(253,253,253,.97);
		padding: 0 15px;
        position: relative;
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
    .t{
        position: absolute;
        top: 50px;
    }
</style>