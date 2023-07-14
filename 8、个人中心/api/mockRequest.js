//对axios进行二次封装(请求、响应拦截器)
import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
//引入进度条样式
import 'nprogress/nprogress.css'

const requests = axios.create({
    baseURL: "/mock",
    timeout: 5000
})

//请求拦截器
requests.interceptors.request.use((config) => {
    //进度条开始
    nprogress.start()
    return config
})
//响应拦截器
requests.interceptors.response.use((res) => {
    //进度条结束
    nprogress.done()
    return res.data
}, (error) => {
    //响应失败的回调函数
    // return Promise.reject(new Error('failed'))
})

//对外暴露
export default requests