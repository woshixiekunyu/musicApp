// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import index from '@/page/index'
import router from './router'

import axios from 'axios'

import '@/assets/scss/index.scss'

import '../static/font/iconfont.css'
import '../static/font/iconfont.js'

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	template: '<router-view></router-view>',
//components: { index }
})
