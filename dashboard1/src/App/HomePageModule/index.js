import React, { Component } from 'react';
import "./index.css";
import Calender from './Calender/index';
// import Chart from './Chart/index';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
	}
	click=(a)=>{
		let chi=this.refs.ul1.children;
		for(let i=0;i<chi.length;i++){
			chi[i].className=''
		};
		chi[a].className='active1';
	}
    render() {
        return ( 
            <div id="content">
				<div id="content-header" className="mini">
					<h1>Dashboard</h1>
					<ul className="mini-stats box-3">
						<li>
							<div className="left sparkline_bar_good"><span><canvas width="41" height="24" style={{display: 'inline-block', width: '41px', height: '24px', verticalAlign: 'top'}}></canvas></span>+10%</div>
							<div className="right">
								<strong>468</strong>
								New Projects
							</div>
						</li>
						<li>
							<div className="left sparkline_bar_neutral"><span><canvas width="47" height="24" style={{display: 'inline-block', width: '47px', height: '24px', verticalAlign:' top'}}></canvas></span>0%</div>
							<div className="right">
								<strong>1433</strong>
								Daily Users
							</div>
						</li>
						<li>
							<div className="left sparkline_bar_bad"><span><canvas width="41" height="24" style={{display: 'inline-block', width: '41px',height: '24px',verticalAlign: 'top'}}></canvas></span>+50%</div>
							<div className="right">
								<strong>650</strong>
								Tiket Answered
							</div>
						</li>
					</ul>
				</div>
				<div id="breadcrumb">
					<a style={{cursor:"pointer"}} title="Go to Home" className="tip-bottom"><i className="fa fa-home"></i> Home</a>
					<a style={{cursor:"pointer"}} className="current">Dashboard</a>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-12 center" style={{textAlign:'center'}}>					
							<ul ref="ul1" className="quick-actions">
								<li onClick={this.click.bind('',0)} className="active1">
									<a style={{cursor:"pointer"}} >
										<i className="icon-piechart"></i>
										TE China News
									</a>
								</li>
								<li onClick={this.click.bind('',1)}>
									<a style={{cursor:"pointer"}} >
										<i className="icon-cal"></i>
										Calendar
									</a>
								</li>
								<li onClick={this.click.bind('',2)}>
									<a style={{cursor:"pointer"}} >
										<i className="icon-shopping-bag"></i>
										FSS HelpDesk
									</a>
								</li >
								{/* <li>
									<a style={{cursor:"pointer"}} >
										<i className="icon-database"></i>
										Manage DB
									</a>
								</li> */}
								<li onClick={this.click.bind('',3)}>
									<a style={{cursor:"pointer"}} >
										<i className="icon-people"></i>
										IT HelpDesk
									</a>
								</li>
								<li onClick={this.click.bind('',4)}>
									<a style={{cursor:"pointer"}} >
										<i className="icon-lock"></i>
										Security
									</a>
								</li>
								<li onClick={this.click.bind('',5)}>
									<a style={{cursor:"pointer"}} >
										<i className="icon-search"></i>
										Browser
									</a>
								</li>
							</ul>
						</div>	
					</div>
					<br />
					<div className="row">
						<div className="col-xs-12">
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


							<Calender />
							
							{/* <Chart /> */}

							<div className="widget-box">
								<div className="widget-title">
									<span className="icon"><i className="fa fa-signal"></i></span>
									<h5>Site Statistics</h5>
									<div className="buttons">
										<a style={{cursor:"pointer"}} className="btn"><i className="fa fa-refresh"></i> <span className="text">Update stats</span></a>
									</div>
								</div>
								<div className="widget-content">
									<div className="row">
										<div className="col-xs-12 col-sm-4">
											<ul className="site-stats">
												<li><div className="cc"><i className="fa fa-user"></i> <strong>1433</strong> <span style={{color:"#888888",marginLeft:"20px"}}>季度生产目标</span></div></li>
												<li><div className="cc"><i className="fa fa-arrow-right"></i> <strong>16</strong> <span style={{color:"#888888",marginLeft:"20px"}}>季度已生产量</span></div></li>
												<li className="divider"></li>
												<li><div className="cc"><i className="fa fa-shopping-cart"></i> <strong>259</strong> <span style={{color:"#888888",marginLeft:"20px"}}>持续安全生产时间</span></div></li>
												<li><div className="cc"><i className="fa fa-tag"></i> <strong>8650</strong> <span style={{color:"#888888",marginLeft:"20px"}}>季度销售量</span></div></li>
												<li><div className="cc"><i className="fa fa-repeat"></i> <strong>29</strong> <span style={{color:"#888888",marginLeft:"20px"}}>季度利润</span></div></li>
											</ul>
										</div>
										<div className="col-xs-12 col-sm-8">
											<div className="chart"></div>
										</div>	
									</div>							
								</div>
							</div>					
						</div>
					</div>
                </div>
            </div>
         )
    }
}
 
export default HomePage;