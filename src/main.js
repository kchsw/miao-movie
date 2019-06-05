import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './viewport.js'
import './assets/iconfont/iconfont.css'
import './assets/style/index.scss'


Vue.config.productionTip = false

Vue.filter('setWH', (url, arg) => {
	return url.replace(/w\.h/, arg)
})
Vue.filter('score', (score = 0) => {
	return score.toFixed(1)
})

// import Scroll from '@/components/Scroll'
// Vue.component('Scroll', Scroll)
import Loading from '@/components/Loading'
Vue.component('Loading', Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
