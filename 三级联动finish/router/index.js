//引入插件
import Vue from 'vue'
import VueRouter from 'vue-router'

//使用插件
Vue.use(VueRouter)

//先保存一份push
let originPush = VueRouter.prototype.push
//重写push
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve || reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, ()=>{}, ()=>{})
    }
}
//引入路由组件
import Home from '@/pages/Home/Home.vue'
import Login from '@/pages/Login/Login.vue'
import Register from '@/pages/Register/Register.vue'
import Search from '@/pages/Search/Search.vue'
//配置路由
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {show: true}
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            name: 'Search',
            path: '/search/:keyWord?',
            component: Search,
            meta: {show: true}
        },
        //重定向
        {
            path: '/',
            redirect: '/home'
        }
    ]
})