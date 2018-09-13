<template>
<<<<<<< HEAD
    <div class="new">
        <div class="new_left">
            <div class="new_top">
                <span>消息<img src="../../assets/1.png"></span>
                <img src="../../assets/2.png" class="img1" @click="clo()">
            </div>
            <input type="text" placeholder="搜索成员、消息" v-model='itein' @change='get1()'>
            <ul class="new_nav">
                
                <li v-for='(item,index) of vList' :class="{cur : $route.name.indexOf(item.title) != -1}">
                    <img :src="item.img">
                    <em @click='close(index)'>{{item.em}}</em>
                    <router-link :to='item.url'>{{item.title}}</router-link>
                </li>
                <li v-for='(item,index) of L'>
                    <img src="../../assets/5.png">
                    <em @click='close1(index)' class='em'>{{item.em}}</em>
                    <a href="/news/new_brobot/" ref='url'>{{item.title}}</a>
                </li>
            </ul>

        </div>
        <div class="rv">
            <router-view></router-view>
        </div>



        <div class="tan" v-show='isShow == false'>
            <div class="tan_up">
                <h3>创建群组</h3>
                <span @click="clo()">X</span>
            </div>
            <div class="tan_down">
                 <div class="tan_d_up">
                     <div class="input">
                          <input type="text" placeholder="群组名称" class="form" ref='title'>
                     </div>
                 </div>
                 <div class="tan_d_down">
                      <div class="color">
                          <ul>
                              <li v-for="item of item" >
                                  <span :class="item.color"></span>
                              </li>
                          </ul>
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
                <button class="btn" @click="submit()">确定</button>
                <a href="javascript:;">取消</a>
            </div>
        </div>
=======
    <div>
        <h1>我是消息</h1>
>>>>>>> lfm
    </div>
</template>

<script>
<<<<<<< HEAD
import  Vue from 'vue'
import $ from 'jquery'
export default {
    data(){
        return {
            vList:[
                {
                    title:'项目助手',
                    url:'/news/new_adriver/',
                    img:'/dist/3.png',
                    em:'x'
                },
                {
                    title:'小特机器人',
                    url:'/news/new_brobot/',
                    img:'/dist/4.png',
                    em:'x'
                },
                {
                    title:'企业公告',
                    url:'/news/new_ccom/',
                    img:'/dist/6.png',
                    em:'x'
                },
                {
                    title:'日程助手',
                    url:'/news/new_eday/',
                    img:'/dist/5.png',
                    em:'x'
                }
            ],
            num:0,
            itein:'',
            isShow:true,
            item:[
                {
                    color:"one"
                },
                {
                    color:"two"
                },
                {
                    color:"three"
                },
                {
                    color:"red"
                },
                {
                    color:"orange"
                },
                {
                    color:"yellow"
                },
                {
                    color:"green"
                },
                {
                    color:"teal"
                },
                {
                    color:"cyan"
                },
                {
                    color:"secondary"
                },
                {
                    color:"success"
                },
                {
                    color:"danger"
                },
                {
                    color:"a"
                },
                {
                    color:"b"
                },
                {
                    color:"c"
                },
                {
                    color:"d"
                },   
                {
                    color:"e"
                }, 
            ],
            L:[]
        }
    },
    methods:{
        get1:function(){
            var shu = this.itein;
            console.log(shu)
            // var arr = this.vList;
            this.vList = this.vList.filter(function(item,itein){
                if(item.title.indexOf(shu) != -1){
                    return item
                }
            })       
        },
        close:function(index){
            this.vList.splice(index,1);
        },
        close1:function(index){
            this.L.splice(index,1);
            localStorage.setItem('L',JSON.stringify(this.L));
            console.log(this.L)
        },
        clo(){
            this.isShow = !this.isShow;
        },
        submit(){
            var title = this.$refs.title.value;
            this.L.push({
                title:title,
                em:"x"
            })
            localStorage.setItem('L',JSON.stringify(this.L));
            this.isShow = !this.isShow;
        }
    },
    created(){
        var local = JSON.parse(localStorage.getItem('L'));
        for(var i = 0;i < local.length;i++){
            this.L.push(local[i]);
        } 
        
    },
}
</script>

