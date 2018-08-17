/**
 * Created by yuyuanlin on 2018/8/15.
 */
import React from 'react';
import "./styles/home.scss";
import { Form, Input, Select, Button, Grid, Row, Col, Message } from 'lida';
import http from "common/http"
import SelectDemo from "./selectDemo";
const Option = Select.Option;

class home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }


    render() {
        let {state,props} = this;
        return (
            <div className = "home-wrap">
                <div className="home-login">
                    <button onClick = {::this.props.enterPress}>点击</button>
                    {
                        <div>{props.type}</div>
                    }
                </div>
            </div>
        );
    }
}
export default home