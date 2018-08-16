/**
 * Created by yuyuanlin on 2018/7/5.
 */
import React from 'react';
import Icon from 'components/icon';
import http from 'common/http';

class myPlan extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
/*        http.get("/api/list")
            .then((res)=>{
                console.log(res);
            })
            .catch((e)=>{
                console.log(e);
            })*/
        http.get("/api/failure")
            .then((res)=>{
                console.log(res);
            })
            .catch((e)=>{
                console.log(e);
            })
    }

    render() {
        return (
            <div>
                <p>我的计划</p>
                <Icon type = "icon-world" style={{fontSize:30,color:"#ccc"}}/>
                <Icon type = "icon-user-ban" style={{fontSize:20,color:"#111"}}/>
                <Icon/>
            </div>
        );
    }
}
export default myPlan;