<style scoped>
    .new{
        background: #fbfbfb;
        position: relative;
        width: calc(100% - 70px);
        overflow: hidden;
        height: 100%;
    }
    .new_left{
        width: 240px;
        border-right: 1px solid #ccc;
        float: left;
    }
    .new_nav{
        width: 80%;
        height: 100%;
        margin-top: 15px;
    }
    .new_nav li{
        width: 114%;
        height: 40px;
        line-height: 35px;
        text-align: left;
        padding-left: 20px;
    }
    .new_nav li img{
        width: 25px;
        height: 25px;
        border-radius: 24px 24px;
        vertical-align: middle;
        padding-right: 10px;
    }
    .new_nav li a{
        color: #333;
        font-size: 14px;
    }
    input{
        margin-left: 20px;
        width: 80%;
        height: 35px;
        border-radius: 15px;
        outline: none;
        padding-left: 10px;
        margin-top: -10px;
        border: none;
        background-color: #f3f3f3;
    }
    .new_top{
        padding:20px;
        width: 80%;
        height: 40px;
    }
    .new_top .img1{
        display: inline-block;
        width: 22px;
        height: 22px;
        margin-left: 10px;
        vertical-align: middle;
        float: right;
        cursor: pointer;
    }
    span{
        color: #333;
        font-size: 16px;
    }
    span img{
        display: inline-block;
        width: 15px;
        height: 22px;
        margin-left: 10px;
        vertical-align: middle;
    }
    .new_nav li.cur{
        background: #e7f9f6;
        border-right: 3px solid #22d7bb;
    }
    .new_nav li.cur a{
        color: #22d7bb!important;
    }
    .rv{
        float: left;
        margin-top: 20px;
    }
    em{
        color:#ccc;
        float: right;
        margin-right: 10px;
        cursor: pointer;
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
        margin-top: -33px;
        width: 100px;
        height: 80px;
    }
    .qun .text,.ke .text{
        display: block;
        width: 72%;
        height: 90px;
        margin-top: -90px;
        float:right;
        margin-right: 55px;
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
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        outline: none;
        cursor: pointer;
    }
    .sure a{
        margin-left: 27px;
        color: #333;
    }
     .one{
        background-color: #007bff;
    }
    .two{
        background-color: #6610f2;
    }
    .three{
        background-color: #6f42c1;
    }
    .four{
        background-color: #e83e8c;
    }
    .red{
       background-color: #dc3545;  
    }
    .orange{
       background-color: orange;  
    }
    .yellow{
       background-color: yellow;  
    }
    .green{
       background-color: green;  
    }
    .teal{
       background-color: teal;  
    }
    .cyan{
       background-color: cyan;  
    }
    .secondary{
       background-color:#666;  
    }
    .success{
       background-color: #22d7bb;  
    }
    .danger{
          background-color: #ff5b57;  
    }
    .a{
         background-color:#f61f80;
    }
    .b{
         background-color:#a72ee6;
    }
    .c{
         background-color:#f61f80;
    }
    .d{
         background-color:#0098e0;
    }
    .e{
         background-color:#0f7b6a;
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
        position: absolute;
        left: 11px;
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
        width: 20px;
        height: 20px;
        text-align: center;
        padding: 0 4px 6px;
    }


    .tan{
        width: 680px;
        height: 461px;
        top: 50px;
        left:24%;
        position: absolute;;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
        border: 0 solid rgba(0,0,0,.2);
        border-radius: .3rem;
        /* display: none; */
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
=======
    export default {
        name: "news"
    }
</script>

<style scoped>

</style>
>>>>>>> lfm
