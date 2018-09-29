<template>
    <div style="padding:15px;box-sizing: border-box;">
        <div class="module">
        <div class="left">
             <i class="iconfont icon-sousuo1"></i>
            <input type="text" placeholder="搜索任务类型" >
        </div>
        <button class='she'>
            <i class='iconfont icon-peizhizhongxin'></i>
            新建任务类型
        </button>
        <button class='xin'>
            <i class='iconfont icon-hao'></i>
            分组管理
        </button>
        <div class="pad">
            <table>
                <thead>
                    <tr>
                        <th style="width:20%">任务类型</th>
                        <th style='width:45%'>备注</th>
                        <th>分组</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="item of arr">
                        <td style="text-align:left">
                            <img :src="item.i" alt="">
                            {{item.xiangmu}}
                        </td>
                        <td style="text-align:left">
                            {{item.beizhu}}
                        </td>
                        <td style="text-align:left">
                            {{item.leixing}}
                        </td>
                        <td>
                            <span class='p'>
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
                </tbody>
            </table>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[
                {
                    xiangmu:'任务',
                    beizhu:'适用于最简单的事务管理',
                    leixing:'通用',
                    zhuangtai:'已启用'
                },
                {
                    xiangmu:'事务',
                    beizhu:'适用于通用的项目管理',
                    leixing:'通用',
                    zhuangtai:'已启用'
                },
                {
                    xiangmu:'工时任务',
                    beizhu:'适用于敏捷研发管理，包括迭代、需求和缺陷',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    xiangmu:'敏捷需求',
                    beizhu:'适用于缺陷管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    xiangmu:'敏捷任务',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    xiangmu:'敏捷缺陷',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    xiangmu:'Web缺陷',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    xiangmu:'iOS缺陷',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    xiangmu:'Android缺陷',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    xiangmu:'测试用例',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    xiangmu:'研发需求',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    xiangmu:'研发任务',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    xiangmu:'缺陷',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
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
    }

    .left{
        position: relative;
        float: left;
        width: 300px;
    }
    .icon-sousuo1{
        position: absolute;
        left: 10px;
    }
    input{
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
    input:hover{
        border-color: #22d7bb;
    }
    .pad{
        width: 100%;
        box-sizing: border-box;
        padding-top: 20px;
        background-color: #fff;
        float: left;
    }
    .pad td .p{
        color: #22d7bb;
        font-size:14px;
    }
    .pad td span{
        margin: 0 8px;
        color:#aaa
    }
    table{
        width: 100%;
        box-sizing: border-box;
        border-collapse: collapse;
    }
    thead th{
        background-color: #f3f3f3;
        vertical-align: bottom;
        font-weight: 400;
        border-bottom: 1px solid #eee;
    }
    table,th,td,tr{
        border: 1px solid #eee;
    }
    th,td{
        font-size: 14px;
        padding: 5px 15px;
        display: table-cell;
        text-align: center;
        color: #666;
    }
    img{
        vertical-align: -6px;
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
</style>
