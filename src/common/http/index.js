/**
 * Created by yuyuanlin on 2018/8/13.
 */
import axios from "axios"
var requestRoot = "http://localhost:8081";
axios.defaults.baseURL = requestRoot;

var http = {};
http.get = (...argus)=>{
     return axios.get(...argus)
        .then((res)=>{
            if(res.data.code === 1){
                return res.data;
            }else{
                throw new Error(res.data.msg);
            }
        })
        .catch((e)=>{
            throw e
        })
}

export default http;