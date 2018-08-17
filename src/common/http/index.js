/**
 * Created by yuyuanlin on 2018/8/13.
 */
import axios from "axios"
var requestRoot = "http://localhost:8081";
var AUTH_TOKEN = "test_token";
axios.defaults.baseURL = requestRoot;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var http = {};
let method = ["get","post","put","delete"];
method.map((m)=>{
    http[m] =(...args)=>{
        return axios[m](...args)
            .then((res) => {
                if (res.data.code === 1 ) {
                    if(res.status>=200 && res.status<400){
                        return res.data;
                    }else{
                        throw new Error({message:"请求错误"});
                    }
                } else {
                    throw new Error(res.data.msg);
                }
            })
            .catch((e) => {
                throw e
            })
    }
});
http.formPost = (args)=>{
    let params = args.data;
    let url = args.url;
    let form = new FormData();
    for (let key in params ){
        form.append(key,params[key]);
    }
    let config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    return axios.post(url+requestRoot,form,config)
        .then((res)=>{
            if (res.data.code === 1) {
                return res.data;
            } else {
                throw new Error(res.data.msg);
            }
        })
        .catch((e)=>{
            throw e
        })
};

//以下方法是利用jquery-form来上传
/*http.ajaxSubmit = (form, options) => new Promise((resolve, reject) => {
    if(!('data' in options)) {
        options.data = {}
    }
    options.data._csrf = token

    require(['jquery', 'jquery-form'], $ => $(form).ajaxSubmit({
            ...options,
            url: requestRoot + options.url,
            dataType: 'json',
            headers: {
                [header]: token,
                'X-Requested-With': 'XMLHttpRequest'
            },
            success: data => {
                if(data.type == 0) {
                    resolve(data)
                } else {
                    reject(new _Error(data))
                }
            },
            error: ({ responseJSON, statusText, status }) => {
                if(statusText === 'n/a') {
                    //'n/a'是IE8的情况下返回的
                    reject(new _Error('网络异常或您没有权限进行此项操作'))
                } else if(statusText === 'error') {
                    reject(new _Error('网络异常'))
                }
                if(status === 403) {
                    reject(new _Error('您没有权限进行此项操作'))
                } else if(status === 404) {
                    reject(new _Error('网络异常'))
                }
                if(responseJSON) {
                    reject(new _Error(responseJSON))
                }
                reject(new _Error(statusText))
            }
        })
    )
})*/


export default http;