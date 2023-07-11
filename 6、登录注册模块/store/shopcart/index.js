//购物车仓库
import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";
import store from "..";
const state = {
  cartList: [],
};
const actions = {
  //获取购物车列表数据
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code === 200) {
      commit("GETCARTLIST", result.data);
    }
  },
  //删除购物车某一个产品
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId);
    if (result.code === 200) {
      return "OK";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  //修改选中状态
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code === 200) {
      return "OK";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  deleteAllCheckedCart({ dispatch, getters }) {
    let PromiseAll = [];
    getters.cartList.cartInfoList.forEach((element) => {
      let promise =
        element.isChecked == 1
          ? dispatch("deleteCartListBySkuId", element.skuId)
          : "";
      PromiseAll.push(promise);
    });
    return Promise.all(PromiseAll);
  },
  updateAllCartIsChecked({ dispatch, state }, isChecked) {
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch("updateCheckedById", {
        skuId: item.skuId,
        isChecked,
      });
      promiseAll.push(promise);
    });
    return Promise.all(promiseAll);
  },
};
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
