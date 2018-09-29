<template>
    <div class="module">
        <div class="left">
            <i class="iconfont icon-sousuo1"></i>
            <input type="text" placeholder="搜索项目组件" >
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
                        <th style="width:50%">备注</th>
                        <th>支持平台</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="item of arr">
                        <td style="text-align:left">
                            <i class='iconfont' :class='item.i'></i>
                            {{item.zujian}}
                        </td>
                        <td style="text-align:left">
                            {{item.beizhu}}
                        </td>
                        <td class='asd'>
                            <i class='iconfont' v-for="(tre,index)  of item.pingtai" :class="tre"></i>
                        </td>
                        <td>
                            <span>
                                <i class='iconfont icon-shanchu'></i>
                            </span>
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
                    i:'icon-kanban',
                    zujian:'看板',
                    beizhu:'用看板的方式分组展示任务',
                    pingtai:[
                        'icon-diannao2-copy',
                        'icon-iconziti48', 
                        'iconfont icon-anzhuo'
                    ]
                },
                {
                    i:'icon-diedaijianying',
                    zujian:'迭代',
                    beizhu:'用于敏捷开发管理中的迭代管理，支持迭代统计、故事板及规划',
                    pingtai:[
                        'icon-diannao2-copy',
                        'icon-iconziti48', 
                        'iconfont icon-anzhuo'
                    ]
                },
                {
                    i:'icon-liebiao',
                    zujian:'列表',
                    beizhu:'用列表的方式直观的展示任务',
                    pingtai:[
                        'icon-diannao2-copy',
                        'icon-iconziti48', 
                        'iconfont icon-anzhuo'
                    ]
                },
                {
                    i:'icon-shijian',
                    zujian:'时间',
                    beizhu:'用甘特图的方式展示任务，支持任务视图与人员视图',
                     pingtai:[
                        'icon-diannao2-copy',
                        'icon-iconziti48', 
                        'iconfont icon-anzhuo'
                    ]
                },
                {
                    i:'icon-biaoge',
                    zujian:'表格',
                    beizhu:'用表格的方式展示任务，支持表头自定义',
                     pingtai:[
                        'icon-diannao2-copy',
                        'icon-iconziti48', 
                        'iconfont icon-anzhuo'
                    ]
                },
                {
                    i:'icon-baobiao',
                    zujian:'报表',
                    beizhu:'提供基于任务的多维度统计，可以自定义统计报表',
                     pingtai:[
                        'icon-diannao2-copy',
                        'icon-iconziti48', 
                        'iconfont icon-anzhuo'
                    ]
                },
                {
                    i:'icon-rili1',
                    zujian:'日历',
                    beizhu:'用日历的方式直观的展示任务',
                    pingtai:[
                        'icon-diannao2-copy',
                        'icon-iconziti48', 
                        'iconfont icon-anzhuo'
                    ]
                },
                {
                    i:'icon-gongshijianying',
                    zujian:'工时',
                    beizhu:'用于项目管理中的工时查看、统计与导出',
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
    .pad table,.pad th,.pad td,.pad tr{
        border: 1px solid #eee;
    }
    .pad th,.pad td{
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
    }
    .icon-kanban{
        color: #18bfa4;
        font-size:14px;
    }
    .icon-diedaijianying{
        color: #9473fd;
        font-size:26px;
        float:left;
        margin-left: -5px!important;
    }
    .icon-liebiao{
        color: #2cccda;
    }
    .icon-shijian{
        color: #ffd234;
    }
    .icon-biaoge{
        color: #22d7bb;
    }
    .icon-baobiao{
        color: #4e8af9;
    }
    .icon-rili1{
        color: #ffa415;
    }
    .icon-gongshijianying{
        color: #66c060;
    }
    .asd i{
        color: #cacaca
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
