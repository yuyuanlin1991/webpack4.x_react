/**
 * Created by yuyuanlin on 2018/8/15.
 */
import React from 'react';
import "./styles/home.scss";
import { Form, Input, Select, Button, Grid, Row, Col, Message } from 'lida';

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value:"init"
        }
    }

    submitHandle(isSuccess, formData){
        console.log(isSuccess,formData)
    }
    onSearchHandle(value){
        console.log(value)
    }
    onChangeHandle(value){
        console.log(value);
    }
    selectHandle(data) {
        console.log(data);
    }
    render() {
        let {state} = this;
        return (
            <div className = "home-wrap">
{/*                <div className="top-wrapper"></div>*/}
                <div className="home-login">
                    <Select onSelect={::this.selectHandle} value="jr">
                        <Select.Option value="ga" key="1">公安事业部</Select.Option>
                        <Select.Option value="jr" key="2">金融事业部</Select.Option>
                        <Select.Option value="ny" key="3">能源事业部</Select.Option>
                        <Select.Option value="ly" key="4">楼宇事业部</Select.Option>
                        <Select.Option value="jjfa" key="5">解决方案部</Select.Option>
                    </Select>
                </div>
            </div>
        );
    }
}
export default home