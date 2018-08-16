/**
 * Created by yuyuanlin on 2018/6/29.
 **/
import React from 'react';
import ReactDOM from 'react-dom';
import MyExpense from '../modules/myExpense';
//MyExpense未动态加载
import Navigate from "components/navigate";
import "theme/theme.scss"
//import MyPlan from '../modules/myPlan'
import { HashRouter as Router, Route, Link ,Redirect} from "react-router-dom";
//除了HashRouter 外还有BrowseRouter,后者需要后端做配合，以防和别的get请求有冲突
// import asyncComponent from 'loader';
// let MyPlan = asyncComponent(a=>require(['../modules/myPlan'],a));
import Loadable from 'react-loadable';



import { Provider } from 'react-redux';
import  store from "reduxs/store"

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
});

const MyBlog =Loadable({
    loader: () => import('../modules/myBlog'),
    loading:MyLoadingComponent,
});

const Home =Loadable({
    loader: () => import('../modules/home'),
    loading:MyLoadingComponent,
});

const initRouter  = function(){
    let state = store.getState();
    ReactDOM.render(
        <Provider store={store}>
            <Router >
                <div>
                    <Navigate/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/expense" component={()=>(state.userInfo ? <MyExpense/>: <Redirect to="/"/>)}/>
                    <Route path="/plan" component={()=>(state.userInfo ? <MyPlan/>: <Redirect to="/"/>)}/>
                    <Route path="/blog" component={()=>(state.userInfo ? <MyBlog/>: <Redirect to="/"/>)}/>
                </div>
            </Router>
        </Provider>,
        document.getElementById('app')
    );
}
store.subscribe(initRouter);
initRouter();

