/**
 * Created by yuyuanlin on 2018/7/5.
 */
import React from 'react';
import Icon from 'components/icon'
class myPlan extends React.Component {
    constructor(props) {
        super(props);
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