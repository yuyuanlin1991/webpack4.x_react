/**
 * Created by yuyuanlin on 2018/8/10.
 */
import "theme/Metrize-Icons.css";
import React from 'react';

const fun = function (){
    alert ([1,2,3].map(n=>n+1));
};

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {props} = this;
        let {className,style} = props;
        let Children = props.children;
        return (
            <span {...props} className = {props.type+" "+className} ><span style={{padding:"0 10px"}}>{Children}</span></span>
        );
    }
}
export default App;