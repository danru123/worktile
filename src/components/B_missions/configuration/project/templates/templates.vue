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
        <button class='xin'>
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
                </tbody>
            </table>
        </div>

        <div class="tan">
            <div class="tan_up">
                <h3>创建群组</h3>
                <span>X</span>
            </div>
            <div class="tan_down">
                 <div class="tan_d_up">
                     <div class="input">
                          <input type="text" placeholder="群组名称" class="form">
                     </div>
                 </div>
            </div>
            <div class="qun">
                <label class="label">群组主题</label>
                <textarea name="" id="" cols="30" rows="10" class="text"></textarea>
            </div>
            <div class="ke">
                <label class="labels">可见范围</label>
                <select name="" id="" class="text">
                    <option value="">公开：企业所有成员都能看到此群组</option>
                    <option value="">私有：只有加入的成员才能看到此群组</option>
                </select>
            </div>
            <div class="cheng">
                <label for="">群组成员</label>
                <ul>
                    <li>
                        <span class="c_s">M</span>
                    </li>
                    <li></li>
                </ul>
            </div>
            <div class="sure">
                <button class="btn">确定</button>
                <a href="javascript:;">取消</a>
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
            ]
        }
    }
}
</script>

<style scoped>
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



    .qun{
        margin-right: 0;
        margin-left: 0;
        margin:0 auto;
        height: 80px;
    }
    .qun .label{
        color: #888;
        font-size: 14px;
        font-weight: 400;
        text-align: right;
        margin-bottom: 0;
        display:block;
        padding-top: -5px;
        margin-top: 16px;
        width: 100px;
        height: 80px;
    }
    .qun .text,.ke .text{
        display: block;
        width: 80%;
        height: 90px;
        margin-top: -90px;
        float:right;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .ke{
        width: 500px;
        height: 38px;
        margin:0 auto;
    }
    .ke .labels{
        width: 105px;
        height: 38px;
        margin-top: 27px;
        display:block;
    }
    .ke .text{
        height: 30px;
        margin-top: 20px;
        width:93%;
        float:right;
        margin-right: -40px;
        margin-top: -40px;
    }
    .ke option{
        color: #666;
    }
    .cheng{
        margin: 10px auto;
        width: 500px;
        height: 43px;
        color: #666;
    }
    .cheng ul li{
        margin-right: 6px;
        margin-bottom: 8px;
        float: left;
        list-style: none;
        position: relative;
    }
    .cheng ul li .c_s{
        display:block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        border-radius: 30px;
        background-color: rgb(239, 126, 222);
        color: #fff!important;
        text-shadow: transparent 0 0 0;
        text-align: center;
        float:right;
        margin-left: 70px;
        margin-top: -20px;
    }
    .sure{
        width: 364px;
        height: 38px;
        margin:0 auto;
        color: #666;
    }
    .sure .btn{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
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
        transition: color .15s ease-in-out,background-color .15s ease-in-out,der-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .sure a{
        margin-left: 27px;
    }
    .qun{
        margin-right: 0;
        margin-left: 0;
        margin:0 auto;
        height: 80px;
    }
    .qun .label{
        color: #888;
        font-size: 14px;
        font-weight: 400;
        text-align: right;
        margin-bottom: 0;
        display:block;
        padding-top: -5px;
        margin-top: 16px;
        width: 100px;
        height: 80px;
    }
    .qun .text,.ke .text{
        display: block;
        width: 80%;
        height: 90px;
        margin-top: -90px;
        float:right;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .ke{
        width: 500px;
        height: 38px;
        margin:0 auto;
    }
    .ke .labels{
        width: 105px;
        height: 38px;
        margin-top: 27px;
        display:block;
    }
    .ke .text{
        height: 30px;
        margin-top: 20px;
        width:93%;
        float:right;
        margin-right: -40px;
        margin-top: -40px;
    }
    .ke option{
        color: #666;
    }
    .cheng{
        margin: 10px auto;
        width: 500px;
        height: 43px;
        color: #666;
    }
    .cheng ul li{
        margin-right: 6px;
        margin-bottom: 8px;
        float: left;
        list-style: none;
        position: relative;
    }
    .cheng ul li .c_s{
        display:block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        border-radius: 30px;
        background-color: rgb(239, 126, 222);
        color: #fff!important;
        text-shadow: transparent 0 0 0;
        text-align: center;
        float:right;
        margin-left: 70px;
        margin-top: -20px;
    }
    .sure{
        width: 364px;
        height: 38px;
        margin:0 auto;
        color: #666;
    }
    .sure .btn{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
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
        transition: color .15s ease-in-out,background-color .15s ease-in-out,der-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .sure a{
        margin-left: 27px;
    }
    .tan_d_up{
        margin-right: -15px;
        height: 60px;
    }
    .tan_d_up .input{
       width:590px;
    }
    .tan_d_up .input .form{
        display: block;
        width: 100%;
        line-height: 2.8;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        padding-left: 20px;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .tan_d_down{
        margin-right: -15px;
        height: 35px;
        width:100%;
    }
    .tan_d_down .color{
        position: absolute;
        width: 110%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    .tan_d_down ul{
        width: 100%;
    }
    .tan_d_down ul li{
        list-style: none;
        cursor: pointer;
        margin-bottom: 8px;
        float: left;
        padding-left:8px;
    }
    .tan_d_down ul li span{
        display: inline-block;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        text-align: center;
        padding: 0 4px 6px;
    }
.tan{
        width: 660px;
        height: 461px;
        top: 50px;
        left:410px;
        position: absolute;;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
        border: 0 solid rgba(0,0,0,.2);
        border-radius: .3rem;
    }
    .tan_up{
        padding: 0 1.875rem;
        min-height: 1.5;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid #eee;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        box-sizing: border-box;
        width:100%;
    }
    .tan_up span{
        float: right;
        margin-top:-22px;
    }
    .tan_up h3{
        padding-top:13px;
    }
    .tan_down{
        padding: 1.25rem 1.875rem 1.875rem;
        position: relative;
        height: 130px;
    }


</style>