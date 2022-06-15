import {reqGetPassCode,reqPassPort} from "../../api"

const state = {
    code:''
}
const actions = {
    'getPassCode':async function({commit},phone){
       let result = await reqGetPassCode(phone)
       if(result.code == 200){
          commit('getPassCode',result.data)
       }else{
            console.log(result);
       }
    },
    'registerUser':async function({commit},params){
        let result =  await reqPassPort(params)
        if(result.code == 200){
            console.log("注册成功");
            return result.code
        }else{
            console.log('注册失败');
            return result.code
        }
    }
}
const mutations = {
    'getPassCode':function(state,code){
        state.code = code
    },

}
const getters = {}

export default {
    state,actions,mutations,getters
}