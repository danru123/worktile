<template>
    <div class="ad_right">
        <div class="adriver_top">
            <span>
                <img src="../../../assets/3.png" alt="">
                项目助手
            </span>
            <ul class="new_nav">
                <li v-for="item of vList " :class="{cur : $route.name.indexOf(item.title) != -1}">
                    <router-link :to='item.url'>{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="rv">
            <router-view></router-view>
        </div>

        <!-- <div class="tan" v-show='isShow'>
            <div class="tan_up">
                <h3>创建群组</h3>
                <span @click="clo()">X</span>
            </div>
            <div class="tan_down">
                 <div class="tan_d_up">
                     <div class="input">
                          <input type="text" placeholder="群组名称" class="form">
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
                <button class="btn" @click="clo()">确定</button>
                <a href="javascript:;">取消</a>
            </div>
        </div> -->

    </div>
</template>

<script>
export default {
    data(){
        return {
            vList:[
                {
                    title:'未读',
                    url:'/news/new_adriver/noread',
                },
                {
                    title:'已读',
                    url:'/news/new_adriver/yesread',
                },
                {
                    title:'待处理',
                    url:'/news/new_adriver/detail',
                }
            ],
            result:[],
            // isShow:true,
            // item:[
            //     {
            //         color:"one"
            //     },
            //     {
            //         color:"two"
            //     },
            //     {
            //         color:"three"
            //     },
            //     {
            //         color:"red"
            //     },
            //     {
            //         color:"orange"
            //     },
            //     {
            //         color:"yellow"
            //     },
            //     {
            //         color:"green"
            //     },
            //     {
            //         color:"teal"
            //     },
            //     {
            //         color:"cyan"
            //     },
            //     {
            //         color:"secondary"
            //     },
            //     {
            //         color:"success"
            //     },
            //     {
            //         color:"danger"
            //     },
            //     {
            //         color:"a"
            //     },
            //     {
            //         color:"b"
            //     },
            //     {
            //         color:"c"
            //     },
            //     {
            //         color:"d"
            //     },   
            //     {
            //         color:"e"
            //     }, 
            // ],

        }
    },
    // created:{
    //     get();
    // },  
    methods:{
        // clo(){
        //     this.isShow = false;
        // }
    }
}
</script>

<style lang='scss' scoped>
    .ad_right{
        position: absolute;
        width: 100%;
        height: 100%; 
    }
    .adriver_top{
        width: 100%;
        height: 86px;
        position: absolute;
        top: -12px;
    }
    .adriver_top span{
        line-height: 50px;
        font-size: 16px;
        float: left;
        color: #333;
        padding-left: 15px;
    }
    .adriver_top span img{
        vertical-align: middle;
        margin-right: 5px;
    }
    .new_nav {
        padding:0 20px;
        margin-top: 50px;
    }
   .new_nav li{
        float: left;
        width: 100px;
        height: 34px;
        line-height: 30px;
        text-align: center;
    }
    .new_nav li a{
        color: #333;
        font-size: 14px;
    }
    
    .new_nav li.cur{
        border-bottom: 3px solid #22d7bb;
    }
    .new_nav li.cur a{
        color: #22d7bb!important;
    }
    .rv{
        width: 100%;
        position: absolute;
        top: 75px;
        height: 100%;
    }

    // 

</style>
