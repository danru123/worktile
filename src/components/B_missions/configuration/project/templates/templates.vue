<template>
    <div class="module">
        <div class="left">
            <i class="iconfont icon-sousuo1"></i>
            <input type="text" placeholder="搜索项目模板" >
            
        </div>
        <button class='she'>
            <i class='iconfont icon-peizhizhongxin'></i>
            类型管理
        </button>
        <button class='xin' @click='kai'>
            <i class='iconfont icon-hao'></i>
            新建模板
        </button>
        
        <div class="pad">
            <table>
                <thead>
                    <tr>
                        <th style="width:20%">项目模板</th>
                        <th style="width:30%">备注</th>
                        <th style="width:15%">类型</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="item of arr">
                        <td style="text-align:left">
                            <i class='iconfont' :class='item.i'></i>
                            {{item.xiangmu}}
                        </td>
                        <td style="text-align:left">
                            {{item.beizhu}}
                        </td>
                        <td style="text-align:left">
                            {{item.leixing}}
                        </td>
                        <td style="">
                            <span style="background: #22d7bb;padding: 5px 10px;font-size: 12px;border-radius: 3px;color: #fff;box-sizing: border-box;">
                                {{item.zhuangtai}}
                            </span>
                        </td>
                        <td>
                            <span class='p'>
                                <i class='iconfont icon-peizhizhongxin1'></i>
                                配置
                            </span>
                            <span>
                                <i class='iconfont icon-wenjian2'></i>
                            </span>
                            <span>
                                <i class='iconfont icon-bianji'></i>
                            </span>
                            <span>
                                <i class='iconfont icon-shanchu'></i>
                            </span>
                        </td>
                    </tr>
                    <tr v-for="item of L">
                        <td style="text-align:left">
                            <i class='iconfont' :class='item.m'></i>
                            {{item.n}}
                        </td>
                        <td style="text-align:left">
                            {{item.b}}
                        </td>
                        <td style="text-align:left">
                            {{item.l}}
                        </td>
                        <td style="">
                            <span style="background: #22d7bb;padding: 5px 10px;font-size: 12px;border-radius: 3px;color: #fff;box-sizing: border-box;">
                                已启用
                            </span>
                        </td>
                        <td>
                            <span class='p'>
                                <i class='iconfont icon-peizhizhongxin1'></i>
                                配置
                            </span>
                            <span>
                                <i class='iconfont icon-wenjian2'></i>
                            </span>
                            <span @click='geng(index)'>
                                <i class='iconfont icon-bianji'></i>
                            </span>
                            <span @click="del(index)">
                                <i class='iconfont icon-shanchu'></i>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="b" v-show='isShow'>
            <div class="b-t">
                <span>新建项目模板</span>
                <a href="javascript:;" ref='x' @click='close'>x</a>
            </div>
            <div class="b-b">
                <div>
                    <span>模板名称</span>
                    <input type="text" name="" v-model='name'>
                </div>
                <div>
                    <span>模板类型</span>
                    <input type="text" name="" v-model='lei'>
                </div>
                <div style="margin-left: 32px;">
                    <span>备注</span>
                    <input type="text" name="" v-model='bei'>
                </div>
                <div style="margin-left: 32px;">
                    <span>图标</span>
                    <ul>
                        <li v-for='(item,index) of tu' @click='bian(item,index)' :class='{active:index==num}'>
                            <i class="iconfont" :class='item.i'></i>
                        </li>
                    </ul>
                </div>
                <button class="t" @click='b'>确定</button>
                <button class="f" @click='close'>取消</button>
            </div>
        </div>

       <!--  <div class="bs" v-show='isShows'>
            <div class="b-t">
                <span>新建项目模板</span>
                <a href="javascript:;" ref='x' @click='close'>x</a>
            </div>
            <div class="b-b">
                <div>
                    <span>模板名称</span>
                    <input type="text" name="" v-model='name'>
                </div>
                <div>
                    <span>模板类型</span>
                    <input type="text" name="" v-model='lei'>
                </div>
                <div style="margin-left: 32px;">
                    <span>备注</span>
                    <input type="text" name="" v-model='bei'>
                </div>
                <div style="margin-left: 32px;">
                    <span>图标</span>
                    <ul>
                        <li v-for='(item,index) of tu' @click='bian(item,index)' :class='{active:index==num}'>
                            <i class="iconfont" :class='item.i'></i>
                        </li>
                    </ul>
                </div>
                <button class="t" @click='b'>确定</button>
                <button class="f" @click='close'>取消</button>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr:[
                {
                    i:'icon-huojian',
                    xiangmu:'事物处理',
                    beizhu:'适用于最简单的事务管理',
                    leixing:'研发管理项目',
                    zhuangtai:'已启用'
                },
                {
                    i:'icon-ceshiguanli',
                    xiangmu:'项目管理',
                    beizhu:'适用于通用的项目管理',
                    leixing:'通用',
                    zhuangtai:'已启用'
                },
                {
                    i:'icon-huojian',
                    xiangmu:'敏捷开发',
                    beizhu:'适用于敏捷研发管理，包括迭代、需求和缺陷',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    i:'icon-quexianguanli',
                    xiangmu:'缺陷管理',
                    beizhu:'适用于缺陷管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    i:'icon-ceshiguanli',
                    xiangmu:'测试管理',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
            ],
            tu:[
                {
                    i:"icon-huojiancopy"
                },
                {
                    i:"icon-quexianguanli"
                },
                {
                    i:"icon-kanban"
                },
                {
                    i:"icon-xiangmu1"
                },
                {
                    i:"icon-woderenwu"
                }
            ],
            num:0,
            isShow:false,
            isShows:false,
            name:'',
            lei:'',
            bei:'',
            L:[],
            items:''
        }
    },
    methods:{
        bian(item,index){
            this.num = index;
            this.items = item.i
        },
        close(){
            this.isShow = !this.isShow
        },
        kai:function(){
            this.isShow = true;
        },
        b(){
            this.L.push({
                n:this.name,
                l:this.lei,
                b:this.bei,
                m:this.items
            })
            localStorage.setItem('L',JSON.stringify(this.L));
            this.isShow = !this.isShow
        },
        del(index){
            this.L.splice(index,1);
            localStorage.setItem('L',JSON.stringify(this.L));
        },
        geng(index){
            this.isShows = true;
            this.L.splice(index,1);
            localStorage.setItem('L',JSON.stringify(this.L));
        }
    },
    created(){
        var local = JSON.parse(localStorage.getItem('L'));
        for(var i=0;i<local.length;i++){
            this.L.push(local[i])
        }
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
    }
    .module{
        overflow: hidden;
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
        background-color: #fff;
        margin-top:20px;
    }
    .left{
        position: relative;
        float: left;
        width: 300px;
    }
    .left .icon-sousuo1{
        position: absolute;
        left: 10px;
    }
    .left input{
        padding: 8px 0;
        padding-left: 34px;
        padding-right: 14px;
        display: block;
        width: 100%;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        box-sizing: border-box;
        outline: none;
    }
    .left input:hover{
        border-color: #22d7bb;
    }
    .left input:focus{
        border-color: #22d7bb;
    }      
    .pad{
        width: 100%;
        box-sizing: border-box;
        padding-top: 20px;
        background-color: #fff;
        float: left;
        
    }
    .pad table{
        width: 100%;
        box-sizing: border-box;
        border-collapse: collapse;
        
    }
    .pad table thead th{
        background-color: #f3f3f3;
        vertical-align: bottom;
        font-weight: 400;
        border-bottom: 1px solid #eee;
    }
    .pad table,th,td,tr{
        border: 1px solid #eee;
    }
    .pad th,td{
        font-size: 14px;
        padding: 9px 15px;
        display: table-cell;
        text-align: center;
        color: #666;
        line-height:30px;
    }
    .pad td .p{
        color: #22d7bb;
        font-size:14px;
    }
    .pad img{
        vertical-align: -5px;
    }
    .icon-huojian{
        color: #99d561;
    }
    .icon-quexianguanli{
        color: #f85b59;
        font-size: 21px;
        margin-left: -5px;
    }
    .icon-ceshiguanli{
        color: #69b464;
    }
    .pad td span{
        margin: 0 8px;
        color:#aaa
    }
    button{
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: .469rem 26px;
        font-size: .875rem;
        line-height: 1.5;
        min-width: 106px;
        border-radius: 1.25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        cursor:pointer;
    }
    .xin{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
        outline:none;
        float:right;
        margin-right:20px;
    }
    .she{
        float:right;
        padding: .407rem 22px;
        border-radius: 1.25rem;
        font-size: .875rem;
        min-width: 70px;
        line-height: 1.5;
        color: #888;
        background-color: transparent;
        background-image: none;
        border-color: #ddd;
    }

    .b,.bs{
        width: 660px;
        height: 380px;
        background-color:#fff;
        position: relative;
        margin: 0 auto;
        border: 1px solid rgba(0,0,0,.2);
        border-radius: .3rem;
    }
    .b-t{
        align-items: center;
        height: 50px;
        position: absolute;
        width: 100%;
        border-bottom:1px solid #eee;
        line-height: 50px;
    }
    .b-t span{
        float:left;
        margin-left:20px;
    }
    .b-t a{
        float:right;
        text-decoration: none;
        color:#000;
        margin-right:20px;
    }
    .b-b{
        position: absolute;
        float: left;
        width: 100%;
        height: 100%;
        top: 50px;
    }
    .b-b div{
        float: left;
        padding-left: 70px;
        width: 100%;
        margin: 15px auto;
    }
    .b-b div span{
        margin: 0 20px;
        display: inline-block;
        float: left;
        font-size: 14px;
    }
    .b-b div input{
        display: inline-block;
        width: 50%;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        float: left;
        height: 38px;
        outline: none;
    }
    .icon-huojiancopy{
        color: #99d561;
    }
    .icon-quexianguanli{
        color: #f85b59;
    }
    .icon-kanban{
        color: #28bea4;
    }
    .icon-xiangmu1{
        color: #69b464;
    }
    .icon-woderenwu{
        color: #508df6;
    }
    .b-b ul li{
        float:left;
        margin-right: 10px;
        margin-bottom: 10px;
        display: inline-block;
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        cursor: pointer;
        border: 1px solid #eee;
        border-radius: 3px;
        -webkit-transition: all .5s;
        transition: all .5s;
    }
    .b-b ul li.active{
        border: 1px solid #22d7bb;
    }
    .t{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
        outline: none;
        float: left;
        margin-left:23%;
    }
    .f{
        color: #aaa;
        background-color: transparent;
        float: left;
        outline: none;
    }
</style>