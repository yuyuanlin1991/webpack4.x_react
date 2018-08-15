/**
 * Created by yuyuanlin on 2018/7/4.
 */
import Card from "components/card/card"
import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { browserResize, browserScroll, userChange} from "reduxs/actions"

class myExpense extends React.Component {
    constructor(props) {
        super(props);
    }

    changeUser(){
        this.props.userChange({userInfo:"test1"});
    }
    changeBrowser(){
        this.props.browserResize({browserInfo:"chrome"});
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <p>我的账单hhahah</p>
                {this.props.userInfo && <p>用户名{this.props.userInfo}</p>}
                {this.props.browserInfo && <p>浏览器{this.props.browserInfo}</p>}
                <Card/>
                <button onClick={::this.changeUser}>点击改变用户</button>
                <button onClick={::this.changeBrowser}>点击改变浏览器信息</button>
            </div>
        );
    }
}
export default connect((state,ownProps)=>({
    userInfo:state.userInfo,
    browserInfo:state.browserInfo,
    scrollInfo:state.scrollInfo
}), (dispatch, ownProps)=>{
    return bindActionCreators({
        userChange: userChange,
        browserResize:browserResize
    },dispatch)
})(myExpense);