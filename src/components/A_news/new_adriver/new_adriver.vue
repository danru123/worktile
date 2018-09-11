<template>
    <div class="ad_right">
        <div class="adriver_top">
            <span>
                <img src="../../../assets/3.png" alt="">
                项目助手
            </span>
            <ul class="new_nav">
                <li v-for="item of vList" :class="{cur : $route.name.indexOf(item.title) != -1}">
                    <router-link :to='item.url'>{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="rv">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            vList:[
                {
                    title:'未读',
                    url:'/A_news/new_adriver/noread/',
                },
                {
                    title:'已读',
                    url:'/A_news/new_adriver/yesread/',
                },
                {
                    title:'待处理',
                    url:'/A_news/new_adriver/detail/',
                }
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
    .ad_right{
        position: absolute;
        width: 100%;
        height: 100%; 
    }
    .adriver_top{
        width: 100%;
        height: 86px;
        position: absolute;
        top: -12px;
        span{
            line-height: 50px;
            font-size: 16px;
            float: left;
            color: #333;
            padding-left: 15px;
            img{
                vertical-align: middle;
                margin-right: 5px;
            }
        }
        .new_nav {
            padding:0 20px;
            margin-top: 50px;
            li{
                float: left;
                width: 100px;
                height: 34px;
                line-height: 30px;
                text-align: center;
                a{
                    color: #333;
                    font-size: 14px;
                }
            }
        }
    }
    .new_nav li.cur{
        border-bottom: 3px solid #22d7bb;
    }
    .new_nav li.cur a{
        color: #22d7bb!important;
    }
    .rv{
        width: 100%;
        position: absolute;
        top: 75px;
        height: 100%;
    }
</style>
