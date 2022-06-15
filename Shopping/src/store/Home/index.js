import {reqCategoryList,reqMockRequestBanner,reqMockRequestFloor,reqCheckToken} from "../../api/index"

const state = {
    categoryList:[],
    bannerList:[],
    floorList:[],
    userInfo:{}
}

const actions = {
    "categoryList":async function({commit}){
       let result = await reqCategoryList();
       if(result.code == "200"){commit("CATEGORYLIST",result.data)}
    },
    "getBanner":async function({commit}){
        let result = await reqMockRequestBanner();
        if(result.code == 200){commit("GETBANNERLIST",result.data)}
    },
    "getFloor":async function({commit}){
        let result = await reqMockRequestFloor();
        if(result.code == 200){commit("GETFLOORLIST",result.data)}
    },
    'checkToken':async function({commit}){
        let result = await reqCheckToken()
        
        if(result.code == 200){
            commit('checkToken',result.data)
        }
        
    },
}

const mutations = {
    "CATEGORYLIST":function(state,categoryList){
        state.categoryList = categoryList;
    },
    "GETBANNERLIST":function(state,bannerList){
        state.bannerList = bannerList;
    },
    "GETFLOORLIST":function(state,floorList){
        state.floorList = floorList
    },
    "checkToken":function(state,data){
        state.userInfo = data
    }
}

const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
}