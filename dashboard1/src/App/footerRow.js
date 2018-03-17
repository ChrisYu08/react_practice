import React, { Component } from 'react';
class FooterRow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="row">
				<div id="footer" className="col-xs-12">
					TE(Shanghai) Website2017 - 2018 . Maintained by Local IT <a href="http://www.te.com.cn/chn-zh/about-te/events/electronica-china-2016/auto.html">Cars</a>
				</div>
			</div>
         )
    }
}
 
export default FooterRow;