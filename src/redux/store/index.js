/**
 * Created by yuyuanlin on 2018/8/14.
 */

import { createStore, combineReducers, applyMiddleware  } from "redux";
import reducer from "../reducers/index.js";

var store = createStore(reducer);

export default store;