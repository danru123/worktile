<style scoped>
    .driver_wrap{
        width:calc(100% - 70px);
        height: 100%;
        position:fixed;
        left:70px;
        top:0;
        background: url(https://cdn.worktile.com/pro/image/app/desktop.background/desktop-5.jpg?v=7.0.3+20180830) 0% 0% / cover;
    }
    ul{
        list-style:none;
    }
    .driver_left{
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
        width: 240x;
        line-height: 41px;
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
    .box ul a{
        display:block;
        text-decoration: none;
        color: #333;
        padding-left:15px;
    }
    .router-link-active{
        color: #22d7bb;
        background: #e7f9f6;
        border-right: 4px solid #22d7bb;
        text-decoration: none;
        width: 220px;
        height: 100%;
        display:block;
    }
    .item1{
        padding-left:15px;
    }
    li.item a{
        width: 181px;
        padding-left:53px;
    }
    .rotate{
        transition:all .5s;
        transform: rotate(45deg);
    }
    .rotate1{
        transition:all .5s;
        transform: rotate(45deg);
    }
    .box ul li:nth-child(1) .icon-wenjianjiabiheicon{
        color: rgb(255, 210, 52)!important;
    }
    .addbtn{
        float: right;
        margin-top: 14px;
        margin-right: 14px;
        display: inline-block;
        width: 15px;
        height: 15px;
        border: 1px solid #ccc;
        text-align: center;
        line-height: 14px;
        border-radius: 20px;
        cursor: pointer;
        display:none;
    }
    .item1:hover .addbtn{
        display:block;
    }
    .modalDiaLog{
        position:fixed;
        top: 0;
        left: 0;
        width: 100%;
        height:100%;
        background-color: rgba(0,0,0,.1);
        z-index:2222;
    }
    .modi{
        width:660px;
        height:410px;
        background-color: #fff;
        border: 0 solid rgba(0,0,0,.2);
        border-radius: .3rem;
        box-shadow: 0 0 1.5rem rgba(0,0,0,.4);
        outline: 0;
        margin:10% auto;
    }
    .modal-header {
        padding: 0 1.875rem;
        min-height: 1.5;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid #eee;
    }
    .modal-header h3 {
        font-size: 1rem;
        font-weight: 500;
    }
    .modal-close{
        color: #ddd;
        line-height: 50px;
        float:right;
        font-size: 1.5rem;
        text-decoration: none;
    }
    .modal-body{
        padding-left: 30px;
        padding-right: 30px;
        height: 360px;
        overflow: auto;
        padding: 20px 0;
    }
    .meta{
        color: #c1c1c1;
    }
    .lc-search-container {
        position: relative;
        width: 300px;
        padding: 10px 0;
    }
    .form-control{
        display: block;
        width: 180%;
        height: 40px;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        font-size: .875rem;
        padding-left: 34px;
        position: absolute;
        top: 0px;
    }
    .i1{
        display: block;
        color: #22d7bb;
        position: absolute;
        font-style: normal;
        right: -277px;
        font-size: 30px;
        top: -3px;
    }
    .ic{
        z-index:111;
        position: absolute;
        left: 10px;
        top: 2px;
    }
    .no{
        margin-top: 92px;
        text-align: center;
    }
    .icons1{
        font-size: 70px;
        color:#ccc;
    }
    .no_bq{
        color: #cacaca;
        font-size: .875rem;
    }
    .modal-cy{
        width: 600px;
        height: 400px;
        margin-top: 13px;
    }
    .modis{
        height: 456px;
        margin-top:8%;
    }
    .modal-cy-left{
        position: relative;
        max-width: 300px;
        float:left;
    }
    .modal-cy-ul{
        min-width: 250px;
        min-height: 45px;
        color: #888;
        padding: 0 20px;
        text-align: center;
        border-bottom: solid 1px #f3f3f3;
    }
    li{
        width: 120px;
        height: 45px;
        font-size:16px;
        position: relative;
        color: #ddd;
        border: none;
        cursor: pointer;
        list-style: none;
        float:left;
    }
    .divider{
        width: 0;
        height: 14px;
        overflow: hidden;
        border-right: solid 1px #eee;
        margin-top: 13px;
    }
    .member-panel-body{
        margin-top: -1px;
        padding: 20px 0;
        height: 294px;
        overflow: auto;
        border: 1px solid #f3f3f3;
        border-radius: 5px;
    }
    .lcs{
        position: relative;
        width: 300px;
        padding: 0;
        width: auto;
        margin-right: 20px!important;
    }
    .icc{
        position: absolute;
        top: 1px;
        left: 40px;
        color: #aaa;
    }
    .search_box{
        border-radius: 40px;
        padding-left: 34px;
        display: block;
        width: 238px;
        height:38px;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        border: 1px solid #eee;
        padding: .469rem 1.875rem;
        font-size: .875rem;
        margin-left:30px;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .member-panel-body p{
        color:#ccc;
        padding-left:30px;
    }
    .member-panel-body  li{
        position: relative;
        list-style-type: none;
        cursor: pointer;
        display: block;
        margin-left:20px;
        padding: 5px 10px;
        line-height: 30px;
        color: #333;
        border-radius: 3px;
    }
    .names{
        width: 24px;
        height:24px;  
        background-color: rgb(239, 126, 222);
        text-align:center;
        line-height:24px;
        border-radius: 50px;
        font-size: 12px;
        color: #fff;
    }
    .member-panel-body  li .spans{
        display: block;
        position: absolute;
        left: 44px;
        top: 1px;
    }
    .member-arrow{
        width: 40px;
        top: 220px;
        text-align: center;
        font-size: 26px;
        color: #ddd;
    }
    .member-selected{
        width: 280px;
        height:404px;
        float:right;

    }
    .number-s{
        min-width: 250px;
        min-height: 45px;
        color: #888;

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
                <ul class="item" v-for="item of gcList" >
                    <!-- 做跳转 -->
                    <router-link class="itema" :to="item.url">
                        <i @click="show=!show" class="iconfont icon-xiangyoujiantou" :class="{rotate:show}"></i>
                        <i class="iconfont icon-wenjianjiabiheicon"></i>
                        {{item.title}}
                    </router-link>
                    <li v-show="show" class="item" v-for="item of gcList2" >
                        <!-- 做跳转 -->
                        <router-link :to="item.url">
                            <i class="iconfont ico icon-wenjianjiabiheicon"></i>
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
                <ul class="item" v-for="item of gcList11" >
                    <!-- 做跳转 -->
                    <router-link class="itema" :to="item.url">
                        <i :class="{rotate:showi}" @click="showi=!showi" class="iconfont icon-xiangyoujiantou"></i>
                        <i class="iconfont icon-wenjianjiabiheicon"></i>
                        {{item.title}}
                    </router-link>
                    <li v-show="showi" class="item" v-for="item of gcList02" >
                        <!-- 做跳转 -->
                        <router-link :to="item.url">
                            <i class="iconfont ico icon-wenjianjiabiheicon"></i>
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>               
                <div class="item item1">
                    <i class="iconfont icon-xiangyoujiantou"></i>成员
                    <span class="addbtn"  @click.stop="toggles()">+</span>
                    <div v-show="dialogs" class="modalDiaLog">
                        <div class="modi modis">
                            <div class="modal-header">
                                <a href="javascript:;" @click.stop="toggles()" class="modal-close">x</a>
                                <h3 class="modal-title" >设置关注的成员</h3>
                                <div class="modal-cy">
                                    <div class="modal-cy-left">
                                        <ul class="modal-cy-ul">
                                            <li>团队</li>
                                            <li class="divider"></li>
                                            <li>部门</li>
                                        </ul>
                                        <div class="member-panel-body">
                                            <div class="lcs">
                                                <i class="iconfont icc icon-fangdajing"></i>
                                                <input type="search" class="search_box" placeholder="搜索成员...">
                                            </div>
                                            <p>全部联系人</p>
                                            <li>
                                                <div class="names">M</div>
                                                <span class="spans">M</span>
                                            </li>
                                        </div>
                                    </div>
                                   <div class="member-selected">
                                        <div class="number-s">
                                            已选择成员 (0)
                                        </div>
                                        <div class="member-panel-body"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item item1">
                    <i class="iconfont icon-xiangyoujiantou"></i>标签
                    <span class="addbtn"  @click.stop="toggle()">+</span>
                    <div v-show="dialog" class="modalDiaLog">
                        <div class="modi">
                            <div class="modal-header">
                                <a href="javascript:;" @click.stop="toggle()" class="modal-close">x</a>
                                <h3 class="modal-title" >标签管理</h3>
                                <div class="modal-body">
                                    <div class="meta">提示：企业全局标签对所有成员均可见，请谨慎添加、编辑和删除标签。</div>
                                    <div class="lc-search-container">
                                        <i class="iconfont ic icon-fangdajing"></i>
                                        <input type="search" class="form-control" placeholder="搜索标签...">
                                        <i class="i1">+</i>
                                    </div>
                                    <div class="no">
                                        <i class="iconfont icons1 icon-wuwenjian"></i>
                                        <p class="no_bq">没有标签</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul  class="item" v-for="item of gcList1" >
                    <!-- 做跳转 -->
                    <router-link class="itema" :to="item.url">
                        <i class="iconfont " :class="item.class"></i>
                        {{item.title}}
                    </router-link>
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
                        url:'/driver/qiye'
                    }
                ],
                gcList11:[
                    {
                        title:'个人网盘',
                        url:'/driver/my'
                    },
                ],
                gcList1:[
                    {
                        title:'与我共享',
                        url:'/driver/share',
                        class:'icon-gongxiang'
                    },
                    {
                        title:'回收站',
                        url:'/driver/trash',
                        class:'icon-shanchu'
                    }
                ],
                gcList2:[
                    {
                        title:'公司制度',
                        url:'/driver/qiye/zhidu'
                    },
                    {
                        title:'资料共享',
                        url:'/driver/qiye/gongxiang'
                    },
                    {
                        title:'缺陷管理',
                        url:'/driver/qiye/guanli'
                    },
                ],
                gcList02:[
                    {
                        title:'person-child',
                        url:'/driver/my/person-child'
                    }
                ],
                data1: [
                    {name: "成员" },
                    {name: "标签" }
                ],
                show:false,
                showi:false,
                dialog:false,
                dialogs:false,
                cIndex: -1,
            }
            },
            methods:{
                toggle(){
                    this.dialog = !this.dialog;
                },
                toggles(){
                    this.dialogs = !this.dialogs;
                }
            }
    }
</script>

