<template>
    <div class="module">
        <div class="left">
            <i class="iconfont icon-sousuo1"></i>
            <input type="text" placeholder="搜索项目报表" >
        </div>
        <button class='bts'>
            <i class='iconfont icon-hao'></i>
            添加项目组件
        </button>
        <div class="pad">
            <table>
                <thead>
                    <tr>
                        <th style="width:20%">组件名称</th>
                        <th>备注</th>
                        <th>支持平台</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="item of arr">
                        <td style="text-align:left">
                            <img :src="item.i" alt="">
                            {{item.zujian}}
                        </td>
                        <td style="text-align:left">
                            {{item.beizhu}}
                        </td>
                        <td >
                            <i class='iconfont' v-for="(tre,index)  of item.pingtai" :class="tre"></i>
                        </td>
                        <td>
                            <span><i class='iconfont icon-shanchu'></i></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[
                {
                    zujian:'项目概要报表',
                    beizhu:' 展示项目中的基本统计，类型的分布等 ',
                    pingtai:[
                        'icon-diannao2-copy',
                        'icon-iconziti48',  
                        'iconfont icon-anzhuo'
                    ]
                }
                
            ]
        }
    }
}
</script>
<style scoped >
    .module{
        overflow: hidden;
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
        background-color: #fff;
        margin-top:20px;
    }
    .module .left{
        position: relative;
        float: left;
        width: 300px;
    }
    .module .left .icon-sousuo1{
        position: absolute;
        left: 10px;
    }
    .module .left input{
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
    .module .left input:hover{
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
    .pad thead th{
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
        padding: 5px 15px;
        display: table-cell;
        text-align: center;
        color: #666;
    }
    .pad img{
        vertical-align: -6px;
    }
    .pad i{
        margin-right: 3px;
        margin-left: 3px;
        color: #cacaca!important;
    }
    .bts{
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
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
        outline:none;
        float:right;
        margin-right:20px;
    }
</style>
