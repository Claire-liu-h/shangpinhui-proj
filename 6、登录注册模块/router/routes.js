//引入路由组件
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Search from "@/pages/Search/Search";
import Detail from "@/pages/Detail/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess/AddCartSuccess";
import ShopCart from "@/pages/ShopCart/ShopCart";

export default [
  {
    path: "/shopcart",
    name: "ShopCart",
    component: ShopCart,
    meta: { show: true },
  },
  {
    path: "/addcartsuccess",
    name: "AddCartSuccess",
    component: AddCartSuccess,
    meta: { show: true },
  },
  {
    path: "/detail/:skuId",
    component: Detail,
    meta: { show: true },
  },
  {
    path: "/home",
    component: Home,
    meta: { show: true },
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    name: "Search",
    path: "/search/:keyword?",
    component: Search,
    meta: { isShow: true },
  },
  //重定向
  {
    path: "/",
    redirect: "/home",
  },
];
