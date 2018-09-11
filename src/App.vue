<template>
  <div style="height: 100%;width:100%">
    <header>
      <div class="name">
          <img src="./assets/name.png" alt="">
      </div>
      <ul>
        <li v-for="item of tabNav">
          <router-link :to='item.url'>{{item.title}}</router-link>
        </li>
      </ul>
      <div class="ft"  v-for="item of tabNav1">
        <router-link :to='item.url'>{{item.title}}</router-link>
        <div class="m">M</div>
      </div>
    </header>
    <!-- 用于展示路由连接的组件 -->
    <router-view class="nav"></router-view>
  </div>

</template>
<script>
    export default {
        name: 'app',
        data () {
            return {
                tabNav:[
                    {
                        title:'消息',
                        url:'./news'
                    },
                    {
                        title:'项目',
                        url:'./missions'
                    },
                    {
                        title:'日历',
                        url:'./calendar'
                    },
                    {
                        title:'网盘',
                        url:'./driver'
                    },
                ],
                tabNav1:[
                     {
                        title:'通讯录',
                        url:'./contact/'
                    }
                ]
            }
        }
    }
</script>

<style>
     #app{
            width: 100%;
            height: 100%;
        }
      header{
        flex-shrink: 0;
        position: relative;
        width: 70px;
        height: 100%;
        background: #22d7bb;
        overflow-y: hidden;
        float: left;
        }
       header .name{
          width: 70px;
          height: 88px;
          line-height: 123px;
          text-align: center;
          
          }
        img{
            width: 50px;
            height: 50px;
            border-radius: 12px;
        }
        .name img:hover{
          opacity: .7;
        }
        .ft{
            position: absolute;
            bottom: 0;
            width: 100%;
            text-align: center;      
        }
    .m{
        position: relative;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 16px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        line-height: 48px;
        font-size: 12px;
        vertical-align: middle;
        background-color: rgb(45, 188, 255);
        color: #fff;
        }
      .m:hover{
            opacity: .7;
        }
      header ul li{
        list-style: none;
        display: inline-block;
        width: 70px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        
      }
      .nav{
          height: 100%;
      }
      header a{
            color:#fff;
            display: inline-block;
            width: 100%;
            height: 70px;
            line-height: 70px;
            text-decoration: none;
        }
      
      header  ul li a:hover{
            background: #18bfa4;
        }
</style>
