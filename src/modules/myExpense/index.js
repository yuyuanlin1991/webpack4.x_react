/**
 * Created by yuyuanlin on 2018/7/4.
 */
import Card from "../../components/card/card"
import React from 'react';

class myExpense extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>我的账单hhahah</p>
                <Card/>
            </div>
        );
    }
}
export default myExpense;