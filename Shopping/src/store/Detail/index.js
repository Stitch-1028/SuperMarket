import {reqGoodsInfo,reqAddToCar} from "../../api"
import { getUUID } from "../../utils/uuid_token"
const state = {
    goodInfo:{},
    uuid_token:getUUID()
};
const actions = {
    'getGoodsInfo':async function({commit},skuId){
       let info = await reqGoodsInfo(skuId)
       if(info.code == 200){
           commit('GETGOODSINFO',info.data)
       }
    },
    'AddToCar':async function({commit},obj){
        let skuId = obj.skuId;
        let skuNum = obj.skuNum
        // console.log(skuId,skuNum);
        let result = await reqAddToCar(skuId,skuNum)
        if(result.code == 200){
            return result.data
        }else{
            return Promise.reject(new Error('fail'))
        }
    }
};;
const mutations = {
    'GETGOODSINFO':function(state,data){
        state.goodInfo = data
    }
}
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || []
    },
}

export default {
    state,actions,mutations,getters
}