<template>
    <div class="new_detail">
        <div class="new_deta_main">
            <span>企业公告由系统自动创建，所有企业成员都会自动加入到当前群组，该群组无法删除。</span>
            <div>
                <a><i class="iconfont icon-gongju"></i> 
                    添加集成服务
                </a>
                <a><i class="iconfont icon-hao"></i> 
                    加入更多群组
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

<style lang='scss' scoped>
    .new_detail{
        width: 100%;
        height:100%;
        // background: #dadad8;
        position: relative;
        background:url('../../../../assets/desktop-5.jpg')no-repeat;
        background-size: cover;
        overflow: scroll;
        .new_deta_main{
            width: 81%;
            height: 82%;
            position: absolute;
            left: 1%;
            top: 3%;
            background: #fff;
           span{
                padding: 15px;
                color: #999;
                font-size: 14px;
                position: relative;
                top: 15px;;
           }
           div{
               margin-top: 30px;
               margin-left: 15px;
               a{
                   margin-right: 15px;
                   color: #6f8092;
                   font-size: 14px;
                   cursor: pointer;
                   i{
                       color: #ccc;
                   }
               }
           }
        }
    }
            .new_day{
                position: relative;
                height: 20px;
                margin: 35px 0;
                div{
                    text-align: center;
                    line-height: 20px;
                    position: absolute;
                    width: 100%;
                    .new_bind{
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
            } 
</style>
