import React, { Component } from 'react';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="content">
				<div id="content-header" className="mini">
					<h1>Dashboard</h1>
					<ul className="mini-stats box-3">
						<li>
							<div className="left sparkline_bar_good"><span>2,4,9,7,12,10,12</span>+10%</div>
							<div className="right">
								<strong>36094</strong>
								Visits
							</div>
						</li>
						<li>
							<div className="left sparkline_bar_neutral"><span>20,15,18,14,10,9,9,9</span>0%</div>
							<div className="right">
								<strong>1433</strong>
								Users
							</div>
						</li>
						<li>
							<div className="left sparkline_bar_bad"><span>3,5,9,7,12,20,10</span>+50%</div>
							<div className="right">
								<strong>8650</strong>
								Orders
							</div>
						</li>
					</ul>
				</div>
				<div id="breadcrumb">
					<a href="#" title="Go to Home" className="tip-bottom"><i className="fa fa-home"></i> Home</a>
					<a href="#" className="current">Dashboard</a>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-xs-12 center" style={{textAlign:'center'}}>					
							<ul className="quick-actions">
								<li style={{borderColor:"skyblue",borderWidth:"2px"}}>
									<a href="#">
										<i className="icon-database"></i>
										TE China News
									</a>
								</li>
								<li>
									<a href="#">
										<i className="icon-cal"></i>
										IT HelpDesk
									</a>
								</li>
								<li>
									<a href="#">
										<i className="icon-shopping-bag"></i>
										FSS HelpDesk
									</a>
								</li>
								{/* <li>
									<a href="#">
										<i className="icon-database"></i>
										Manage DB
									</a>
								</li> */}
								<li>
									<a href="#">
										<i className="icon-people"></i>
										Public Area
									</a>
								</li>
								<li>
									<a href="#">
										<i className="icon-lock"></i>
										Security
									</a>
								</li>
								<li>
									<a href="#">
										<i className="icon-piechart"></i>
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
							<div className="widget-box">
								<div className="widget-title">
									<span className="icon"><i className="fa fa-signal"></i></span>
									<h5>Site Statistics</h5>
									<div className="buttons">
										<a href="#" className="btn"><i className="fa fa-refresh"></i> <span className="text">Update stats</span></a>
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