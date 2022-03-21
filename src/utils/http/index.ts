import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { type } from 'os'
import Qs from 'qs'

// 相关配置请参考：www.axios-js.com/zh-cn/docs/#axios-request-config-1
const defaultConfig: AxiosRequestConfig = {
    baseURL: '',
    timeout: 10000,
    headers: {},
    // 数组格式参数序列化
    paramsSerializer: params => Qs.stringify(params, { indices: false }),
}

const axiosInstance: AxiosInstance = Axios.create(defaultConfig)

// 请求拦截器
axiosInstance.interceptors.request.use(
    request => {
        console.warn('请求拦截器-----------', request)
        return request
    },
    err => {
        return err
    }
)

//添加响应拦截器
axiosInstance.interceptors.response.use(
    response => {
        console.warn('响应拦截器-----------', response)
        return response
    },
    err => {
        return err
    }
)

/**
 * @param {String } url 访问的接口路径
 * @param {Object} data 接口需要的参数
 * @param {String} type 接口请求方式
 * @param {String} header 接口请求头类型
 * @param {Boolean} thro 接口是否节流
 */

type paramsType = {
    url?: string
    data?: any
}

export const post = async (params: paramsType) => {
    let responseJson = await axiosInstance({
        method: 'POST',
        headers: { 'content-type': 'application/json;charset=UTF-8' },
        url: params.url,
        data: params.data,
    })

    console.warn(responseJson)
    return responseJson
}

export const get = async (params: paramsType) => {
    let responseJson = await axiosInstance({
        method: 'GET',
        url: params.url,
        params: params.data,
    })
    
    console.warn(responseJson)
    return responseJson
}

export default { post, get }
