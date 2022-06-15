import {reqUserAddress,reqTradeMoney} from "../../api"

const state = {
    usersAddress : [],
    getUserTradeMoney:{}
}
const actions = {
    'getUserAddress':async function({commit}){
        let result =  await reqUserAddress()
        if(result.code == 200){
            commit('getUserAddress',result.data)
        }
    },
    'getUserTradeMoney':async function({commit}){
        let result = await reqTradeMoney()
        if(result.code == 200){
            commit('getUserTradeMoney',result.data)
        }
    }
}
const mutations = {
    'getUserAddress':function(state,data){
        state.usersAddress = data
    },
    'getUserTradeMoney':function(state,data){
        state.getUserTradeMoney = data
    }
}
const getters = {
    couponInfoList(state){
        return state.getUserTradeMoney.couponInfoList
    },
    detailArrayList(state){
        return state.getUserTradeMoney.detailArrayList
    },
    orderDetailVoList(state){
        return state.getUserTradeMoney.orderDetailVoList
    },
    
}

export default {
    state,actions,mutations,getters
}