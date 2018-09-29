<style scoped>
    .right_box{
        width:calc(100% - 241px);
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
    .main_header {
        line-height: 55px;
    }
    .mian_con{
        height:45px;
        margin-top:10px;
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
    .modalDiaLog{
        position:fixed;
        top: 0;
        left: 0;
        width: 100%;
        height:100%;
        background-color: rgba(0,0,0,.1);
        z-index:2222;
    }
    .modi{
        width:660px;
        height:410px;
        background-color: #fff;
        border: 0 solid rgba(0,0,0,.2);
        border-radius: .3rem;
        box-shadow: 0 0 1.5rem rgba(0,0,0,.4);
        outline: 0;
        margin:10% auto;
    }
    .modal-header {
        padding: 0 1.875rem;
        min-height: 1.5;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid #eee;
    }
    .modal-header h3 {
        font-size: 1rem;
        font-weight: 500;
    }
    .modal-close{
        color: #ddd;
        line-height: 50px;
        float:right;
        font-size: 1.5rem;
        text-decoration: none;
    }
    .modal-body{
        padding-left: 30px;
        padding-right: 30px;
        height: 360px;
        padding: 20px 0;
    }
    .group{
        width:600px;
        height:60px;
    }
    .wenjian{
        display: block;
        width: 92%;
        height:30px;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        padding: .469rem .875rem;
        font-size: .875rem;
    }
    .color-labels{
        width: 95%;
        height:25px;
        margin-bottom:20px;
    }
    .row-fill{
        width: 92%;
        height:38px;
    }
    .text-right{
        color: #888;
        font-size: 14px;
        font-weight: 400;
        float:left;
    }
     .text-fl{
        color: #888;
        font-size: 14px;
     }
    select{
        outline:none;
        width: 485px;
        height:38px;
         float:right;
         border: 1px solid #eee;
        border-radius: .25rem;
    }
    .btn-pair{
        margin-top: 20px;
        float: left;
        margin-left: 30px;
    }
    .btn{
        width: 106px;
        height:38px;
        color: #fff;
        text-align: center;
        border-radius: 1.25rem;
        outline:none;
        border:1px solid transparent;
    }
    .btn-primary{
        background-color: #22d7bb;
        border-color: #22d7bb;
    }
    .btn-primary:hover {
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
    .btn-link{
         background:none;
         color:#ccc;
    }
    .btn-link:hover {
        color: #22d7bb;
        text-decoration: none;
    }
    .color1{
        background: #22d7bb;
    }
    .color2{
        background: #18bfa4;
    }
    .color3{
        background: #2cccda;
    }
    .color4{
        background: #2dbcff;
    }
    .color5{
        background: #4e8af9;
    }
    .color6{
        background: #7076fa;
    }
    .color7{
        background: #9473fd;
    }
    .color8{
        background: #c472ee;
    }
    .color9{
        background: #ef7ede;
    }
    .color10{
        background: #f969aa;
    }
    .color11{
        background: #fc587b;
    }
    .color12{
        background: #fa5a55;
    }
    .color13{
        background: #ff7747;
    }
    .color14{
        background: #ffa415;
    }
    .color15{
        background: #ffd234;
    }
    .color-labels li{
        margin: 0 6px;
        width: 25px;
        height: 25px;
        float:left;
        border-radius: 50px;
    }
    .el-button{
        width: 136px;
        height: 28px;
        line-height: 28px;
        position: absolute;
        top: 12px;
        right: 8%;
        display: inline-block;
        vertical-align: middle;
        border-radius: 20px;
        background-color: #22d7bb;
        
    }
    .uploaded{
        display:block;
        color: #fff;
        font-size: 14px;
        text-align: center;
        line-height: 7px;
        outline:none;
    }
    .is-success{
        
    }
    .right_hsc .el-upload-list--text{
        width: 891px;
        position: relative;
        left: -687px;
    }
    .del1{
        display:none;
    }
    .mian_con:hover .del1{
        display:block;
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
                <button class="right_hbtn" @click.stop="toggled()">+ 新建</button>
                
                <div class="modalDiaLog" v-show="shows">
                        <div class="modi">
                            <div class="modal-header">
                                <a href="javascript:;" class="modal-close"  @click.stop="toggled()">x</a>
                                <h3 class="modal-title" >新建文件夹</h3>
                                <div class="modal-body">
                                    <div class="group">
                                        <input type="text" v-model="txt" class="wenjian" placeholder="输入文件夹的名称">
                                    </div>
                                    <ul class="color-labels">
                                         <li class="color-labels-li" v-for="item of colors" :class="item.name"></li>
                                    </ul>
                                    <div class="row-fill">
                                        <label class="text-right">所在位置</label>
                                        <select>
                                            <option>企业网盘</option>
                                            <option>个人网盘</option>
                                        </select>
                                    </div>
                                    <br>
                                    <div class="row-fill">
                                        <label class="text-fl">可见范围</label>
                                        <select>
                                            <option>公开：企业所有成员都可以看见此文件夹</option>
                                            <option>私有：只有加入的成员才能看见此文件夹</option>
                                        </select>
                                    </div>
                                    <div class="btn-pair">
                                        <button class="btn btn-primary" @click.stop="add()" @click="toggled()">确定</button>
                                        <button class="btn btn-link" @click.stop="toggled()">取消</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <el-upload
                  class="upload-demo"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-change="handleChange"
                  :file-list="fileList3">
                    <el-button size="small" class="uploaded" type="primary">
                        <i class="iconfont icon3 icon-uploading"></i>
                            上传文件
                        <i class="iconfont icon4 icon-xiangxiajiantou"></i>
                    </el-button>
                </el-upload>
            </div>
        </div>
        <div class="main_box" >
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
            <li class="mian_con"  v-for="item of todos">
                <div class="file_name">
                    <span class="ng_scope">
                        <i class="iconfont icon01 icon-wenjianjiabiheicon"></i>
                        {{item.title}}
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
                <div class="del1">
                     <i class="iconfont icon-shanchu" @click="del(item.id)"></i>
                </div>
            </li>
            <br>
        </div>
        
        <router-view></router-view>

    </div>
</template>

<script>
export default {

    data(){
        return {
            shows:false,
            txt: "",
            alos:[
                {
                    name: '公司制度',
                },
                {
                    name: '资料共享',
                },
                {
                    name: '缺陷管理',
                }
            ],
            colors:[
                {
                    name:'color1'
                },
                 {
                    name:'color2'
                },
                 {
                    name:'color3'
                },
                 {
                    name:'color4'
                },
                 {
                    name:'color5'
                },
                 {
                    name:'color6'
                },
                 {
                    name:'color7'
                },
                 {
                    name:'color8'
                },
                 {
                    name:'color9'
                },
                 {
                    name:'color10'
                },
                 {
                    name:'color11'
                },
                 {
                    name:'color12'
                },
                {
                    name:'color13'
                },
                {
                    name:'color14'
                },
                {
                    name:'color15'
                },
            ],
           fileList3: [
               
            ]
        }
    },
    created() {
            this.$store.dispatch("GETALL1")
        },
        computed: {
            todos() {
                return this.$store.state.todos
            }
        },
    methods:{
        toggled(){
            this.shows = !this.shows;
        },
         handleChange(file, fileList) {
            this.fileList3 = fileList.slice(-3);
          },
          del(id){
                // 只需要一个id就行了
                this.$store.dispatch("DEL1",{
                    id : id
                })
            },
      add() {
                // 如果为空 就 return 掉 什么都不做    
                if(this.txt == '') return
                // 随机一个8位id
                var id = '';
                var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
                for(var i = 0; i < 8; i++) {
                    //~~ 相当于parseInt
                    id+= str[~~(Math.random() * str.length)]
                }
                // 发送add 新增命令
                this.$store.dispatch("ADD1",{
                    title:this.txt,
                    id : id,
                    time:new Date().getTime()
                    
                });
                // 点击后 清空 文本框
                this.txt = ''
            },
    }
}
</script>

