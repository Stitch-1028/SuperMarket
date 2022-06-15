

import {reqCartList,reqAddToCar,reqDeleteCart,reqCheckCart} from "../../api"
const state = {
  goodsInfo:[]
}
const actions = {
    'GetCartList':async function({commit}){
      let result = await reqCartList()
      if(result.code == 200){
          commit('GETCARTLIST',result.data)
      }else{
          return Promise.reject(new Error("Fail"))
      }
    
    },
    'reqAddToCar':async function({commit},params={}){
        await reqAddToCar(params.skuId,params.skuNum)
    },
    'DeleteGood':async function({commit},skuId){
      await reqDeleteCart(skuId)
    },
    'changeIsChecked':async function({commit},good){
      await reqCheckCart(good.skuId,good.isChecked)
    },
    'DeleteAll':function({commit},arr){
        Promise.all(arr).then(()=>{
            console.log("成功了");
        },()=>{
            console.log("失败了");
        })
    },
    'AllCheckOrAllDone':function({commit},arr){
      Promise.all(arr).then(()=>{
          console.log('成功了');
      },()=>{
          console.log('失败了');
      })
    }
}
const mutations = {
  'GETCARTLIST':function(state,data){
    if(data.length > 0){
      state.goodsInfo = data[0].cartInfoList
    }else{
      state.goodsInfo = []
    }
      
  }
}
const getters = {
    
}

export default {
    state,actions,mutations,getters
}