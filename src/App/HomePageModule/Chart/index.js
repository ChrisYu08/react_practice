import React, { Component } from 'react';
// import Chart1 from './Chart1/Chart1';
import Chart2 from './Chart2/Chart2';
import Chart3 from './Chart3/Chart3';
import Check from '../../WorkFlowModule/CheckModule/index';
class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        // let {checkState}=this.props;
        return ( 
            <div>
                <Chart3 />
                {/* <Chart2 /> */}
            </div>
         )
    }
}
 
export default Chart;


