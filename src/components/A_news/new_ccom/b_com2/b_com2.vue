<template>
    <div class="new_detail">
        <div class="new_deta_main">
            <div class="new_deta_fetch">
                <div>上传文件</div>
            </div>
            <table class="new_de_con">
                <thead>
                    <tr>
                        <th>文件名</th>
                        <th>大小</th>
                        <th>上传者</th>
                        <th>上传时间</th>
                    </tr>
                </thead>
            </table>
            <!-- <img src="../../../../assets/7.png" alt=""> -->
            <!-- <span>没有固定的消息</span> -->
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
        .new_deta_main{
            width: 81%;
            height: 82%;
            position: absolute;
            left: 1%;
            top: 3%;
            background: #fff;
            .new_de_con{
                width: 100%;
                color: #333;
                margin-bottom: 1.25rem;
                background-color: transparent;
                position: relative;
                top: 15px;
                tr{
                    height: 55px;
                    th{
                        padding-left: 35px;
                        position: relative;
                        border-top: 0;
                        color: #888;
                        vertical-align: bottom;
                        font-weight: 400;
                        border-bottom: 1px solid #eee;
                        padding: 12px 15px;
                    }
                }
            }
            .new_deta_fetch{
                width: 95%;
                margin: 10px;
                div{
                    float: right;
                    margin-right: 20px;
                    width: 120px;
                    height: 28px;
                    border-radius: 18px;
                    background-color: #22d7bb;
                    border-color: #22d7bb;
                    color: #fff;
                    line-height: 28px;
                    text-align: center;
                    cursor: pointer;
                    margin-top: 10px;
                }
            }
             img{
                display:inline-block;
                font-size: 70px;
                color: #ccc;
                position: relative;
                left: 45%;
                top: 140px;
            }
            span{
                font-size: 18px;
                color: #ccc;
                position: relative;
                left: 34%;
                top: 160px;
            }
        }
    }
</style>
