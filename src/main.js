// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import index from '@/page/index'
import router from './router'

import axios from 'axios'

import '@/assets/scss/index.scss'

import '../static/font/iconfont.css'
import '../static/font/iconfont.js'

//引入轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
import 'swiper/dist/css/swiper.css'

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	template: '<router-view></router-view>',
//components: { index }
})
