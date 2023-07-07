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
