<template>
    <div class="new_detail">
        <div class="new_deta_main">
            <img src="../../../../assets/7.png" alt="">
            <span>没有未读消息</span>
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
        font-style:normal;
    }
    .new_detail{
        width: 100%;
        height:100%;
        position: relative;
        background:url('../../../../assets/desktop-5.jpg')no-repeat;
        background-size: cover;
    }
    .new_deta_main{
        width: 81%;
        height: 82%;
        position: absolute;
        left: 1%;
        top: 3%;
        background: #fff;
    }
    .new_deta_main img{
        display:inline-block;
        font-size: 70px;
        color: #ccc;
        position: relative;
        left: 45%;
        top: 140px;
    }
    .new_deta_main span{
        font-size: 18px;
        color: #ccc;
        position: relative;
        left: 34%;
        top: 160px;
    }
</style>
