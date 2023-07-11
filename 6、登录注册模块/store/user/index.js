//注册和登录的仓库
import {
  reqGetCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo,
  reqLogout,
} from "@/api";
import { setToken, getToken, removeToken } from "@/utils/token";
const state = {
  code: "",
  token: getToken(),
  userInfo: {},
};
const actions = {
  //获取验证码
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
    if (result.code === 200) {
      commit("GETCODE", result.data);
      return "OK";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  //用户注册
  async userRegister({ commit }, user) {
    let result = await reqUserRegister(user);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  //用户登录
  async userLogin({ commit }, user) {
    let result = await reqUserLogin(user);
    //服务器下发token，用户唯一标识符（uuid
    if (result.code === 200) {
      ///用户已经登陆成功且获取到token
      commit("USERLOGIN", result.data.token);
      //持久化存储token
      setToken(result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  //获取用户信息
  async getUserInfo({ commit }) {
    let result = await reqUserInfo();
    // console.log(result);
    if (result.code === 200) {
      commit("GETUSERINFO", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
  //退出登录
  async userLogout({ commit }) {
    let result = await reqLogout();
    if (result.code === 200) {
      commit("CLEAR");
      return "ok";
    } else {
      return Promise.reject(new Error("fail"));
    }
  },
};
const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  //清除本地数据
  CLEAR(state) {
    //清除state中的
    state.token = "";
    state.userInfo = {};
    //清除本地的
    removeToken();
  },
};
const getters = {};
export default {
  state,
  actions,
  mutations,
  getters,
};
