import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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
    
    }
    click_req=()=>{
        for(let i=0;i<2;i++){
            this.refs.wf.children[i].className='';
        }
        this.refs.wf.children[1].className='active';
    }	
    render() { 
        return ( 
            <div id="sidebar">
				<div id="search">
					<input type="text" placeholder="Search here..."/><button type="submit" className="tip-right" title="Search"><i className="fa fa-search"></i></button>
				</div>	
				<ul>
					<li ref="wf_menu1" className="active"><Link onClick={this.click1} to="/homepage"><i className="fa fa-home"></i> <span>Dashboard</span></Link></li>
                    <li ref="wf_menu" className="submenu">
						<a onClick={this.click} style={{cursor:"pointer"}}><i className="fa fa-flask"></i> <span>WorkFlow</span> <i className="arrow fa fa-chevron-right"></i></a>
						<ul ref="wf">
							
							<li onClick={this.click_inq}><Link to="/homepage/workflow/check">查询/Inquiry</Link></li>
							
							<li onClick={this.click_req}><Link to="/homepage/workflow/request">申请/Request Form</Link></li>
							
							
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
					<li><a><i className="fa fa-th"></i> <span>WorkFlow</span></a></li>
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
         )
    }
}
 
export default Sidebar;