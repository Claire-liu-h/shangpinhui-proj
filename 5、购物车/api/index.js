//当前这个模块：API进行统一管理
import requests from "./request";
import mockRequests from "./mockRequest";
//三级联动接口
///api/product/getBaseCategoryList get 无参数
//发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () =>
  requests.get("/product/getBaseCategoryList");
//获取banner(Home首页轮播图接口)
export const reqGetBannerList = () => mockRequests.get("/banner");
//获取floor
export const reqGetFloorList = () => mockRequests.get("/floor");

//获取搜索模块 post /api/list reqGetSearchInfo
/* {
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
 */
export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });

//获取商品详细信息的接口 /api/item/{ skuId } get
export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });

//将产品添加到购物车中(或更新某一个产品的个数) reqAddOrUpdateShopCart /api/cart/addToCart/{ skuId }/{ skuNum } post
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" });

//获取购物车列表数据接口   /api/cart/cartList   get  reqCartList
export const reqCartList = () =>
  requests({ url: "/cart/cartList", method: "get" });

//删除购物车 /api/cart/deleteCart/{skuId} delete
export const reqDeleteCartById = (skuId) =>
  requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });

//切换商品选中状态 /api/cart/checkCart/{skuId}/{isChecked} get  reqUpdateCheckedById
export const reqUpdateCheckedById = (skuId, isChecked) =>
  requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });
