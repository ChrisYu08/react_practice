import React, { Component } from 'react';
import {connect} from 'react-redux';
class Chart1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        let {checkState}= this.props;
        var dom = document.getElementById("container");
        var myChart = echarts.init(dom);
        var app = {};
        var option = null;

        let num_eng=260;
        let num_mol=120;
        let num_qul=60;
        let num_ehs=50;
        let num_fin=90;
        let num_mm=30;
        checkState.forEach((e,i)=>{
            if(e.Dept=='Engineering'){
                num_eng++;
            }else if(e.Dept=='MOLD'){
                num_mol++
            }else if(e.Dept=='Quality'){
                num_qul++
            }else if(e.Dept=='EHS'){
                num_ehs++
            }else if(e.Dept=='Facility'){
                num_fin++
            }else if(e.Dept=='MM'){
                num_mm++
            }
        })

        option = {
            title: {
                text: 'TE 各部门流程报告申请统计',
                subtext: 'Application Form'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar = params[1];
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type : 'category',
                splitLine: {show:false},
                data : ['Engineering','MOLD','Quality','EHS','Facility','MM']
            },
            yAxis: {
                type : 'value'
            },
            series: [
                {
                    name: '辅助',
                    type: 'bar',
                    stack:  '总量',
                    itemStyle: {
                        normal: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    data: [0, 0, 0, 0, 0, 0]
                },
                {
                    name: '生活费',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        }
                    },
                    // data:[260, 120, 60, 50, 90, 30]
                    data:[num_eng, num_mol, num_qul, num_ehs, num_fin, num_mm]
                }
            ]
        }
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    }
    render() { 
        return ( 
            <div style={{height:'340px',margin:'0'}}>
                <div id="container" style={{width:'540px',height: '340px',position:'relative',left:'40%',top:'-20px'}}></div>
            </div>
         )
    }
}

export default connect(state=>state,(dispatch)=>{
    return {dispatch:dispatch}
})(Chart1);
// export default Chart1;