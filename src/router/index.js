import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
	routes:[
		{path:'/',redirect:'/mainPd'},
		{
			path:'/',
			name:'index',
			meta:{
					title:'网易云音乐'
			},
			components:require('@/page/index'),//首页
			children:[
				{
					path:'mainPd',
					name:'mainPd',
					component:r=>require(['@/page/mainPd/mainPd'],r),//主要频道
					redirect:'/mainPd/mpwl',
					children:[
						{
							path:'mpml',
							name:'mpml',
							meta:{
									idx:0
							},//个人音乐频道
							component:r=>require(['@/page/mainPd/mainPdList/mainPdMusicList'],r)
						},
						{
							path:'mpwl',
							name:'mpwl',
							meta:{
									idx:1
							},//网易云音乐频道
							component:r=>require(['@/page/mainPd/mainPdList/mainPdWyyList'],r),
							redirect:'/mainPd/mpwl/wyymusic',
							children:[
								{
									path:'wyymusic',
									name:'wyymusic',
									meta:{
										idx:0
									},
									component:r=>require(['@/page/mainPd/mainPdList/mainwyyList/music'],r)
								},
								{
									path:'wyyvideo',
									name:'wyyvideo',
									meta:{
										idx:1
									},
									component:r=>require(['@/page/mainPd/mainPdList/mainwyyList/vedio'],r)
								},
								{
									path:'wyyradio',
									name:'wyyradio',
									meta:{
										idx:2
									},
									component:r=>require(['@/page/mainPd/mainPdList/mainwyyList/radio'],r)
								}
							]
//														redirect:'/mainPd/mpwl/wyyNList',
//														children:[
//															{
//																path:'wyyNList',
//																name:'wyyNList',
//																meta:{
//																	
//																},//网易云频道选择
//																component:r=>require(['@/page/musicList/navList'],r)
//															}
//														]
						},
						{
							path:'mpdL',
							name:'mpdL',
							meta:{
									idx:2
							},//动态消息频道
							component:r=>require(['@/page/mainPd/mainPdList/mainPdDtList'],r)
						}
					]
				}
			]
		}
	]
})

export default router
