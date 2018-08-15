/**
 * Created by yuyuanlin on 2018/8/14.
 */
//定义了action创建函数
import {BROWSER_RESIZE,BROWSER_SCROLL,USER_CHANGE} from "./types.js"

var browserResize = payload => ({type: BROWSER_RESIZE, payload});
var browserScroll = payload => ({type: BROWSER_SCROLL, payload});
var userChange = payload => ({type: USER_CHANGE, payload});
export {
    browserResize,
    browserScroll,
    userChange,
}
/*
/!*
 * action types
 *!/

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/!*
 * 其它的常量
 *!/

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/!*
 * action 创建函数
 *!/

export function addTodo(text) {
    return { type: ADD_TODO, text };
}

export function completeTodo(index) {
    return { type: COMPLETE_TODO, index };
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}*/
