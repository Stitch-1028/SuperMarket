import Vue from "vue";
import vuex from "vuex"

// 引入小仓库
import Home from "./Home"
import Search from "./Search"
import Detail from "./Detail"
import ShopCart from "./ShopCart"
import Register from './Register'
import Login from "./Login"
import Trade from "./Trade"
Vue.use(vuex);


export default new vuex.Store({
    modules:{
        Home,Search,Detail,ShopCart,Register,Login,Trade
    }
})