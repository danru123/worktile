<template>
    <div class="new_detail">
        <div class="new_deta_main">
            <div class="new_deta_fetch">
                <div class="new_da">
                    <input  type="file" accept="image/*" ref='input' class="input" >
                    <button @click="publish">上传文件</button>
                    <img src="" alt="" ref="img" class="img">
                </div>
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
                <tbody>
                    <tr>
                        <td></td>
                        <td v-show='isShow==false'>312kb</td>
                        <td v-show='isShow==false'>M</td>
                        <td v-for="item of vList" style="position: relative;left:-22%">{{item.data}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            vList:[
                {
                    data:''
                }
            ],
            isShow:true
        }
    },
    methods:{
        publish(){
            this.isShow = !this.isShow;
            let ip = this.$refs.input;
            let formdata = new FormData()
            formdata.append("file", ip.files[0]);
            //上传的照片如果想要在页面中显示
            //html中创建一个img标签 ref设置为img
            let img = this.$refs.img
            const reader = new FileReader()
            reader.readAsDataURL(ip.files[0])
            reader.onload=function(e){
                 img.src=e.target.result
            }
            var hours = new Date().getHours(); 
            var minutes = new Date().getMinutes(); 
            var seconds = new Date().getSeconds(); 
            function zero(n){
                return n.toString().length > 1 ? n.toString() : '0' + n.toString();
            }
            var str = hours+':'+zero(minutes)+':'+zero(seconds);
            console.log(str);
            this.vList.push({
                data:str
            })
            this.$axios
                .post("/kmd-web/adm/updateAd", formdata, {
                      headers: { "Content-Type": "multipart/form-data" }
                   })
                .then(res => {
                    if (res.data.statusCode == 200) {
                        alert("修改成功！");
                        history.go(-1);
                    } else {
                        alert("修改失败！");
                    }
                });
           
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
    .new_de_con tr td{
        padding:0px 15px;
        text-align: center; 
        height: 100px;
        line-height: 100px;
    }
    .img{
        width: 100%;
        height: 300%;
        position: relative;
        left: -591%!important;
        top:62px!important;
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
    .new_de_con{
        width: 100%;
        color: #333;
        margin-bottom: 1.25rem;
        background-color: transparent;
        position: relative;
        top: 15px;
    }
    .new_de_con tr{
        height: 55px;
    }
    .new_de_con tr th{
        padding-left: 35px;
        position: relative;
        border-top: 0;
        color: #888;
        vertical-align: bottom;
        font-weight: 400;
        border-bottom: 1px solid #eee;
        padding: 12px 15px;
    }
    .new_deta_fetch{
        width: 95%;
        margin: 10px;
    }
    .new_deta_fetch div{
        float: right;
        margin-right: 20px;
        width: 159px;
        height: 40px;
        border-radius: 18px;
        background-color: #22d7bb;
        border-color: #22d7bb;
        color: #fff;
        line-height: 28px;
        text-align: center;
        cursor: pointer;
        margin-top: 10px;
    }
    .new_deta_fetch div input{
        height: 35px;
        outline: none;
        position: relative;
        top: 6px;
        left: 15px;
    }
    .new_deta_fetch div button{
        position: relative;
        top: -32px;
        left: 17px;
        margin-left: 44px;
    }
    .new_deta_fetch img{
        display:inline-block;
        font-size: 70px;
        color: #ccc;
        position: relative;
        left: 45%;
        top: 140px;
    }
    .new_deta_fetch  span{
        font-size: 18px;
        color: #ccc;
        position: relative;
        left: 34%;
        top: 160px;
    }
</style>
