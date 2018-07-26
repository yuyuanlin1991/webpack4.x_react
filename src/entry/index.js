/**
 * Created by yuyuanlin on 2018/6/29.
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import MyExpense from '../modules/myExpense'
//import MyPlan from '../modules/myPlan'
import { HashRouter as Router, Route, Link } from "react-router-dom";
//除了HashRouter 外还有BrowseRouter,后者需要后端做配合，以防和别的get请求有冲突
// import asyncComponent from 'loader';
// let MyPlan = asyncComponent(a=>require(['../modules/myPlan'],a));
import Loadable from 'react-loadable';

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
    loader: () => import('../modules/myPlan'),
    loading:MyLoadingComponent,
})


ReactDOM.render(
    <Router >
        <div>
            <ul>
                <li>
                    <Link to="/expense">我的账单</Link>
                </li>
                <li>
                    <Link to="/plan">我的计划</Link>
                </li>
            </ul>
            <hr />
            <Route exact path="/" component={MyExpense} />
            <Route path="/expense" component={MyExpense} />
            <Route path="/plan" component={MyPlan} />
        </div>
    </Router>,
    document.getElementById('app')
);
