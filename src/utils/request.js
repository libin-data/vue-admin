import axios from 'axios'
import { Message } from 'element-ui';

//创建axios
const BASEURL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_BASEURL: process.env.VUE_APP_BASEURL;
const service = axios.create({
    baseURL: BASEURL,
    timeout: 10000
});
console.log(process.env.NODE_ENV)
//添加请求拦截器
service.interceptors.request.use(function (res){
    //在发送请求前做些什么
    // let data = res
    // if(data.data.resCode != 0){
    //     Message.error("");
    //     return Promise.reject(data);
    // }else{
    //     return res
    // }对象指向地址

    return res;
    // return Promise.resolve();
}, function (error){
    //对请求错误做些什么
    return Promise.reject(error);
});

//添加响应拦截器
service.interceptors.response.use(function (response){
    //对响应数据做点什么
    console.log(response)
    return response;
}, function (response){
    //对响应错误做点什么
    return Promise.reject(error);
});

export default service;