import {reqLogin,reqExit} from "../../api"

import router from "../../router"

const state = {
    token :  localStorage.getItem('TOKEN')
}
const actions = {
    'reqLogin':async function({commit},params){
        let result = await reqLogin(params)
        if(result.code == 200){
            localStorage.setItem('TOKEN',result.data.token)
        }
        return result
    },
    'exit':function({commit}){
        let result = reqExit()
        if(result.code == 200){
            router.push('/login')
        }
        console.log(result);
    }
}
const mutations = {
    

}
const getters = {}

export default {
    state,actions,mutations,getters
}