<style scoped>
    .driver_wrap{
        width:calc(100% - 70px);
        height: 100%;
        position:fixed;
        left:70px;
        top:0;
        background: url(https://cdn.worktile.com/pro/image/app/desktop.background/desktop-5.jpg?v=7.0.3+20180830) 0% 0% / cover;
    }
    .driver_left{
        /* position: relative; */
        width: 240px;
        height: 100%;
        background: rgba(253,253,253,.95);
        border-right: 1px solid #ddd;
        transition: width .2s ease-in-out;
    }
    input{
        outline:none;
    }
    .dl_header{
        float: left;
        margin: 0 20px;
        color: #333;
        line-height: 50px;
        font-size: 16px;
    }
    .search_area{
        padding: 0 20px 10px;
        position: relative;
    }
    .search_area i[data-v-2c2bb754] {
        position: absolute;
        top: 59px;
        left: 30px;
        color: #8f8f8f;
        z-index: 111;
    }
    .search_area input{
        width:90%;
        background: #f3f3f3;
        box-shadow: none;
        color: #666;
        height: 36px;
        font-size: 14px;
        padding-left: 28px;
        border-radius: 20px;
        border: 1px solid transparent;
    }
    .search_area input:hover {
        background: #fdfdfd;
        border: 1px solid #ddd;
    }
    .search_area input:focus {
        background: #fdfdfd;
        border: 1px solid #22d7bb;
    }
    .box .item{
        width: 215px;
        height:41px;
        line-height: 41px;
        padding-left: 25px;
        margin-left:1px;
        font-size: 14px;
    }
    .item:hover{
        background: 0 0!important;
        box-shadow: 0 0 8px 2px #eee;
    }
    .icon-xiangyoujiantou{
        color: #aaa;
        display: inline-block;
        width: 14px;
        vertical-align: middle;
        font-size: 12px;
    }
    .icon-wenjianjiabiheicon{
        margin-right: 3px;
        font-size: 14px;
        vertical-align: middle;
        color:rgb(34, 215, 187);
    }
    .box ul:nth-child(2) .icon-wenjianjiabiheicon{
        color: rgb(249, 105, 170);
    }
</style>
<template>
    <div class="driver_wrap">
        <div class="driver_left">
            <div class="dl_header">网盘</div>
            <div class="search_area">
                <i class="iconfont icon-fangdajing"></i>
                <input type="text" class="" placeholder="搜索文件、文件夹">
            </div>
            <div class="box">
                <ul class="item" v-for="item of gcList" @click="routeGo(item.url)">
                    <i class="iconfont icon-xiangyoujiantou"></i>
                    <i class="iconfont icon-wenjianjiabiheicon"></i>
                    {{item.title}}  
                </ul>
                <div class="item"><i class="iconfont icon-xiangyoujiantou"></i>成员</div>
                <div class="item"><i class="iconfont icon-xiangyoujiantou"></i>标签</div>
                <ul class="item" v-for="item of gcList1" @click="routeGo(item.url)">
                    <i class="iconfont"></i>
                    {{item.title}}
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                gcList:[
                    {
                        title:'企业网盘',
                        url:'/D_driver/qiye'
                    },
                    {
                        title:'个人网盘',
                        url:'/D_driver/my'
                    },
                    
                ],
                gcList1:[
                    {
                        title:'与我共享',
                        url:'/D_driver/share'
                    },
                    {
                        title:'回收站',
                        url:'/D_driver/trash'
                    }
                ]
            }
        },
        methods:{
            routeGo(url){
                this.$router.push({path:url});
            }
        }
    }
</script>

