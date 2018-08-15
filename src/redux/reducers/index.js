/**
 * Created by yuyuanlin on 2018/8/14.
 */
//定义产生新的state的函数
import {BROWSER_RESIZE,BROWSER_SCROLL,USER_CHANGE} from "../actions/types.js"
const reducer = (state={
    userInfo:null,
    scrollInfo:null,
    browseInfo:null,
},action) => {
    switch (action.type) {
        case BROWSER_RESIZE:
            return {...state,browserInfo:action.payload.browserInfo};
        case BROWSER_SCROLL:
            return action.payload;
        case USER_CHANGE:
            return {...state,userInfo:action.payload.userInfo};
        default:
            return state;
    }
};
export default reducer
