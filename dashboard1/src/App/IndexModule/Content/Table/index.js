import React,{Component} from 'react';
import Request from './Request/index';
import Check from './Check/index';
// import "./index.css";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
            {/* <Switch> */}
                <Route path="/table/request" component={Request} />
                <Route path="/table/check" render={()=>{
                    console.log(1);
                    return <Check />
                }} />
            {/* </Switch> */}
            </div>
            // <Check />
            // <Request />
        )
    }
}
 
export default Table;