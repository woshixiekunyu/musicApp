// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './page/index'
import router from './router'

Vue.config.productionTip = false

//引入字体图标
import '../static/font/iconfont.css'
import '../static/font/iconfont.js'

//引入样式
import '@/assets/scss/index.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
//template:'<router-view/>'
template: '<index/>',
components: { index }
})
