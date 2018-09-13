import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'


Vue.use(Vuex);

Vue.use(VueRouter);

// 使用路由管理几个子组件
//引入子组件
const News = require('./components/A_news/news.vue');
const missions = require('./components/B_missions/missions.vue');
const Calendar = require('./components/C_calendar/calendar.vue');
const driver = require('./components/D_driver/driver.vue');
const contact = require('./components/E_contact/contact.vue');

//路由配置
const r = [
    {
        path:'/news',
        component:News.default,
        name:'消息',
        children:[
            {
                path:'/news/new_adriver/',
                component:require('./components/A_news/new_adriver/new_adriver.vue').default,
                name:'项目助手消息',
                children:[
                    {
                        path:'/news/new_adriver/noread',
                        component:require('./components/A_news/new_adriver/noread/noread.vue').default,
                        name:'未读项目助手',
                    },
                    {
                        path:'/news/new_adriver/yesread',
                        component:require('./components/A_news/new_adriver/yesread/yesread.vue').default,
                        name:'已读项目助手',
                    },
                    {
                        path:'/news/new_adriver/detail',
                        component:require('./components/A_news/new_adriver/detail/detail.vue').default,
                        name:'待处理项目助手',
                    },
                    {
                        path:'/news/new_adriver/',
                        redirect:'/news/new_adriver/noread'
                    }
                ]
            },
            {
                path:'/news/new_brobot',
                component:require('./components/A_news/new_brobot/new_brobot.vue').default,
                name:'小特机器人',
                children:[
                    {
                        path:'/news/new_brobot/a_mess',
                        component:require('./components/A_news/new_brobot/a_mess/a_mess.vue').default,
                        name:'消息小特机器人'
                    },
                    {
                        path:'/news/new_brobot/b_file',
                        component:require('./components/A_news/new_brobot/b_file/b_file.vue').default,
                        name:'文件小特机器人'
                    },
                    {
                        path:'/news/new_brobot/c_info',
                        component:require('./components/A_news/new_brobot/c_info/c_info.vue').default,
                        name:'固定信息小特机器人'
                    },
                    {
                        path:'/news/new_brobot/',
                        redirect:'/news/new_brobot/a_mess'
                    }
                ]
            },
            {
                path:'/news/new_ccom',
                component:require('./components/A_news/new_ccom/new_ccom.vue').default,
                name:'企业公告',
                children:[
                    {
                        path:'/news/new_ccom/a_com1',
                        component:require('./components/A_news/new_ccom/a_com1/a_com1.vue').default,
                        name:'消息企业公告'
                    },
                    {
                        path:'/news/new_ccom/b_com2',
                        component:require('./components/A_news/new_ccom/b_com2/b_com2.vue').default,
                        name:'文件企业公告'
                    },
                    {
                        path:'/news/new_ccom/c_com3',
                        component:require('./components/A_news/new_ccom/c_com3/c_com3.vue').default,
                        name:'固定信息企业公告'
                    },
                    {
                        path:'/news/new_ccom/',
                        redirect:'/news/new_ccom/a_com1'
                    }
                ]
            },
            {
                path:'/news/new_eday',
                component:require('./components/A_news/new_eday/new_eday.vue').default,
                name:'日程助手',
                children:[
                    {
                        path:'/news/new_eday/a_day1',
                        component:require('./components/A_news/new_eday/a_day1/a_day1.vue').default,
                        name:'消息日程助手'
                    },
                    {
                        path:'/news/new_eday/b_day2',
                        component:require('./components/A_news/new_eday/b_day2/b_day2.vue').default,
                        name:'文件日程助手'
                    },
                    {
                        path:'/news/new_eday/c_day3',
                        component:require('./components/A_news/new_eday/c_day3/c_day3.vue').default,
                        name:'固定信息日程助手'
                    },
                    {
                        path:'/news/new_eday/',
                        redirect:'/news/new_eday/a_day1'
                    }
                ]
            },
            {
                path:'/news/',
                redirect:'/news/new_adriver'
            },
        ],
    },
    {
        path:'/missions',
        component:missions.default,
        name:'项目',
    },
    {
        path:'/calendar',
        component:Calendar.default,
        name:'日历'
    },
    {
        path:'/driver',
        component:driver.default,
        name:'网盘'
    },
    {
        path:'/contact',
        component:contact.default,
        name:'通讯录'
    },
    {
      //如果用户随便输入地址,转到首页   给一个重定位
        path:'*',
        redirect:'/news'
    }
];

//路由初始化
const router = new VueRouter({
    // 这里的routes 建必须这么写
   routes : r
});

//配置vuex
const store = new Vuex.Store({
    state:{
      count:1
    }
});


new Vue({
  el: '#app',
    store,
    router,
  // render: h => h(App),
    components:{
      App
    }
});
