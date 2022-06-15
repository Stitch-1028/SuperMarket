import {reqGetSearchInfo} from "../../api"

const state = {
    searchList:{},
    breads:[]
}
const actions = {
    "reqGetSearchInfo": async function({commit},params={}){
        let result = await reqGetSearchInfo(params);
        console.log(result.data);
         if(result.code == 200){
             commit("reqGetSearchInfo",result.data)
         }
     },
     "PushInBreads":function({commit},keyWord){
        commit("PushInBreads",keyWord)
     }
}

const mutations = {
    "reqGetSearchInfo":function(state,data){
       state.searchList = data
   },
   PushInBreads:function(state,keyWord){
    if(state.breads.indexOf(keyWord) == -1){
        state.breads.push(keyWord)
     }
   }
}

// 计算属性 在项目当中 为了简化数据而生
const getters = {
     goodsList(state){
       return state.searchList.goodsList || [];
     },
     attrsList(state){
       return state.searchList.attrsList || [];
    },
    trademarkList(state){
       return state.searchList.trademarkList || [];
    },
    breads(state){
        return state.breads || [];
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}