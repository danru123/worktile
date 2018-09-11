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
        name:'消息'
    },
    {
        path:'/missions',
        component:missions.default,
        name:'项目',
        children:[
            {
                path:'/B_missions/subordinate',
                name:'下属任务',
                component: require('./components/B_missions/subordinate/subordinate.vue').default,
            },
            {
                path:'/B_missions/my',
                name:'我的任务',
                component: require('./components/B_missions/my/my.vue').default,
            },
            {
                path:'/B_missions/configuration',
                name:'配置中心',
                component: require('./components/B_missions/configuration/configuration.vue').default,
                children:[
                    {
                        name:'作业配置中心',
                        path:"/B_missions/configuration/project",
                        component: require('./components/B_missions/configuration/project/project.vue').default,
                    },
                    {
                        name:'任务配置中心',
                        path:"/B_missions/configuration/test",
                        component: require('./components/B_missions/configuration/test/test.vue').default,
                    },
                    {
                        name:'安全配置中心',
                        path:"/B_missions/configuration/security",
                        component: require('./components/B_missions/configuration/security/security.vue').default,
                    },
                    {
                        name:'高级配置中心',
                        path:"/B_missions/configuration/advance",
                        component: require('./components/B_missions/configuration/advance/advance.vue').default,
                    },
                    {
                        name:'全局配置中心',
                        path:"/B_missions/configuration/global",
                        component: require('./components/B_missions/configuration/global/global.vue').default,
                    }
                ]
            },
            {
                path:'/B_missions/trash',
                name:'回收站',
                component: require('./components/B_missions/trash/trash.vue').default,
            },
        ]
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
