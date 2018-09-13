import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import "babel-polyfill"
import 'vue2-animate/dist/vue2-animate.min.css';
Vue.use(Vuex);

Vue.use(VueRouter);

// 使用路由管理几个子组件
//引入子组件
const News = require('./components/A_news/news.vue');
const Missions = require('./components/B_missions/missions.vue');
const Calendar = require('./components/C_calendar/calendar.vue');
const Driver = require('./components/D_driver/driver.vue');
const Contact = require('./components/E_contact/contact.vue');



// 日历子组件
import all from './components/C_calendar/children/all.vue'
import members from './components/C_calendar/children/members.vue'
import my from './components/C_calendar/children/my.vue'

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
        component:Missions.default,
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
        name:'日历',
        children:[
            {path:'/calendar/all',component:all},
            {path:'/calendar/members',component:members},
            {path:'/calendar/my',component:my},
            {path:'/calendar',redirect: '/calendar/my'}
        ]
    },
    {
        path:'/driver',
        component:Driver.default,
        name:'网盘',
        children:[
			{
				path:'/driver/qiye',
				component:require('./components/D_driver/qiye/qiye.vue').default,
				name:'企业管理',
					children:[
						// 配置子路由
						{
							path:'/driver/qiye/zhidu',
							component:require('./components/D_driver/qiye/zhidu/zhidu.vue').default,
							name:'公司制度'
						},
						{
							path:'/driver/qiye/gongxiang',
							component:require('./components/D_driver/qiye/gongxiang/gongxiang.vue').default,
							name:'资料共享'
						},
						{
							path:'/driver/qiye/guanli',
							component:require('./components/D_driver/qiye/guanli/guanli.vue').default,
							name:'缺陷管理'
						}
					]
			},
			{
				path:'/driver/my',
				component:require('./components/D_driver/my/my.vue').default,
				name:'个人模板',
					children:[
						// 配置子路由
						{
							path:'/driver/my/person-child',
							component:require('./components/D_driver/my/person-child/person-child.vue').default,
							name:'person-child'
						},
					]
				},
				{
					path:'/driver/share',
					component:require('./components/D_driver/share/share.vue').default,
					name:'分享管理'
				},
				{
					path:'/driver/trash',
					component:require('./components/D_driver/trash/trash.vue').default,
					name:'回收站管理'
				},
				{
					//如果用户随便输入地址,转到首页   给一个重定位
						path:'/driver/',
						redirect:'/driver/qiye'
				}
								
			]
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
   routes : r,
   mode:'history'
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
