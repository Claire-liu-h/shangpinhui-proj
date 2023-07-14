//detail仓库
import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
//封装游客身份模块uuid-------生成一个随机字符串（不能再变了）
import { getUUID } from "@/utils/uuid_token";
const state = {
  goodInfo: {},
  uuid_token: getUUID(),
};
const actions = {
  //获取产品信息的action
  async getGoodInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code === 200) {
      commit("GETGOODINFO", result.data);
    }
  },
  //将产品添加到购物车中
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    //发请求 await：等待结果
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    if (result.code === 200) {
      //代表服务器加入购物车成功
      return "OK";
    } else {
      //失败
      return Promise.reject(new Error("fail"));
    }
  },
};
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
//简化数据而生
const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || {};
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
