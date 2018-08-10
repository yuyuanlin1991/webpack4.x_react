/**
 * Created by yuyuanlin on 2018/8/10.
 */
import "../../theme/Metrize-Icons.css";
import React from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {props} = this;
/*        let y = {a:1,b:3}
        let x= {...y};
        console.log(x);*/
        return (
            <i className = {props.type} />
        );
    }
}
export default App;