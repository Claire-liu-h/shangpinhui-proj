//home模块的小仓库
import {reqCategoryList, reqGetBannerList, reqGetFloorList} from '@/api'
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}) {
        let result = await reqCategoryList()
        if (result.code === 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    async getBannerList({commit}) {
        let result = await reqGetBannerList()
        if (result.code === 200) {
            commit('BANNERLIST', result.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqGetFloorList()
        if (result.code === 200) {
            commit('GETFLOORLIST', result.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
}

const state = {
    //商品分类的数据,仓库里面数据起始数值不要瞎写【服务器返回的是啥】
    categoryList: [],
    //首页轮播图的数据
    bannerList: [],
    //floor的数据
    floorList: []
}

const getters = {}

export default {
    namespaced: true,
     state, mutations, actions, getters
}