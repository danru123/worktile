<style scoped>
    .right_box{
        width:calc(100% - 241px);
        position: absolute;
        right:0;
        top:0;
        height:100%;
    }
    .right_header{
        height: 50px;
        margin: 0;
        padding: 0 15px;
        position: relative;
        background: rgba(253,253,253,.95);
    }
    .right_htit{
        height: 50px;
        width:70%;
        line-height: 50px;
        font-size: 14px;
        float: left;
        color: #aaa;
    }
   	.right_htit:hover{
   		color:#333;
   	}
    .main_box{
        padding: 15px 15px 0;
        margin: 15px;
        background: #fdfdfd;
        height:85%;
    }
    .icon-shanchu{
        font-size: 20px;
        margin: 0 10px 4px 0;
        vertical-align: middle;
        color: #22d7bb;
        font-size:16px;
    }
    .no_file{
        margin-top: 45px;
        display: block;
        text-align: center;
    }
    .icon-wuwenjian{
        font-size: 130px;
        color: #eee;
    }
    .empty_text{
        margin: 0 0 10px;
        color: #cacaca;
        marsgin-left: 15px;
    }
</style>

<template>
    <div class="right_box">
        <div class="right_header">
            <div class="right_htit">
                <div><i class="iconfont icon-shanchu"></i>回收站</div>
            </div>
            
        </div>
        <div class="main_box">
            <div class="no_file">
                <i class="iconfont icon-wuwenjian"></i>
                <p class="empty_text">没有文件</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

