<template>
    <div class="new_detail">
        <div class="new_deta_main">
            <span>此私有群组由M于 9月11日创建，只有被邀请加入群组的成员才可以参与聊天。</span>
            <div>
                <a><i class="iconfont icon-gongju"></i> 
                    添加集成服务
                </a>
                <a><i class="iconfont icon-chengyuan-tianjia1"></i> 
                    添加新成员
                </a>
            </div>
            <div class="new_day">
                <hr>
                <div>
                   <span class="new_bind"> 9月10日 星期一</span>
                </div>
           </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
     ul li{
        list-style:none;
    }
    a{
        text-decoration: none;
    }
    em,i{
        font-style: normal;
    }
    .new_detail{
        width: 100%;
        height:100%;
        position: relative;
        background:url('../../../../assets/desktop-5.jpg')no-repeat;
        background-size: cover;
        overflow: scroll;
    }
    .new_deta_main{
        width: 81%;
        height: 82%;
        position: absolute;
        left: 1%;
        top: 3%;
        background: #fff;
    }
    .new_deta_main span{
        padding: 15px;
        color: #999;
        font-size: 14px;
        position: relative;
        top: 15px;
    }
    .new_deta_main div{
        margin-top: 30px;
        margin-left: 15px;
    }
    .new_deta_main div a{
        margin-right: 15px;
        color: #6f8092;
        font-size: 14px;
        cursor: pointer;
    }
    .new_deta_main div a  i{
        color: #ccc;
    }

    .new_day{
        position: relative;
        height: 20px;
        margin: 35px 0;
    }
    .new_day div{
        text-align: center;
        line-height: 20px;
        position: absolute;
        width: 100%;
    }
    .new_day div .new_bind{
        margin: auto;
        padding: 0 20px;
        display: inline-block;
        background-color: #fdfdfd;
        font-size: 16px;
        color: #aaa;
        position: absolute;
        top: -29px;
        left: 40%;
    }
    hr{
        position: absolute;
        width: 100%;
        top: 10px;
        border: none;
        height: 1px;
        margin: 0;
        background-image: linear-gradient(to right,#fff,#eee 50%,#fff);
        background-repeat: no-repeat;
    }
</style>
