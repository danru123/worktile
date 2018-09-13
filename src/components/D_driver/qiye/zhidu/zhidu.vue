<style scoped>
    .right_box{
        width:100%;
        position: absolute;
        right:0;
        top:0;
        height:100%;
    }
    li{
        list-style:none;
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
        color: #333;
    }
    .right_hsc{
        width:28%;
        float:right;
        right:0;
        height: 50px;
        line-height:48px;
    }
    .right_hbtn{
        padding: 3px 20px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #22d7bb;
        background-color: #fff;
        border-radius: 4px;
        text-align: center;
        vertical-align: middle;
        border: 1px solid #22d7bb;
        outline:none;
    }
    .right_hbtn:hover{ 
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
    }
    .upload_btn{
        width:136px;
        height:28px;
        line-height: 28px;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        border-radius:20px;
        margin-left: 32px;
        background-color: #22d7bb;
        color: #fff;
        font-size:14px;
        text-align:center;
    }
    .main_box{
        padding: 15px 15px 0;
        margin: 15px;
        background: #fdfdfd;
        height:85%;
    }
    .icon1{
        font-size: 20px;
        margin: 0 10px 4px 0;
        color: rgb(34, 215, 187);
    }
    .icon2{
        margin-left: 5px;
        vertical-align: middle;
        font-size: 12px;
    }
    .icon3{
        color: #fff;
        margin: 0 4px 0 0;
        font-size: 12px;
        line-height: 15x;
    }
    .icon4{
        font-size: 12px;
    }
    .mian_con{
        height:55px;
        line-height: 55px;
        color: rgb(102, 102, 102);
        position: relative;
    }
    .mian_con::before{
        content: "";
        position: absolute;
        left: 20px;
        right: 20px;
        bottom: 0px;
        border-bottom: 1px solid rgb(238, 238, 238);
    }
    .file_name{
        width:40%;
    }
    .file_size{
        width:15%;
    }
    .file_updated_by{
        width:15%;
    }
    .file_updated{
        width:15%;
    }
    .file_name,.file_size,.file_updated_by,.file_updated{
        float:left;
    }
    .ng_scope{
        font-size: 14px;
        padding-left:37px;
    }
    .icon0{
        font-size: 15px;
        color: #22d7bb;
    }
    .icon01{
        color: rgb(57, 186, 93);
        font-size: 35px;
        vertical-align: middle;
        margin-right: 12px;
    }
    .ng_scope1{
        line-height: 24px;
        font-size: 12px;
        border-radius: 24px;
        background-color: rgb(239, 126, 222);
        color: #fff!important;
        padding:6px 8px;
    }
    .dorpdown{
        box-shadow: 0 0 24px rgba(0,0,0,.18);
        border-radius: 0;
        border: 0;
        min-width: 230px;
        z-index: 1100;
        position: absolute;
        text-align: left;
        font-size: 14px;
        background: #FFF;
        top: 40.2344px;
        left: 12px029.33px;
    }
    .dorpdown li{
        display: block;
        padding: 0;
        margin: 0 0 2px;
        cursor: pointer;
        -webkit-transition: background .2s;
    }
    .dorpdown li a{
        display: block;
        padding: 5px 18px;
        line-height: 30px;
        color: #666;
        text-decoration: none;
        box-sizing: border-box;
        transition: padding-left .2s;
    }
    .dorpdown li:hover {
        box-shadow: 0 0 8px 2px #eee; 
    }
</style>

<template>
    <div class="right_box">
        <div class="right_header">
            <div class="right_htit">
                <div>
                    <i class="iconfont icon1 icon-wenjianjiabiheicon"></i>
                    企业网盘
                    <i class="iconfont icon2 icon-jiantou"></i>
                </div>
            </div>
            <div class="right_hsc">
                <button class="right_hbtn">+ 新建</button>
                
                <div class="upload_btn">
                    <i class="iconfont icon3 icon-uploading"></i>
                    上传文件
                    <i class="iconfont icon4 icon-xiangxiajiantou"></i>
                </div>
            </div>
        </div>
        <div class="main_box">
            <div class="main_header mian_con">
                <div class="file_name">
                    <span class="ng_scope">文件名</span>
                </div> 
                <div class="file_size">
                    <span class="ng_scope">大小</span>
                </div>    
                <div class="file_updated_by">
                    <span class="ng_scope">更新人</span>
                </div>
                <div class="file_updated">
                    <span class="ng_scope">更新时间</span>
                    <i class="iconfont icon0 icon-open-upwards"></i>
                </div>
            </div>
            <li class="mian_con">
                <div class="file_name">
                    <span class="ng_scope">
                        <i class="iconfont icon01 icon-wenjianjiabiheicon"></i>
                        公司制度1
                    </span>
                </div> 
                <div class="file_size">
                    <span class="ng_scope">-</span>
                </div>    
                <div class="file_updated_by">
                    <div class="ng_scope">
                        <span class="ng_scope1">M</span>
                        <span class="ng_binding">M</span>
                    </div>
                    
                </div>
                <div class="file_updated">
                    <span class="ng_scope">9月11日 15:55</span>
                </div>
            </li>
        </div>
        
        <router-view></router-view>

    </div>
</template>

<script>
export default {

}
</script>

