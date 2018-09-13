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
				name:'项目'
		},
		{
				path:'/calendar',
				component:Calendar.default,
				name:'日历'
		},
		{
				path:'/driver/',
				component:driver.default,
				name:'网盘',
				children:[
			// 配置子路由
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
