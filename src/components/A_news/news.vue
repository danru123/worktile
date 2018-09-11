<template>
    <div class="new">
        <div class="new_left">
            <div class="new_top">
                <span>消息<img src="../../assets/1.png"></span>
                <img src="../../assets/2.png" class="img1">
            </div>
            <input type="text" placeholder="搜索成员、消息">
            <ul class="new_nav">
                <li v-for="(item,index) of vList" :class="{cur : $route.name.indexOf(item.title) != -1}">
                    <img :src="item.img">
                    <!-- <img src="../../assets/6.png"> -->
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
                    title:'项目助手',
                    url:'/A_news/new_adriver/',
                    img:'/dist/3.png'
                },
                {
                    title:'小特机器人',
                    url:'/A_news/new_brobot/',
                    img:'/dist/4.png'
                },
                {
                    title:'企业公告',
                    url:'/A_news/new_ccom/',
                    img:'/dist/6.png'
                },
                {
                    title:'日程助手',
                    url:'/A_news/new_eday/',
                    img:'/dist/5.png'
                }
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
    .new{
        background: #fbfbfb;
        position: relative;
        width: calc(100% - 70px);
        overflow: hidden;
        height: 100%;
        .new_left{
            width: 240px;
            border-right: 1px solid #ccc;
            float: left;
            .new_nav{
                width: 80%;
                height: 100%;
                margin-top: 15px;
            }
            .new_nav li{
                width: 114%;
                height: 40px;
                line-height: 35px;
                text-align: left;
                padding-left: 20px;
                img{
                    width: 25px;
                    height: 25px;
                    border-radius: 24px 24px;
                    vertical-align: middle;
                    padding-right: 10px;
                }
                a{
                    color: #333;
                    font-size: 14px;
                }
            }
            input{
                margin-left: 20px;
                width: 80%;
                height: 35px;
                border-radius: 15px;
                outline: none;
                padding-left: 10px;
                margin-top: -10px;
                border: none;
                background-color: #f3f3f3;
            }
            .new_top{
                padding:20px;
                width: 80%;
                height: 40px;
                .img1{
                    display: inline-block;
                    width: 22px;
                    height: 22px;
                    margin-left: 10px;
                    vertical-align: middle;
                    float: right;
                }
                span{
                    color: #333;
                    font-size: 16px;
                    img{
                        display: inline-block;
                        width: 15px;
                        height: 22px;
                        margin-left: 10px;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
    .new_nav li.cur{
        background: #e7f9f6;
        border-right: 3px solid #22d7bb;
    }
    .new_nav li.cur a{
        color: #22d7bb!important;
    }
    .rv{
        float: left;
        margin-top: 20px;
    }
</style>
