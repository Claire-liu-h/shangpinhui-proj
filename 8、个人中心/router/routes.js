//引入路由组件
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Search from "@/pages/Search/Search";
import Detail from "@/pages/Detail/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess/AddCartSuccess";
import ShopCart from "@/pages/ShopCart/ShopCart";
import Trade from "@/pages/Trade/Trade";
import Pay from "@/pages/Pay/Pay";
import PaySuccess from "@/pages/PaySuccess/PaySuccess";
import Center from "@/pages/Center/Center";
//引入二级路由
import myOrder from "@/pages/Center/myOrder/myOrder";
import groupOrder from "@/pages/Center/groupOrder/groupOrder";
export default [
  {
    path: "/center",
    name: "Center",
    component: Center,
    meta: { show: true },
    children: [
      {
        path: "myorder",
        name: "myOrder",
        component: myOrder,
      },
      {
        path: "grouporder",
        name: "groupOrder",
        component: groupOrder,
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    path: "/paysuccess",
    name: "PaySuccess",
    component: PaySuccess,
    meta: { show: true },
  },
  {
    path: "/pay",
    name: "Pay",
    component: Pay,
    meta: { show: true },
  },
  {
    path: "/trade",
    name: "Trade",
    component: Trade,
    meta: { show: true },
  },
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
