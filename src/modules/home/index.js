/**
 * Created by yuyuanlin on 2018/8/15.
 */
import React from 'react';
import "./styles/home.scss";
import { Input} from 'lida';
import { Button } from 'lida';
import { DatePicker } from 'antd';
import http from "common/http"
import SelectDemo from "./selectDemo";
import Test from "./test";



class home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
/*        http.post("/api/list_post",{
            "title": "我是posts",
            "author": "typicode"
        })
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })*/
    }

    selectHandle(data) {
        console.log(data);
    }

    deviceTypeChange(value){
        this.setState({
            deviceType:{
                id:value.key,
                value:value.value
            }
        })
    }

    inputEnter(e){
        console.log("input",e);
    }

    onChange(value, dateString) {
        console.log(value, dateString);
    }
    enterPress(){
        console.log("xxxx");
    }

    render() {
        let {state} = this;
        return (
            <div className = "home-wrap">
{/*                <div className="top-wrapper"></div>*/}
                <div className="home-login">
                    {/*<Input  placeholder="请输入内容" style={{width:"50%"}} nativeType="text" onPressEnter={::this.inputEnter}/>*/}
                    <Button type="primary">Primary</Button>
                    <DatePicker onChange={::this.onChange} />
                    <Test enterPress={::this.enterPress} type="xxx"/>
{/*                    <SelectDemo/>*/}
{/*                    <Test onEnterPress={::this.enterPress}/>
                    <Input styleName="basic-input" placeholder="请输入内容" />
                    <Button type="primary">Primary</Button>
                    <DatePicker onChange={onChange} />*/}
                </div>
            </div>
        );
    }
}
export default home