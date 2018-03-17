import React, { Component } from 'react';

import './js/js1';
import './js/chartist.min.js';
import './js/jquery.min.js';
import './js/juqery.slimscroll.min.js'
import $ from './js/jquery.min.js';
class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="row">
                <div class="col-md-6">
                    <div class="panel">
                        <div class="panel-heading">
                            <h3 class="panel-title">Area Chart</h3>
                        </div>
                        <div class="panel-body">
                            <div id="demo-area-chart" class="ct-chart"></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="panel">
                        <div class="panel-heading">
                            <h3 class="panel-title">Multiple Chart</h3>
                        </div>
                        <div class="panel-body">
                            <div id="multiple-chart" class="ct-chart"></div>
                        </div>
                    </div>
                </div>
            </div>
         )
    }
}
 
export default Chart;