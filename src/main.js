import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import "babel-polyfill"
Vue.use(Vuex);

Vue.use(VueRouter);

// 使用路由管理几个子组件
//引入子组件
const News = require('./components/A_news/news.vue');
const Missions = require('./components/B_missions/missions.vue');
const Calendar = require('./components/C_calendar/calendar.vue');
const Driver = require('./components/D_driver/driver.vue');
const Contact = require('./components/E_contact/contact.vue');

//路由配置
const r = [
    {
        path:'/news',
        component:News.default,
        name:'消息'
    },
    {
        path:'/missions',
        component:Missions.default,
        name:'项目'
    },
    {
        path:'/calendar',
        component:Calendar.default,
        name:'日历'
    },
    {
        path:'/driver',
        component:Driver.default,
        name:'网盘'
    },
    {
        path:'/contact/',
        component:Contact.default,
        name:'通讯录',
        children:[
            {
              path:'/contact/rc',
              component:require('./components/E_contact/rc/rc.vue').default,
              name:"日程助手",
            },
            {
                path:'/contact/wp',
                component:require('./components/E_contact/wp/wp.vue').default,
                name:"网盘助手",
            },
            {
                path:'/contact/xm',
                component:require('./components/E_contact/xm/xm.vue').default,
                name:"项目助手",
            },
            {
                path:'/contact/xt',
                component:require('./components/E_contact/xt/xt.vue').default,
                name:"小特机器人",
            },
            {
                path:'/contact/M',
                component:require('./components/E_contact/M/m.vue').default,
                name:"m",
            },
            {
                path:'/contact/channels/123',
                component:require('./components/E_contact/channels/123.vue').default,
                name:"123",
            },
            {
                path:'/contact/channels/forth',
                component:require('./components/E_contact/channels/forth.vue').default,
                name:"四组",
            },
            {
                path:'/contact/',
                redirect:'/contact/M'
            }
          ]
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
      count:1,
      member:[]
    },
    mutations:{
        ADD(state,payload){
            state.member.push(payload);
         },
         GETALL(state,payload){
            state.member=payload;
        },
    },
    actions:{
        async GETALL(context,payload){
            //请求数据
            var data=await fetch('../mapList/').then(res=>res.json());
            context.commit('GETALL',data);
        },
        async ADD({commit},payload){
            //上传数据
            var data=await fetch('../mapList/',{
                "method":"POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body":JSON.stringify(payload)
            }).then(res=>res.json());
            commit('ADD',data);
        },
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
