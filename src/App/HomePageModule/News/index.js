import React, { Component } from 'react';
class News extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div> 
                <div style={{marginBottom:"5px"}} className="alert alert-info">
                    [2017-08-25] <strong>TEIS变革进展</strong>
                </div>
                <div style={{marginBottom:"5px"}} className="alert alert-info">
                [2017-07-16] <strong>亲历历史：TE Connectivity助理C919首飞</strong>
                </div>
                <div style={{marginBottom:"5px"}} className="alert alert-info">
                [2017-01-20] <strong>来自信息安全部的假期网上冲浪安全小提示</strong>
                </div>
                <div style={{marginBottom:"5px"}} className="alert alert-info">
                [2016-11-30] <strong>美国大选结果回答</strong>
                </div>
                <div style={{marginBottom:"5px"}} className="alert alert-info">
                [2016-08-04] <strong>如何在TE中国改善网络系统的连接性能</strong>
                </div>
            </div>
         )
    }
}
 
export default News;