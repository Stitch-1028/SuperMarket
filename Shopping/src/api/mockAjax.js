// 对axios进行二次封装
import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css"
const requests = axios.create({
    // 配置对象
    baseURL:"/mock",
    timeout:5000,
})
// 请求拦截器
requests.interceptors.request.use((config)=>{
    nprogress.start()
    return config
})
// 响应拦截器
requests.interceptors.response.use((response)=>{
    // 服务器响应成功
    nprogress.done()
    return response.data
},(reject)=>{
    // 服务器响应失败
    return reject
})

export default requests;