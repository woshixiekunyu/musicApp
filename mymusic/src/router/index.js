import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		redirect:'/index'
  	},
    {
      path: '/index',
      name: 'index',
      components: require('@/page/index'),
      redirect:'/index/mainList',
      children:[
      	{
      		path:'mainList',
      		name:'mainList',
      		components: require('@/page/main/mainList'),
      		redirect:'/index/mainList/mainMylist',
      		children:[
      			{
		      		path:'mainMylist',
		      		name:'mainMylist',
		      		meta:{
		      			mainIdx:0
		      		},
		      		component:r=>require(['@/page/main/pdList/myMusicList'],r)
		//    		components:require('@/page/main/myMusicList')
		      	},
		      	{
		      		path:'maindtlist',
		      		name:'maindtlist',
		      		meta:{
		      			mainIdx:1
		      		},
		      		component:r=>require(['@/page/main/pdList/dtMusicList'],r)
		//    		components:require('@/page/main/myMusicList')
		      	},
		      	{
		      		path:'mainwyylist',
		      		name:'mainwyylist',
		      		meta:{
		      			mainIdx:2
		      		},
		      		component:r=>require(['@/page/main/pdList/wyyMusicList'],r)
		//    		components:require('@/page/main/myMusicList')
		      	},
      		]
      	},
      ]
    }
  ]
})
