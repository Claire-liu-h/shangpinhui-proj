//home模块的小仓库
import {reqCategoryList} from '@/api'
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}) {
        let result = await reqCategoryList()
        if (result.code === 200) {
            commit('CATEGORYLIST', result.data)
        }
    } 
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}

const state = {
    categoryList: []
}

const getters = {}

export default {
    namespaced: true,
     state, mutations, actions, getters
}