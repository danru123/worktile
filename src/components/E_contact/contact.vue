<template>
    <div>
<<<<<<< HEAD
       <div class="main-body-side">
           <div style="overflow:hidden">
               <span class="title ">通讯录</span>
                <i class='iconfont  icon-chengyuan-tianjia wtf' @click='xian'></i>
           </div>
            <div class='body-list'>
                <div class='search-area'>
                    <input type="text" placeholder="搜索">    
                </div>
                <ul class="lc-tabs-group">
                    <li class='iconfont  icon-chengyuan'></li>
                    <li class="line"></li>
                    <li class='iconfont  icon-xiashurenwu-'></li>
                </ul>
                <div class='ng-scope'>
                    <!-- 群组列表 -->
                    <div class='section-header'>
                        <div class="title2" @click='show2()'>
                            <i class='iconfont icon-right tran' :class='{"caret-down":select2}'></i>
                            <a href="#" >群组</a>
                        </div>
                        <ul :style='{height:qzH}'>
                            <li v-for='item of qzNav' :class="{cur:$route.name==item.title}">
                                <span class='channel-icon'>
                                    <i class='iconfont  icon-chengyuan'></i>
                                </span>                   
                                <router-link :to='item.url' class='name'>{{item.title}}</router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- 机器人列表 -->
                    <div class='robot'>
                        <div class="title2" @click='show()'>
                            <i class='iconfont icon-right tran' :class='{"caret-down":select}'></i>
                            <a href="#" >机器人</a>
                        </div>
                        <ul :style="{height:robotH}">
                            <li v-for='item of tabNav' :class="{cur:$route.name==item.title}">
                                <img class='channel-icon' :src='item.image'>            
                                <!-- <span class="name">12</span> -->
                                <router-link :to='item.url' class='name'>{{item.title}}</router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- 联系人列表 -->
                    <div class="member">
                        <div class="man" v-for="(item,i) of member">
                            <div class="title2">
                                <a href="#" >{{item.t}}</a>
                            </div>
                            <ul>
                                <li @click='tab(i)' :class="{cur:i==num}" >
                                    <span class='channel-icon'>
                                        {{item.t}}
                                    </span>                   
                                    <span class="name" @click="routerGo('/contact/M')" >{{item.name}}</span>
                                </li>
                            </ul>
                        </div>
                   </div>
                </div>                     
            </div> 
            </div> 
            <div class="cover" v-show='isShow'>
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <span>
                                添加成员
                            </span>
                            <a href="#" class="modal-close" @click="xian">
                                X
                            </a>
                        </div>
                        <div class="cnt">
                            <form action="">
                                <p class="form-group" v-for='item of form'>
                                    <label for="">
                                        {{item.name}}
                                    </label>
                                    <input type="text" :placeholder="item.pla" :class="item.ref">
                                </p>
                            </form>
                            <p>
                                <button class="btn" @click='submit'>
                                    添加成员
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
    
</template>

<script>
   import $ from 'jquery'
    export default {
        data(){
            return {
                header:[
                    "群组"
                ],
                num:0,
                qzNav:[
                    {
                        title:123,
                        url:'/contact/channels/123'
                    },
                    {
                        title:'四组',
                        url:'/contact/channels/forth'
                    }
                ],
                tabNav:[
                    {
                        title:'日程助手',
                        url:"/contact/rc",
                        image:'/dist/calendar_160x160.png'
                    },
                    {
                        title:'网盘助手',
                        url:"/contact/wp",
                        image:'/dist/drive_160x160.png?da029d718fc8bb82fd3b7c60ad9b2b69'
                    },
                    {
                        title:'项目助手',
                        url:"/contact/xm",
                        image:'/dist/mission_160x160.png?eedd13600ae7e21deec50f47de4531bb'
                    },
                    {
                        title:'小特机器人',
                        url:"/contact/xt",
                        image:'/dist/381df779-62e6-49de-8792-620b94a5582d_160x160.png?daebac22e7d7fab74ca6eb300d60f05a'
                    }
                ],
                 isShow:false,
                 robotH:0,
                 select:false,
                 qzH:0,
                 select2:false,
                 form:[
                     {
                         name:"姓名",
                         ref:'name',
                         pla:"请输入对方真实姓名"
                     },
                     {
                        name:"登录用户名",
                        ref:"user",
                         pla:"请输入对方用户名，如Lily"
                     },
                     {
                          name:"邮箱或者手机号",
                          ref:"phone",
                         pla:"输入邮箱地址或者手机号"
                     },
                     {
                          name:"默认密码",
                          ref:'mima',
                         pla:"输入默认密码"
                     }
                 ]
            }
        },
        created() {
			// 发送默认 GETALL
			this.$store.dispatch("GETALL")
		},
        computed: {
            member(){
                return this.$store.state.member;
            }
        },
        methods:{
            routerGo(url){
                //路由跳转
                this.$router.push({path:url})
            },
            show(){
                this.select=!this.select;
                if(this.robotH==0){
                    this.robotH=this.tabNav.length*50+'px'
                }else{
                    this.robotH=0;
                }
            },
            show2(){
                this.select2=!this.select2;
                if(this.qzH==0){
                    this.qzH=this.qzNav.length*50+'px'
                }else{
                    this.qzH=0;
                }
            },
            xian(){
                this.isShow=!this.isShow;
            },
            tab(i){
                this.num=i;
            },
            submit(){
                this.isShow=!this.isShow;
                var name=$('form .name').val();
                console.log(name);
                var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
                var id = '';
                var t=name.substr(0,1).toUpperCase();
                console.log(t);
				for(var i = 0; i < 8; i++) {
					//~~ 相当于parseInt
					id+= str[~~(Math.random() * str.length)]
				}
				// 发送add 新增命令
				this.$store.dispatch("ADD",{
					"name":name,
                    "id": id,
                    "t":t
                });
                name='';
            }
        }
    }
