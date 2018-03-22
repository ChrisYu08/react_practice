import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'
class UserNav extends Component {
    constructor(props) {
        super(props);
        this.state = { 
			messa:[
				{
					time:'3 mins ago',
					name:'Eric',
					txt:'Hi,team! who do you have time this afternoon?',
					src:"img/demo/av1.jpg"

				},
				{
					time:'4 mins ago',
					name:'Lebron James',
					txt:'Hi, can you meet me at the office tomorrow morning?',
					src:"img/demo/av2.jpg"

				},
				{
					time:'5 mins ago',
					name:'Kobe Bryant',
					txt:'Hi,team! we will have a important meeting this week?',
					src:"img/demo/av3.jpg"

				}
			]
		 }
	}
	openM=()=>{
		if(this.refs.mList.style.display=='block'){
			this.refs.mList.style.display='none'
		}else{
			this.refs.mList.style.display='block'
		}
	}
    render() {	
		let {messa}=this.state;
		let {num}=this.props;
		let list= messa.map((e,i)=>{
			return <li key={i} className="message-item">
						<a style={{cursor:"pointer"}} >
							<img style={{float:'left',borderRadius:'4px',overflow:'hidden',marginTop:'5px'}} alt="User Icon" src={e.src} />
							<div className="message-content">
								<span className="message-time">
									{e.time}
								</span>
								<span className="message-sender">
									{e.name}
								</span>
								<span className="message">
									{e.txt}
								</span>
							</div>
						</a>
	                </li>
			
		})
        return (
            <div id="user-nav">
	            <ul className="btn-group">
	                <li className="btn" ><a title="" style={{cursor:'pointer'}}><i className="fa fa-user"></i> <span className="text">Profile</span></a></li>
	                <li onClick={this.openM} className="btn dropdown" id="menu-messages"><a style={{cursor:"pointer"}} data-toggle="dropdown" data-target="#menu-messages" className="dropdown-toggle"><i className="fa fa-envelope"></i> <span className="text">Messages</span> <span className="label label-danger">{num}</span> <b className="caret"></b></a>
	                    <ul ref="mList" className="dropdown-menu messages-menu">
	                        <li className="title"><i className="fa fa-envelope-alt"></i>Messages<a className="title-btn" style={{cursor:"pointer"}} title="Write new message"><i className="fa fa-share"></i></a></li>
	                        {/* <li className="message-item">
	                        	<a style={{cursor:"pointer"}} >
		                            <img style={{float:'left',borderRadius:'4px',overflow:'hidden',marginTop:'5px'}} alt="User Icon" src="img/demo/av1.jpg" />
		                            <div className="message-content">
		                            	<span className="message-time">
			                                3 mins ago
			                            </span>
		                                <span className="message-sender">
		                                    Eric
		                                </span>
		                                <span className="message">
		                                    Hi, can you meet me at the office tomorrow morning?
		                                </span>
		                            </div>
	                        	</a>
	                        </li>
	                        <li className="message-item">
								<a style={{cursor:"pointer"}} >
		                            <img style={{float:'left',borderRadius:'4px',overflow:'hidden',marginTop:'5px'}} alt="User Icon" src="img/demo/av2.jpg" />
		                            <div className="message-content">
		                            	<span className="message-time">
			                                3 mins ago
			                            </span>
		                                <span className="message-sender">
											Lebron James
		                                </span>
		                                <span className="message">
		                                    Hi, can you meet me at the office tomorrow morning?
		                                </span>
		                            </div>
	                        	</a>
	                        </li>
	                        <li className="message-item">
								<a style={{cursor:"pointer"}} >
		                            <img style={{float:'left',borderRadius:'4px',overflow:'hidden',marginTop:'5px'}} alt="User Icon" src="img/demo/av3.jpg" />
		                            <div className="message-content">
		                            	<span className="message-time">
			                                3 mins ago
			                            </span>
		                                <span className="message-sender">
		                                    Kobe Bryant
		                                </span>
		                                <span className="message">
		                                    Hi, can you meet me at the office tomorrow morning?
		                                </span>
		                            </div>
	                        	</a>
							</li> */}
							{list}
	                    </ul>
	                </li>
	                <li className="btn"><a title="" style={{cursor:"pointer"}}><i className="fa fa-cog"></i> <span className="text">Settings</span></a></li>
	                <li className="btn"><Link title="" to="/"><i className="fa fa-share"></i> <span className="text">Logout</span></Link></li>
	            </ul>
	        </div>
        )
    }
}
 
export default UserNav;