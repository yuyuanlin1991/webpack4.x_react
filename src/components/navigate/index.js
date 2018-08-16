/**
 * Created by yuyuanlin on 2018/8/15.
 */
/* 导航栏，包含logo和登录按钮*/
import React from 'react';
import Icon from 'components/icon';
import http from 'common/http';
import { Link } from "react-router-dom";
import {bindActionCreators} from 'redux';
import { userChange} from "reduxs/actions"
import "./styles/navigate.scss"
import { connect } from 'react-redux';


import { HashRouter as Router, Route} from "react-router-dom";
//除了HashRouter 外还有BrowseRouter,后者需要后端做配合，以防和别的get请求有冲突
// import asyncComponent from 'loader';
// let MyPlan = asyncComponent(a=>require(['../modules/myPlan'],a));
import Loadable from 'react-loadable';



import { Provider } from 'react-redux';
import  store from "reduxs/store"
import MyExpense from 'modules/myExpense';

const MyLoadingComponent = ({ isLoading, error }) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};

const MyPlan =Loadable({
    loader: () => import('modules/myPlan'),
    loading:MyLoadingComponent,
});

const MyBlog =Loadable({
    loader: () => import('modules/myBlog'),
    loading:MyLoadingComponent,
});


class nav extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            login:false,
            userInfo:{}
        }
    }

    componentDidMount(){
        http.get("/api/success")
            .then((res)=>{
                console.log(res);
            })
            .catch((e)=>{
                console.log(e);
            })
    }

    loginHandle() {
        let _user = this.props.userInfo?null:"test1";
        this.props.userChange({userInfo: _user});
    }

    render() {
        let {props} = this;
        let {userInfo} = props;
        return (
            <div className="tab-wrap">
                <Link to="/"  className="tab-title">season's 空间</Link>
                {userInfo && <Link to="/expense" className="tab-item">我的账单</Link>}
                {userInfo && <Link to="/plan" className="tab-item">我的计划</Link>}
                {userInfo && <Link to="/blog" className="tab-item">我的博客</Link>}
                <Icon type="icon-user-ban" className="tab-user" onClick = {::this.loginHandle}><span>{userInfo?userInfo:"登录"}</span></Icon>
            </div>
        );
    }
}
export default connect((state,ownProps)=>({
    userInfo:state.userInfo,
    browserInfo:state.browserInfo,
    scrollInfo:state.scrollInfo
}),(dispatch, ownProps)=>{
    return bindActionCreators({
        userChange: userChange
    },dispatch)
})(nav);