</script>



<style scoped>
    .main-body-side{
        position: relative;
        width: 240px;
        background: rgba(253,253,253,.95);
        border-right: 1px solid #ddd;
        height: 100%;
        float: left;
    }
    a{
        text-decoration: none;
        color: rgb(51, 51, 51);
    }
    .nav .title{
        float: left;
        margin: 0 20px;
        color: #333;
        line-height: 50px;
        font-size: 16px;
    }
    .wtf{
        float: right;
        margin: 17px 20px;
        color: #ccc;
        cursor: pointer;
    }
    .wtf:hover{
        color: #22d7bb!important;
    }
    .search-area{
        padding: 0 20px 10px;
        position: relative;
        box-sizing: border-box;
    }
    .search-area input{
        background: #f3f3f3;
        -webkit-box-shadow: none;
        box-shadow: none;
        color: #8f8f8f;
        height: 36px;
        font-size: 14px;
        padding-left: 28px;
        border-radius: 20px;
        border: 1px solid transparent;
        outline: none;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        opacity: 0.5;
    }
    .search-area input:hover{
        background: #fdfdfd;
        border: 1px solid #ddd;
    }
    .search-area input:focus {
        background: #fdfdfd;
        border: 1px solid #22d7bb;
    }
    .lc-tabs-group{
        padding: 0 20px;
        line-height: 18px;
        border-bottom: solid 1px #f3f3f3;
        overflow: hidden;
    }
    .lc-tabs-group li{
       width: calc(99% / 2);
        text-align: center;
        padding-bottom: 10px;
        color: #ddd;
        border: none;
        cursor: pointer;
        list-style: none;
        float: left;
    }
    .lc-tabs-group li.line{
        -webkit-box-flex: 0;
        -ms-flex: 0;
        flex: 0;
        width: 0;
        height: 6px;
        overflow: hidden;
        border-right: solid 1px #eee;
    }
    .section-header,.robot,.man{
        margin-bottom: 2px;
        position: relative;
        cursor: pointer;
    }
    .section-header .title2,.robot .title2,.man .title2{
        width: 100%;
        padding: 8px 20px;
        font-size: 14px;
        box-sizing: border-box;
    }
    .man .title2 a{
        width: 100%;
        display: block;
        color: #888;
        padding-bottom: 5px;
         border-bottom: solid 1px #eee;
    }
    .section-header ul,.robot ul,.man ul{
        list-style: none;
        overflow: hidden;
        transition:  .4s;
    }
    .section-header ul li,.robot ul li,.man ul li{
        margin-bottom: 2px;
        border-right: 3px solid transparent;
        padding: 2px 0 0 30px;
        box-sizing: border-box;
    }
    .section-header ul li.cur,.robot ul li.cur,.man ul li.cur{
        border-right: 3px solid #22d7bb;
        background: #e7f9f6;
    }
    .section-header ul li:hover,.robot ul li:hover,.man ul li:hover{
        box-shadow: rgb(238, 238, 238) 0px 0px 8px 2px;
        background: 0px 0px;
    }
    .section-header ul li .name,.robot ul li .name,.man ul li .name{
        line-height: 48px;
        color: rgb(102, 102, 102);
        font-size: 14px;
        width: 85%;
        display: inline-block;
        vertical-align: middle;
    }
    .channel-icon{
        width: 24px;
        height: 24px;
        background-color: rgb(239, 126, 222);
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        border-radius: 50%;
        font-size: 12px;
        color:#fff;
        line-height: 23px;

    }
    i.tran{
       color:rgb(170, 170, 170);
       font-size: 12px;
        margin-right: 10px;
        transition: all .2s cubic-bezier(.4,.1,.5,1) .1s;
        display: inline-block;
    }
    .caret-down{
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .cover{
        width: 100%;
        height: 100%;
        background-color:rgba(0,0,0,.3);
        position: fixed;
        top:0;
        left:0;
        z-index: 1;
    }
    .modal-dialog {
        max-width: 660px;
        margin: 3.75rem auto;
        width: auto;
    }
    .modal-content{
        box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
        display: flex;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 0 solid rgba(0,0,0,.2);
        border-radius: .3rem;
        height: 390px;
        z-index: 99;
    }
    .modal-header{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        padding: 0 1.875rem;
        min-height: 1.5;
        align-items: center;
        height: 50px;
    }
    .modal-close{
        color: #ddd;
    line-height: 50px;
    }
    .cnt{
        padding: 30px;
        box-sizing: border-box;
    }
    .form-group{
        margin-bottom: 1rem;
    }
    .form-group label{
        width: 22%;
        color: #888;
        font-size: 14px;
        font-weight: 400;
        display: inline-block;
        text-align: right;
        margin-right: 10px;
    }
    .form-group label::before{
        content: '*';
        margin-right: 3px;
        position: relative;
        top: 3px;
        color: #ff5b57;
        
    }
    .form-group input{
        width: 75%;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        outline: none;
        padding: 10px;
        box-sizing: border-box;
    }
    .form-group input:hover,.form-group input:focus{
        border-color: #22d7bb;
    }
    .btn{
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
        outline: none;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        margin-left: 145px;
    }
    .btn:hover {
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
    .member{
        height: auto;
        overflow-y: auto;
        box-sizing: border-box;
    }
=======
        <h1>我是通讯录</h1>
    </div>
</template>

<script>
    export default {
        name: "address"
    }
</script>

<style scoped>

>>>>>>> lfm
</style>