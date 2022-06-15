import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

import Home from "../page/Home"
import Search from "../page/Search"
import Login from "../page/Login"
import Register from "../page/Register"
import Detail from "../page/Detail"
import AddCart from "../page/AddCartSuccess"
import ShopCart from "../page/ShopCart"
import Trade from "../page/Trade"
import Pay from "../page/Pay"
import PaySuccess from "../page/PaySuccess"
import Center from "../page/Center"
import MyOrder from "../page/Center/MyOrder"
import TeamOrder from "../page/Center/TeamOrder"


import store from "../store"
let router = new Router({
    // 配置路由
    routes: [
        // 一级路由
        {
            path: "/home",
            component: Home,
            meta: { show: true }
        },
        {
            path: "/search/:keyWord?",
            component: Search,
            meta: { show: true },
            name: "search"
        },
        {
            path: "/login",
            component: Login,
            meta: { show: false },
            name: "login"
        },
        {
            path: "/register",
            component: Register,
            meta: { show: false }
        },
        {
            path: "/detail/:skuid?",
            component: Detail,
            meta: { show: true },
            name: "detail"
        },
        {
            path: "/addToCart/:skuNum?",
            component: AddCart,
            meta: { show: true },
            name: "addToCart"
        },
        {
            path: "/shopCart",
            component: ShopCart,
            meta: { show: true },
            name: "shopCart"
        },
        {
            path: "/trade",
            component: Trade,
            meta: { show: true },
            name: "trade"
        },
        {
            path: "/pay",
            component: Pay,
            meta: { show: true },
            name: "pay"
        },
        {
            path: "/paySuccess",
            component: PaySuccess,
            meta: { show: true },
            name: "paySuccess"
        },
        {
            path: "/center",
            component: Center,
            meta: { show: true },
            name: "center",
            children:[
                {
                    path:'myorder',
                    component:MyOrder
                },
                {
                    path:'teamorder',
                    component:TeamOrder
                },
                {
                    path: "/center",
                    redirect: "MyOrder"
                }
            ]
        },
        // 重定向{项目一启动就展示指定默认的路由组件}
        {
            path: "/*",
            redirect: "/home"
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { y: 0 }
    },
})

 router.beforeEach((to, from, next) => {
    // 判断用户是否登录成功 通过token判断
    // next()
    let token = localStorage.getItem('TOKEN')
    let name = store.state.Home.userInfo.name 
    if (token) {
        if (to.path == '/login') {
            next('/home')
        } else {
            if (name) {
                next()
            } else {
                try {
                    // 没有用户信息 则获取用户信息
                    store.dispatch('checkToken')
                    next()
                } catch (err) {
                    // 获取不到用户信息则需要退出重新登录
                    store.dispatch('exit')
                    next('/login')
                }

            }
        }
    } else {
        if(to.path.indexOf('/center/myorder') != -1 || to.path.indexOf('/pay') != -1 || to.path.indexOf('/paySuccess') != -1){
            alert('请登录后再次重复此操作')
            next('/login')
        }else{
            next()
        }   
    }
    
})

export default router;