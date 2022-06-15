import Vue from 'vue'
import App from './App.vue'
import Router from "./router"
import TypeNav from "./components/TypeNav"
import Carousel from "./components/Carousel"
import Pagination from "./components/Pagination"
// 注册全局组件
import store from "./store"
import "./mock/mockServe";
import "swiper";

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as API from './api'


Vue.config.productionTip = false
// 全局组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.use(ElementUI)
new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  render: h => h(App),
  router:Router,
  store
}).$mount('#app')
