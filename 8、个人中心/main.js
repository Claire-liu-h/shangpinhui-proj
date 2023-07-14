import Vue from "vue";
import App from "./App";
//三级联动组件---全局组件
import TypeNav from "@/components/TypeNav/TypeNav";
import Carousel from "@/components/Carousel/Carousel";
import Pagination from "@/components/Pagination/Pagination";
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

//引入路由
import router from "@/router";
//引入仓库
import store from "@/store";
//引入mork
import "@/mock/mockServe";
//引入swiper样式
import "swiper/css/swiper.css";
Vue.config.productionTip = false;
//统一引入
import * as API from "@/api";
//elementui
import { Button, MessageBox } from "element-ui";
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
new Vue({
  render: (h) => h(App),
  //全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //注册路由
  router,
  store,
}).$mount("#app");
