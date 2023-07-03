import Vue from 'vue'
import App from './App.vue'
//三级联动组件---全局组件
import TypeNav from '@/components/TypeNav/TypeNav.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)

//引入路由
import router from '@/router'
//引入仓库
import store from '@/store'
//引入mork
import '@/mock/mockServe'
//引入swiper样式
import 'swiper/css/swiper.css'
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    //注册路由
    router,
    store
}).$mount('#app')
