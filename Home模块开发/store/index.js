import Vue from "vue"
import Vuex from 'vuex'
//引入小仓库
import home from './home'
import search from './search'
//使用插件一次，vue下的插件要使用
Vue.use(Vuex)


export default new Vuex.Store({
    //vuex模块式开发
    modules: {
        home,
        search
    }
})