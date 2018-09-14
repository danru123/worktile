<template>
    <div class='contact-detail-area'>
        <div class="title">
            <span class='channel-icon'>
                <i class='iconfont  icon-chengyuan'></i>
            </span> 
            <span class="name">123</span>
            <span class="num">1人</span>
        </div>
        <div class='profile-robot-wrapper'>
            <div class="module-body-content">
                <div class="lc-avatar ">
                    <div class='lc-avatar-def'>
                        M
                    </div>
                    <p class="channel-member-name"> 
                        M
                    </p>
                </div>
                <div>
                    <button class="btn">
                        发消息
                    </button>
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
    .contact-detail-area{
        width: calc(100% - 311px);
        overflow: hidden;
         float: right;
        overflow: hidden;
        box-sizing: border-box;
        background:url(../../../assets/desktop-5.jpg);
        background-size:cover;
        height: 100%;
    }
    .profile-robot-wrapper{
        overflow: hidden;
        height: 100%;
        padding:  15px;
        box-sizing: border-box;
    }
    .title{
        width: 100%;
        display: block;
        height: 50px;
        margin: 0;
        padding: 0 15px;
        position: relative;
        background: rgba(253,253,253,.95);
    }
    .channel-icon{
        width: 24px;
        height: 24px;
        background-color: rgb(239, 126, 222);
        display: inline-block;
        text-align: center;
        margin-top: 10px;
        border-radius: 50%;
        font-size: 12px;
        color:#fff;
        line-height: 23px;
        
    }
    .num{
        color: #aaa;
    }
    .module-body-content{
       height: calc(100% - 50px);
       margin-bottom: 15px;
        background: #fdfdfd;
        padding: 30px;
        box-sizing: border-box;
    }
    .lc-avatar-def{
       margin-left: 20px;
        width: 48px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        line-height: 48px;
        font-size: 12px;
        border-radius: 48px;
        background-color: rgb(239, 126, 222);
        color:#fff;
    }
    .channel-member-name{
        margin-top: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 90px;
        text-align: center;
    }
    .btn{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
        outline: none;
        padding: .469rem 26px;
        font-size: .875rem;
        line-height: 1.5;
        min-width: 106px;
        border-radius: 1.25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        border: none;
        margin-top: 30px;
    }
    .btn:hover {
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
</style>
