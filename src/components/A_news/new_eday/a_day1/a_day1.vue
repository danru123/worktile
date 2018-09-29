<template>
    <div class="new_detail">
        <div class="new_deta_main">
            <span class="new_tit">企业公告由系统自动创建，所有企业成员都会自动加入到当前群组，该群组无法删除。</span>
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
           <div class="new_de_liuyan">
               <ul>
                    <li>
                       <div class="new_message">
                            <div class="new_ra_he">
                                <span>M</span>
                            </div>
                            <div class="new_me_ri">
                                <span>M</span>
                                <em v-for='item of vList'>{{item.data}}</em>
                                <i ref="i">...</i>
                                <div class="new_me_r">
                                    <span v-for="item of vList">{{item.con}}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                     <li v-for="(item,index) of P">
                         <div class="new_message">
                            <div class="new_ra_he">
                                <span>M</span>
                            </div>
                            <div class="new_me_ri">
                                <span>M</span>
                                <em>{{item.data}}</em>
                                <i @click='close1(index)'>{{item.i}}</i>
                                <div class="new_me_r">
                                    <span>{{item.con}}</span>
                                </div>
                            </div>
                        </div>
                    </li>
               </ul>
           </div>
        </div>
        <div class="new_de_inp">
            <span>
                <i class="iconfont icon-xiaoliansmiley40"></i>
                <i class="iconfont icon-paper-clip"></i>
                <i class="iconfont icon-tianjia"></i>
                <i class="iconfont icon-ai203"></i>
            </span>
            <input type="text" placeholder="按Enter键发送消息" ref="con" @keydown.enter="submit()">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            vList:[
                {
                    con:'hello',
                    data:'10:30',
                    i:'...'
                }
            ],
            P:[],
            isShow:true,
            // 之前时间
            oldDate:'',
            // 当前时间
            newDate:''
        }
    },
    methods:{
        submit(){
            var con = this.$refs.con.value;
            var i = this.$refs.i.html;
            var hours = new Date().getHours(); 
            var minutes = new Date().getMinutes(); 
            var seconds = new Date().getSeconds(); 
            function zero(n){
                return n.toString().length > 1 ? n.toString() : '0' + n.toString();
            }
            var str = hours+':'+zero(minutes)+':'+zero(seconds);
            var getTime = new Date().getTime();
			// console.log(date);
            this.P.push({
                con:con,
                data:str,
                i:'...'
            })
            localStorage.setItem('P',JSON.stringify(this.P));
            this.isShow = !this.isShow;
            this.$refs.con.value = '';
        },
        close1:function(index){
            this.P.splice(index,1);
            localStorage.setItem('P',JSON.stringify(this.P));
            console.log(this.P)
        },
    },
    created(){
        var local = JSON.parse(localStorage.getItem('P'));
        for(var i = 0;i < local.length;i++){
            this.P.push(local[i]);
        } 
    }
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

    .new_me_ri i{
        margin-left: 10px;
        color: #999;
        cursor: pointer;
        font-size: 18px;
    }
    .new_de_inp{
        width: 81%;
        height: 150px;
        position: absolute;
        z-index: 999;
        border:1px solid #ccc;
        background: #fff;
        left: 14px;
        bottom: 112px;
    }
    .new_de_inp span{
        margin-left: 15px;  
        margin-top:10px;
        position: absolute;
    }
    .new_de_inp span i{
        font-size: 18px;
        color: #999;
        margin-right: 15px;
        cursor: pointer;
    }
    .new_de_inp input{
        width: 96%;    
        height: 100%;
        outline: none;
        border: none;
        padding-left: 15px;
    }
    .new_tit{
        color: #999;
        font-size: 13px;
        padding-top: 20px;
        padding-left: 15px;
        position: relative;
        top: 9px;
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
        height: 64%;
        position: absolute;
        left: 1%;
        top: 3%;
        background: #fff;
        overflow: scroll;
    }
    .new_deta_main .new_bind{
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
    .new_message{
        width: 70%;
        height: 62px;
        margin-left: 20px;
        margin-top: 20px;
        position: relative;
    }
    .new_ra_he{
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: #000;
        background-color: rgb(239, 126, 222);
        line-height: 38px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        float: left;
    }
    .new_me_ri{
        width: 80%;
        position: absolute;
        left: 50px;
        font-size: 13px;
    }

    .new_me_ri span{
        margin-right: 10px;
    }
    .new_me_ri em{
        font-size: 12px;
        color: #aaa;
    }
    .new_me_r{
        width: 100%;
        height: 40px;
        background: transparent;
        margin-top: 0px!important;
        margin-left: -20px!important;
    }
    .new_me_r span{
        line-height: 40px;
        font-size: 15   px;
        padding-left:20px;
        color: #999;
    }
    .new_de_liuyan{
        width: 95%;
        height: 70%;
        position: relative;
        margin-top: 10px;
    }
    .new_de_liuyan li{
        margin-top: -17px;
    }
</style>
