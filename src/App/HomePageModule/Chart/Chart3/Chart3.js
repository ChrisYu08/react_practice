import React, { Component } from 'react';
class Chart3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        var dom = document.getElementById("container3");
        var myChart = echarts.init(dom);
        var app = {};
        var option = null;
        // Generate data
        var category = [];
        var dottedBase = +new Date()-3600 * 20 * 1000;
        var lineData = [];
        var barData = [];

        for (var i = 0; i < 20; i++) {
            var date = new Date(dottedBase += 3600 * 1000);
            category.push([
                // date.getFullYear(),
                // date.getMonth() + 1,
                // date.getDate()
                date.getHours(),
                date.getMinutes()
            ].join(':'));
            var b = Math.random() * 200;
            var d = Math.random() * 200;
            // var b = 100
            // var d = 150
            barData.push(b)
            lineData.push(d + b);
        }


        // option
        option = {
            // backgroundColor: '#0f375f',
            backgroundColor: '#5585b1',
            border:'2px solid #0c3964',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['工位一实时生产总量', '实时无效产品数量','实时有效产品数量'],
                textStyle: {
                    color: '#ffffff'
                }
            },
            xAxis: {
                data: category,
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            },
            yAxis: {
                splitLine: {show: false},
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            },
            series: [{
                name: '工位一实时生产总量',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 16,
                data: lineData
            }, {
                name: '实时有效产品数量',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#14c8d4'},
                                {offset: 1, color: '#35a79e'}
                            ]
                        )
                    }
                },
                data: barData
            }, 
            // {
            //     name: 'line',
            //     type: 'bar',
            //     barGap: '-100%',
            //     barWidth: 10,
            //     itemStyle: {
            //         normal: {
            //             color: new echarts.graphic.LinearGradient(
            //                 0, 0, 0, 1,
            //                 [
            //                     {offset: 0, color: 'rgba(20,200,212,0.5)'},
            //                     {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
            //                     {offset: 1, color: 'rgba(20,200,212,0)'}
            //                 ]
            //             )
            //         }
            //     },
            //     z: -12,
            //     data: lineData
            // }, 
            {
                name: '实时无效产品数量',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {
                    normal: {
                        color: '#ffffff'
                    }
                },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                z: -10,
                data: lineData
            }]
        };;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
            }
            render() { 
                return ( 
                    <div style={{height:'400px',margin:'0'}}>
                        <div id="container3" style={{width:'98%',height: '430px',position:'relative',left:'1%'}}></div>
                    </div>
                )
            }
        }
 
export default Chart3;