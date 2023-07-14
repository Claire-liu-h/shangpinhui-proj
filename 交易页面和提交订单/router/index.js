//引入插件
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

//引入store
import store from "@/store";

//使用插件
Vue.use(VueRouter);

//先保存一份push
let originPush = VueRouter.prototype.push;
//重写push
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve || reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

//配置路由
let router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  if (token) {
    //用户已经登录了还想去login（不能去，停留在首页）
    if (to.path == "/login" || to.path == "/register") {
      next("/home");
    } else {
      //登录，并且去的不是login，用户名已经拥有
      if (name) {
        //放行
        next();
      } else {
        //没有用户名，派发action获取用户信息
        try {
          //获取用户信息成功
          await store.dispatch("getUserInfo");
          //放行
          next();
        } catch (error) {
          //用户名过期的情况
          //清除token
          await store.dispatch("userLogout");
          next("/login");
        }
      }
    }
  } else {
    next();
  }
});

export default router;
