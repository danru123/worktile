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
        path:'/missions/',
        component:missions.default,
        name:'项目',
        children:[
            {
                path: '/missions/subordinate',
                name:'下属任务',
                component: require('./components/B_missions/subordinate/subordinate.vue').default,
            },
            {
                path: '/missions/my/',
                name:'我的任务',
                component: require('./components/B_missions/my/my.vue').default,
                children:[
                    {
                        name: '我负责的我的任务',
                        path: "/B_missions/my/directed",
                        component: require('./components/B_missions/my/directed/directed.vue').default,
                        children: [
                            {
                                name: '活动任务我负责的我的任务',
                                path: "/B_missions/my/directed/active",
                                component: require('./components/B_missions/my/directed/active/active.vue').default,
                            },
                            {
                                name: '完成任务我负责的我的任务',
                                path: "/B_missions/my/directed/finish",
                                component: require('./components/B_missions/my/directed/finish/finish.vue').default,
                            },
                        ]
                    },
                    {
                        name: '我分配的我的任务',
                        path: "/B_missions/my/delegated",
                        component: require('./components/B_missions/my/delegated/delegated.vue').default,
                        children: [
                            {
                                name: '活动任务我分配的我的任务',
                                path: "/B_missions/my/delegated/active",
                                component: require('./components/B_missions/my/delegated/active/active.vue').default,
                            },
                            {
                                name: '完成任务我分配的我的任务',
                                path: "/B_missions/my/delegated/finish",
                                component: require('./components/B_missions/my/delegated/finish/finish.vue').default,
                            },
                        ]
                    },
                    {
                        name: '我参与的我的任务',
                        path: "/B_missions/my/following",
                        component: require('./components/B_missions/my/following/following.vue').default,
                        children: [
                            {
                                name: '活动任务我参与的我的任务',
                                path: "/B_missions/my/following/active",
                                component: require('./components/B_missions/my/following/active/active.vue').default,
                            },
                            {
                                name: '完成任务我参与的我的任务',
                                path: "/B_missions/my/following/finish",
                                component: require('./components/B_missions/my/following/finish/finish.vue').default,
                            },
                        ]
                    },
                    {
                        name: '我创建的我的任务',
                        path: "/B_missions/my/created",
                        component: require('./components/B_missions/my/created/created.vue').default,
                        children:[
                            {
                              name: '活动任务我创建的我的任务',
                              path: "/B_missions/my/created/active",
                              component: require('./components/B_missions/my/created/active/active.vue').default,
                            },
                            {
                              name: '完成任务我创建的我的任务',
                              path: "/B_missions/my/created/finish",
                              component: require('./components/B_missions/my/created/finish/finish.vue').default,
                            },
                        ]
                    }
                ]
            },
            {
                path: '/missions/configuration/',
                name:'配置中心',
                component: require('./components/B_missions/configuration/configuration.vue').default,
                children:[
                    {
                        name:'项目配置中心',
                        path:"/B_missions/configuration/project",
                        component: require('./components/B_missions/configuration/project/project.vue').default,
                        children: [
                            {
                                name: '项目模板项目配置中心',
                                path: "/B_missions/configuration/project/templates",
                                component: require('./components/B_missions/configuration/project/templates/templates.vue').default,
                            },
                            {
                                name: '组建管理项目配置中心',
                                path: "/B_missions/configuration/project/addon",
                                component: require('./components/B_missions/configuration/project/addon/addon.vue').default,
                            },
                            {
                                name: '报表管理项目配置中心',
                                path: "/B_missions/configuration/project/insight",
                                component: require('./components/B_missions/configuration/project/insight/insight.vue').default,
                            },
                            {
                              path: '*',
                              redirect: "/B_missions/configuration/project/templates"
                            }
                        ],
                        
                    },
                    {
                        name:'任务配置中心',
                        path:"/B_missions/configuration/task",
                        component: require('./components/B_missions/configuration/task/task.vue').default,
                        children:[
                            {
                                name: '任务类型任务配置中心',
                                path: "/B_missions/configuration/task/type-group",
                                component: require('./components/B_missions/configuration/task/type-group/type-group.vue').default,
                            },
                            {
                                name: '状态管理任务配置中心',
                                path: "/B_missions/configuration/task/state",
                                component: require('./components/B_missions/configuration/task/state/state.vue').default,
                            },
                            {
                                name: '属性管理任务配置中心',
                                path: "/B_missions/configuration/task/prop",
                                component: require('./components/B_missions/configuration/task/prop/prop.vue').default,
                            },
                            {
                                name: '数据管理任务配置中心',
                                path: "/B_missions/configuration/task/datasource",
                                component: require('./components/B_missions/configuration/task/datasource/datasource.vue').default,
                            },
                            {
                                name: '标签管理任务配置中心',
                                path: "/B_missions/configuration/task/tag-mode",
                                component: require('./components/B_missions/configuration/task/tag-mode/tag-mode.vue').default,
                            },
                            {
                              name: '优先级管理任务配置中心',
                              path: "/B_missions/configuration/task/priority-mode",
                              component: require('./components/B_missions/configuration/task/priority-mode/priority-mode.vue').default,
                            },
                            {
                              path: '*',
                              redirect: "/B_missions/configuration/task/type-group"
                            }
                        ]
                    },
                    {
                        name:'安全配置中心',
                        path:"/B_missions/configuration/security",
                        component: require('./components/B_missions/configuration/security/security.vue').default,
                        children:[
                            {
                                name: '角色管理安全配置中心',
                                path: "/B_missions/configuration/security/role-mode",
                                component: require('./components/B_missions/configuration/security/role-mode/role-mode.vue').default,
                            },
                            {
                                name: '安全管理安全配置中心',
                                path: "/B_missions/configuration/security/safe-mode",
                                component: require('./components/B_missions/configuration/security/safe-mode/safe-mode.vue').default,
                            },
                            {
                                name: '权限管理安全配置中心',
                                path: "/B_missions/configuration/security/permission-mode",
                                component: require('./components/B_missions/configuration/security/permission-mode/permission-mode.vue').default,
                            },
                            {
                              path: '*',
                              redirect: "/B_missions/configuration/security/role-mode"
                            }
                        ]
                    },
                    {
                        name:'高级配置中心',
                        path:"/B_missions/configuration/advance",
                        component: require('./components/B_missions/configuration/advance/advance.vue').default,
                        children:[
                            {
                                name: '提醒管理高级配置中心',
                                path: "/B_missions/configuration/advance/reminder-mode",
                                component: require('./components/B_missions/configuration/advance/reminder-mode/reminder-mode.vue').default,
                            },
                            {
                                name: '通知管理高级配置中心',
                                path: "/B_missions/configuration/advance/notification-mode",
                                component: require('./components/B_missions/configuration/advance/notification-mode/notification-mode.vue').default,
                            },
                            {
                                name: '事件高级配置中心',
                                path: "/B_missions/configuration/advance/event",
                                component: require('./components/B_missions/configuration/advance/event/event.vue').default,
                            },
                            {
                              path: '*',
                              redirect: "/B_missions/configuration/advance/reminder-mode"
                            }
                        ]
                    },
                    {
                        name:'全局配置中心',
                        path:"/B_missions/configuration/global",
                        component: require('./components/B_missions/configuration/global/global.vue').default,
                        children:[
                            {
                                name: '工作组建全局配置中心',
                                path: "/B_missions/configuration/global/addons",
                                component: require('./components/B_missions/configuration/global/addons/addons.vue').default,
                            },
                            {
                              path: '*',
                              redirect: "/B_missions/configuration/global/addons"
                            }
                        ]
                    },
                    {
                        path:'*',
                        redirect: "/B_missions/configuration/project/templates"
                    }
                ]
            },
            {
                path: '/missions/trash',
                name:'回收站',
                component: require('./components/B_missions/trash/trash.vue').default,
            },
            
            {
              //如果用户随便输入地址,转到首页   给一个重定位
              path: '*',
              redirect: "/missions/configuration"
            }
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
