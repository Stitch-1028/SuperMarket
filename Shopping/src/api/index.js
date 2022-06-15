import requests from "./request";
import mockrequest from "./mockAjax"
// 三级联动接口
export const reqCategoryList = ()=>{
   return requests({url:"/product/getBaseCategoryList",method:"get"})
}

export const reqMockRequestBanner = () =>{
   return mockrequest({url:"/banner",method:"get"})
}

export const reqMockRequestFloor = () =>{
   return mockrequest({url:"/floor",method:"get"})
}

export const reqGetSearchInfo = (params)=>{
   return requests({url:"/list",method:"post",data:params})
}

// /api/item/{ skuId }
export const reqGoodsInfo = (skuId)=>{
   return requests({url:`/item/${skuId}`,method:'get'})
}

export const reqAddToCar = (skuId,skuNum)=>{
   return requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
}

export const reqCartList = ()=>{
   return requests({url:`/cart/cartList`,method:'get'})
}

export const reqDeleteCart = (skuId)=>{
   return requests({url:`/cart/deleteCart/${skuId}`,method:'DELETE'})
}

export const reqCheckCart = (skuId,isChecked)=>{
   return requests({url:`/cart/checkCart/${skuId}/${isChecked}`})
}

// 获取验证码
export const reqGetPassCode= (phone) => {
   return requests({url:`/user/passport/sendCode/${phone}`,method:"get"})
}

// 注册
export const reqPassPort = (params = {})=>{
   return requests({url:`/user/passport/register`,method:"post",data:params})
}

// 登录
export const reqLogin = (params = {})=>{
   return requests({url:"/user/passport/login",method:"post",data:params})
}

// 校验token
export const reqCheckToken = ()=>{
   return requests({url:"/user/passport/auth/getUserInfo",method:"get"})
}

// 退出登录
export const reqExit = ()=>{
   return requests({url:"/user/passport/logout",method:"get"})
}

// 获取用户地址
export const reqUserAddress = ()=>{
   return requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'})
}

// 获取交易详情
export const reqTradeMoney = ()=>{
   return requests({url:'/order/auth/trade',method:'get'})
}


// 提交订单
export const reqsubmitOrder = (tradeNo,data={})=>{
   return requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,method:'post',data})
}

// 获取订单支付信息
export const reqPaymentinformation = (orderId)=>{
      return requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})
}

//查询支付订单状态
export const Paymentstatus = (orderId)=>{
   return requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'})
}

// 获取我的订单列表
export const reqPayList = (page,limit)=>{
   return requests({url:`/order/auth/${page}/${limit}`,method:"get"})
}