import React, { Component } from 'react';
import "../../Css/bootstrap.min.css";
import "../../Css/font-awesome.css";
import "../../Css/fullcalendar.css";
import '../../Css/jquery.jscrollpane.css';
import "../../Css/unicorn.css";

import Home from './Content/Home/index';
import Table from './Content/Table/index';

// import Request from './Content/Table/Request/index';
// import Check from './Content/Table/Check/index';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
class IndexModule extends Component {
	constructor(props){
		super(props);
		this.state={
			wf_judge:true
		}
	}

click1=()=>{
	this.refs.wf_menu.className="submenu";
		this.refs.wf.style.height="0px";
		setTimeout(() => {
			this.refs.wf.style.display="none";
		}, 600);

	this.refs.wf_menu1.className="active";
	this.refs.wf_menu.className="submenu";
	this.setState({
		wf_judge:true
	})
}
click=()=>{
	let {wf_judge}=this.state;
	let timer1=null;
	//清空子标签的active
	for(let i=0;i<2;i++){
		this.refs.wf.children[i].className='';
	}
	//给打开menu加transition
	this.refs.wf.style.transition=".6s";
	this.refs.wf.style.overflow='hidden';
	//切换 class的active
	this.refs.wf_menu.previousSibling.className="";
	if(wf_judge){
		clearTimeout(timer1);
		this.refs.wf_menu.className="submenu open active";
		this.refs.wf.style.display="block";
		this.refs.wf.style.height="0px";
		timer1=setTimeout(() => {
			this.refs.wf.style.height="80px";
		}, 0);
		
		
	}else{
		clearTimeout(timer1);
		this.refs.wf_menu.className="submenu active";
		this.refs.wf.style.height="0px";
		timer1=setTimeout(() => {
			this.refs.wf.style.display="none";
		}, 600);
	}
	this.setState({
		wf_judge:!wf_judge
	})	
}
click_inq=()=>{
	for(let i=0;i<2;i++){
		this.refs.wf.children[i].className='';
	}
	this.refs.wf.children[0].className='active';
	this.refs.wf_menu.refs.className=''

}
click_req=()=>{
	for(let i=0;i<2;i++){
		this.refs.wf.children[i].className='';
	}
	this.refs.wf.children[1].className='active';
}	
  render() {
    return (
		// <body data-color="grey" className="flat">
		<div id="body_index" data-color="grey" className="flat">
		<div id="wrapper">
			<div id="header">
				<h1><a href="./index.html">Unicorn Admin</a></h1>	
				<a id="menu-trigger" href="#"><i className="fa fa-bars"></i></a>	
			</div>
		
			<div id="user-nav">
	            <ul className="btn-group">
	                <li className="btn" ><a title="" href="#"><i className="fa fa-user"></i> <span className="text">Profile</span></a></li>
	                <li className="btn dropdown" id="menu-messages"><a href="#" data-toggle="dropdown" data-target="#menu-messages" className="dropdown-toggle"><i className="fa fa-envelope"></i> <span className="text">Messages</span> <span className="label label-danger">5</span> <b className="caret"></b></a>
	                    <ul className="dropdown-menu messages-menu">
	                        <li className="title"><i className="fa fa-envelope-alt"></i>Messages<a className="title-btn" href="#" title="Write new message"><i className="fa fa-share"></i></a></li>
	                        <li className="message-item">
	                        	<a href="#">
		                            <img alt="User Icon" src="img/demo/av1.jpg" />
		                            <div className="message-content">
		                            	<span className="message-time">
			                                3 mins ago
			                            </span>
		                                <span className="message-sender">
		                                    Nunc Cenenatis
		                                </span>
		                                <span className="message">
		                                    Hi, can you meet me at the office tomorrow morning?
		                                </span>
		                            </div>
	                        	</a>
	                        </li>
	                        <li className="message-item">
								<a href="#">
		                            <img alt="User Icon" src="img/demo/av1.jpg" />
		                            <div className="message-content">
		                            	<span className="message-time">
			                                3 mins ago
			                            </span>
		                                <span className="message-sender">
		                                    Nunc Cenenatis
		                                </span>
		                                <span className="message">
		                                    Hi, can you meet me at the office tomorrow morning?
		                                </span>
		                            </div>
	                        	</a>
	                        </li>
	                        <li className="message-item">
								<a href="#">
		                            <img alt="User Icon" src="img/demo/av1.jpg" />
		                            <div className="message-content">
		                            	<span className="message-time">
			                                3 mins ago
			                            </span>
		                                <span className="message-sender">
		                                    Nunc Cenenatis
		                                </span>
		                                <span className="message">
		                                    Hi, can you meet me at the office tomorrow morning?
		                                </span>
		                            </div>
	                        	</a>
	                        </li>
	                    </ul>
	                </li>
	                <li className="btn"><a title="" href="#"><i className="fa fa-cog"></i> <span className="text">Settings</span></a></li>
	                <li className="btn"><a title="" href="login.html"><i className="fa fa-share"></i> <span className="text">Logout</span></a></li>
	            </ul>
	        </div>
	       
	       <div id="switcher">
	            <div id="switcher-inner">
	                <h3>Theme Options</h3>
	                <h4>Colors</h4>
	                <p id="color-style">
	                    <a data-color="orange" title="Orange" className="button-square orange-switcher" href="#"></a>
	                    <a data-color="turquoise" title="Turquoise" className="button-square turquoise-switcher" href="#"></a>
	                    <a data-color="blue" title="Blue" className="button-square blue-switcher" href="#"></a>
	                    <a data-color="green" title="Green" className="button-square green-switcher" href="#"></a>
	                    <a data-color="red" title="Red" className="button-square red-switcher" href="#"></a>
	                    <a data-color="purple" title="Purple" className="button-square purple-switcher" href="#"></a>
	                    <a href="#" data-color="grey" title="Grey" className="button-square grey-switcher"></a>
	                </p>
	                {/* <!--
	                <h4>Background Patterns</h4>
	                <h5>for boxed version</h5>
	                <p id="pattern-switch">
	                    <a data-pattern="pattern1" style="background-image:url('assets/img/patterns/pattern1.png');" className="button-square" href="#"></a>
	                    <a data-pattern="pattern2" style="background-image:url('assets/img/patterns/pattern2.png');" className="button-square" href="#"></a>
	                    <a data-pattern="pattern3" style="background-image:url('assets/img/patterns/pattern3.png');" className="button-square" href="#"></a>
	                    <a data-pattern="pattern4" style="background-image:url('assets/img/patterns/pattern4.png');" className="button-square" href="#"></a>
	                    <a data-pattern="pattern5" style="background-image:url('assets/img/patterns/pattern5.png');" className="button-square" href="#"></a>
	                    <a data-pattern="pattern6" style="background-image:url('assets/img/patterns/pattern6.png');" className="button-square" href="#"></a>
	                    <a data-pattern="pattern7" style="background-image:url('assets/img/patterns/pattern7.png');" className="button-square" href="#"></a>
	                    <a data-pattern="pattern8" style="background-image:url('assets/img/patterns/pattern8.png');" className="button-square" href="#"></a>
	                </p>--> */}
	                <h4 className="visible-lg">Layout Type</h4>
	                <p id="layout-type">
	                	<a data-option="flat" className="button" href="#">Flat</a>
	                    <a data-option="old" className="button" href="#">Old</a>                    
	                </p>
	            </div>
	            <div id="switcher-button">
	                <i className="fa fa-cogs"></i>
	            </div>
	        </div>

			<div id="sidebar">
				<div id="search">
					<input type="text" placeholder="Search here..."/><button type="submit" className="tip-right" title="Search"><i className="fa fa-search"></i></button>
				</div>	
				<ul>
					<li ref="wf_menu1" className="active"><Link onClick={this.click1} to="/index"><i className="fa fa-home"></i> <span>Dashboard</span></Link></li>
					<li ref="wf_menu" className="submenu">
						<a onClick={this.click} style={{cursor:"pointer"}}><i className="fa fa-flask"></i> <span>WorkFlow</span> <i className="arrow fa fa-chevron-right"></i></a>
						<ul ref="wf">
							
							<li onClick={this.click_inq}><Link to="/table/check">查询/Inquiry</Link></li>
							
							
							<li onClick={this.click_req}><Link to="/table/request">申请/Request Form</Link></li>
							
							
							{/* <li><a href="buttons.html">Buttons &amp; icons</a></li> */}
						</ul>
					</li>
					<li className="submenu">
						<a href="#"><i className="fa fa-th-list"></i> <span>Form elements</span> <i className="arrow fa fa-chevron-right"></i></a>
						<ul>
							<li><a href="form-common.html">Common elements</a></li>
							<li><a href="form-validation.html">Validation</a></li>
							<li><a href="form-wizard.html">Wizard</a></li>
						</ul>
					</li>
					{/* <li><a href="tables.html"><i className="fa fa-th"></i> <span>Tables</span></a></li> */}
					<li><Link to="/index/workflow"><i className="fa fa-th"></i> <span>WorkFlow</span></Link></li>
					{/* <Route path="/index/workflow" component="Home" /> */}
					<li><a href="grid.html"><i className="fa fa-th-list"></i> <span>Grid Layout</span></a></li>
					<li className="submenu">
						<a href="#"><i className="fa fa-file"></i> <span>Sample pages</span> <i className="arrow fa fa-chevron-right"></i></a>
						<ul>
							<li><a href="invoice.html">Invoice</a></li>
							<li><a href="chat.html">Support chat</a></li>
							<li><a href="calendar.html">Calendar</a></li>
							<li><a href="gallery.html">Gallery</a></li>
							<li><a href="messages.html">Messages</a></li>
						</ul>
					</li>
					<li>
						<a href="charts.html"><i className="fa fa-signal"></i> <span>Charts &amp; graphs</span></a>
					</li>
					<li>
						<a href="widgets.html"><i className="fa fa-inbox"></i> <span>Widgets</span></a>
					</li>
				</ul>
			
			</div>
				
				{/* <Route path="/table" component={Table} /> */}
				<Route path="/index" component={Home} />
			
			{/* <Home /> */}
			{/* <Table /> */}

			<div className="row">
				<div id="footer" className="col-xs-12">
					2012 - 2013 &copy; Unicorn Admin. Brought to you by <a href="https://wrapbootstrap.com/user/diablo9983">diablo9983</a>
				</div>
			</div>
		</div>
		</div>
	// </body>
    );
  }
}

export default IndexModule;
