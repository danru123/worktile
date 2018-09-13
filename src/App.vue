<template>
<<<<<<< HEAD
  <div style="height: 100%;width:100%">
=======
  <div style="height: 100%;">
>>>>>>> wxl
    <header>
      <div class="name">
          <img src="./assets/name.png" alt="">
      </div>
      <ul>
<<<<<<< HEAD
        <li v-for="item of tabNav">
=======
        <!-- 样式要在点击的标题与路由中的标题匹配时展示 -->
        <!-- <li v-for="item of tabNav"  > -->
            <li v-for="item of tabNav" :class="{cur : $route.name.indexOf(item.title) != -1}">
          <!-- 跳转 -->
>>>>>>> wxl
          <router-link :to='item.url'>{{item.title}}</router-link>
        </li>
      </ul>
      <div class="ft"  v-for="item of tabNav1">
        <router-link :to='item.url'>{{item.title}}</router-link>
        <div class="m">M</div>
      </div>
    </header>
    <!-- 用于展示路由连接的组件 -->
<<<<<<< HEAD
    <router-view class="nav"></router-view>
=======
    <router-view></router-view>
>>>>>>> wxl
  </div>

</template>
<script>
<<<<<<< HEAD
<<<<<<< HEAD
export default {
  data() {
    return {
      tabNav: [
        {
          title: "消息",
          url: "/news"
        },
        {
          title: "项目",
          url: "/missions"
        },
        {
          title: "日历",
          url: "/calendar"
        },
        {
          title: "网盘",
          url: "/driver"
}
      ],
      tabNav1: [
        {
          title: "通讯录",
          url: "/contact"
=======
=======
>>>>>>> wxl
    export default {
        name: 'app',
        data () {
            return {
                tabNav:[
                    {
                        title:'消息',
                        url:'/news'
                    },
                    {
                        title:'项目',
                        url:'/missions'
                    },
                    {
                        title:'日历',
                        url:'/calendar'
                    },
                    {
                        title:'网盘',
                        url:'/driver'
                    },
                ],
                tabNav1:[
                     {
                        title:'通讯录',
<<<<<<< HEAD
                        url:'/contact/'
                    }
                ]
            }
>>>>>>> wdr
        }
      ]
    };
  }
};
</script>

<style>
      #app{
=======
                        url:'/contact'
                    }
                ]
            }
        }
    }
</script>

<style>
     #app{
>>>>>>> wxl
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
<<<<<<< HEAD
          }
       header img{
            width: 50px;
            height: 50px;
            border-radius: 12px;
=======
          
>>>>>>> wxl
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
