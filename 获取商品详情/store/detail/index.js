//detail仓库
import { reqGoodsInfo } from "@/api";

const state = {
  goodInfo: {},
};
const actions = {
  async getGoodInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code === 200) {
      commit("GETGOODINFO", result.data);
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
