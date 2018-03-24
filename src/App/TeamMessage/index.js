import React, { Component } from 'react';
class TeamMessage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
			arr:[
				{	
					from:'John Doe',
					'fromdoe':'john-doe',
					to:'Eric',
					time:'8 Sep 2013, 10:23 PM',
					txt:'12',
					p1:'Hi George!',
					p2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut blandit ligula. In accumsan mauris at augue feugiat consequat. Aenean consequat sem sed velit sagittis dignissim. Phasellus quis convallis est. Praesent porttitor mauris nec lectus mollis, eget sodales libero venenatis. Cras eget vestibulum turpis. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam turpis velit, tempor vitae libero ac, fermentum laoreet dolor.',
					p3:'John Doe',
					im:"img/demo/av1.jpg",
					onoff:true
				},
				{	
					from:'Kobe Bryant',
					'fromdoe':'kobe-doe',
					to:'Lebron James',
					time:'8 Sep 2013, 08:46 PM',
					txt:'12',
					p1:'Hi George!',
					p2:'Please remember to call and tell me your train number and time of arrival so that I can meet you at the railway station. By the way, it’s very hot here and we have a lot of sunshine, so don’t forget to wear you sunglasses.',
					p3:'John Doe',
					im:"img/demo/av2.jpg",
					onoff:false
				},
				{	
					from:'Lebron James',
					'fromdoe':'lebron-doe',
					to:'Kobe Bryant',
					time:'8 Sep 2013, 11:16 PM',
					txt:'12',
					p1:'Hi George!',
					p2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut blandit ligula. In accumsan mauris at augue feugiat consequat. Aenean consequat sem sed velit sagittis dignissim. Phasellus quis convallis est. Praesent porttitor mauris nec lectus mollis, eget sodales libero venenatis. Cras eget vestibulum turpis. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam turpis velit, tempor vitae libero ac, fermentum laoreet dolor.',
					p3:'John Doe',
					im:"img/demo/av3.jpg",
					onoff:false
				},
				{	
					from:'Kobe Bryant',
					'fromdoe':'kobe-doe',
					to:'Dwyane Wade',
					time:'8 Sep 2013, 04:36 PM',
					txt:'12',
					p1:'Hi George!',
					p2:'Please remember to call and tell me your train number and time of arrival so that I can meet you at the railway station. By the way, it’s very hot here and we have a lot of sunshine, so don’t forget to wear you sunglasses.',
					p3:'John Doe',
					im:"img/demo/av1_1.jpg",
					onoff:false
				}
			],
			arr0:[]
		 }
    }
    newClick=()=>{
        this.refs.outBox.style.display='block';
        setTimeout(() => {
            this.refs.outBox.classList.add('in');
            this.refs.shadow.style.display='block'; 
        }, 100);
           
    }
    cancel=()=>{
        this.refs.outBox.style.display='none';
        this.refs.outBox.classList.remove('in');
        this.refs.shadow.style.display='none'; 
	}
	ok=()=>{
		let {arr,arr0}=this.state;
		let {numFn}=this.props;
		let arr1=arr;
		let inpTo = this.refs.inpTo;
		let inpSub = this.refs.inpSub;
		let textA = this.refs.textA;
		let date= new Date();
		date=date+'';
		date=date.slice(0,24);
		if(!inpTo.value.trim()||!inpSub.value.trim()||!textA.value.trim()) return;
		let newObj={
			from:'Chris',
			'fromdoe':'chris-doe',
			to:'inpTo',
			time: date,
			txt:'12',
			im:"img/demo/av2.jpg",
			p1:'Hi '+ inpTo.value+'!',
			p2:textA.value,
			p3:'Chris',
			onoff:false
		};
		arr1.push(newObj);


		arr1.forEach((e,i)=>{
			if(i>3){
				arr0.push(e);
				this.setState({
					arr0:arr0
				})
				//给父级传数据
				numFn(this.state.arr.length*1)
			}
		});

		this.setState({
			arr:arr1
		})
		this.cancel();
	}
	ClickCh=(a1)=>{
		let chil=this.refs.ch.children;
		for(let i=0;i<chil.length;i++){
			chil[i].className='';
		};
		chil[a1].className='active';
	}
	changeChat=(ev)=>{
		let {arr}=this.state;
		let arr1=arr;
		for(let i=0;i<this.refs.chats.children.length;i++){
			this.refs.chats.children[i].classList.remove('active');
			arr1[i].onoff=false;
		}
		if(ev.target.tagName=='SPAN'||ev.target.tagName=='IMG'){
			ev.target.parentNode.classList.add('active');
			for(let i=0;i<this.refs.chats.children.length;i++){
				if(this.refs.chats.children[i]==ev.target.parentNode){
					arr1[i].onoff=true;
					this.setState({
						arr:arr1
					})
				}
			}
			
		}else if(ev.target.tagName=='LI'){
			ev.target.classList.add('active')
		}
		
	}
    render() { 
		let {arr,arr0}=this.state;
		let t =new Date();
		t=t+'';
		let arr1=arr.filter((e,i)=>{
			return e.onoff
		});
		let lis=null;
		if(arr0.length){
			lis=arr0.map((e,i)=>{
				return <li key={i} className="messages-item">								
				<span className="messages-item-star" title="Mark as starred"><i className="fa fa-star"></i></span>
				<img className="messages-item-avatar" src="img/demo/av4.jpg" />
				<span className="messages-item-from">{e.from}</span>
				<div className="messages-item-time"><span className="text">{t.slice(16,21)}</span>
					<div className="messages-item-actions">
						<a style={{cursor:"pointer"}} title="Reply" data-toggle="dropdown"><i className="fa fa-mail-reply"></i></a>
						<div className="dropdown">
							<a style={{cursor:"pointer"}} title="Move to folder" data-toggle="dropdown"><i className="fa fa-folder-open"></i></a>
							<ul className="dropdown-menu pull-right">
								<li><a style={{cursor:"pointer"}}>Work</a></li>
								<li><a style={{cursor:"pointer"}}>Partners</a></li>
								<li><a style={{cursor:"pointer"}}>Family</a></li>
							</ul>
						</div>
						<div className="dropdown">
							<a style={{cursor:"pointer"}} title="Attach to tag" data-toggle="dropdown"><i className="fa fa-tag"></i></a>
							<ul className="dropdown-menu pull-right">
								<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'green'}}></i>Friends</a></li>
								<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'red'}}></i>Important</a></li>
								<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'blue'}}></i>Socials</a></li>
							</ul>
						</div>
					</div>
				</div>
				<span className="messages-item-subject">Astra anea en bumanso ...</span>
				<span className="messages-item-preview">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do antera ...</span>
		</li>
			})
			
		}
        return ( 
            <div id="content">
			<div id="content-header">
				<h1>Messages</h1>
				<div onClick={this.newClick} className="btn-group colored">
					<a className="btn btn-inverse" data-toggle="modal" style={{cursor:'pointer'}}><i className="fa fa-envelope"></i> Compose New</a>
				</div>
                {/* 弹出框 */}
                <div ref="shadow" style={{width:'100%',height:'100%',position:'absolute', top:'0',left:'0',background:'black',opacity:'.8',display:'none',zIndex:'1030'}}></div>
				<div ref="outBox" className="modal fade mail-new-message" id="new-mail" role="modal">
                    <div style={{opacity:'1'}} className="modal-dialog">
					    <div className="modal-content">
					    	<div className="modal-header">
					        	<button onClick={this.cancel} type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					        	<h4 className="modal-title">New message</h4>
					    	</div>
					    	<div className="modal-body nopadding">
					        	<form>
									<div className="new-message-to">
										To: <input ref="inpTo" type="text" name="message-to" />
									</div>
									<div className="new-message-subject">
										Subject: <input ref="inpSub" type="text" name="message-subject" />
									</div>
									<div className="new-message-content">
										<textarea ref="textA" name="message-content"></textarea>
									</div>
					        	</form>
					    	</div>
					    	<div className="modal-footer">
					        	<button onClick={this.cancel} type="button" className="btn btn-danger" data-dismiss="modal">Discard</button>
					        	<button onClick={this.cancel} type="button" className="btn btn-success" data-dismiss="modal">Save as draft</button> &nbsp; &nbsp; 
					        	<button onClick={this.ok} type="button" className="btn btn-primary" data-dismiss="modal">Send</button>
					      	</div>
					    </div>
					</div>
				</div>
			</div>
			<div id="breadcrumb">
				<a style={{cursor:'pointer'}} title="Go to Home" className="tip-bottom"><i className="fa fa-home"></i> Home</a>
				{/* <a style={{cursor:"pointer"}}>Sample Pages</a> */}
				<a style={{cursor:'pointer'}} className="current">Messages</a>
			</div>				
				<div className="row">
					<div className="col-xs-12">
						<div className="widget-box widget-messages">
							<div className="widget-title">
								<span className="icon">
									<i className="fa fa-envelope-alt"></i>
								</span>
								<h5>Messages</h5>
								<div className="buttons">
									<a className="btn go-full-screen"><i className="fa fa-resize-full"></i></a>
								</div>
								<ul ref="ch" className="nav nav-tabs pull-right">
									<li onClick={this.ClickCh.bind('',0)} className="active"><a style={{cursor:'pointer'}} data-toggle="tab"><i className="fa fa-inbox"></i><span className="text"> Inbox</span></a></li>
									<li onClick={this.ClickCh.bind('',1)}><a style={{cursor:'pointer'}} data-toggle="tab"><i className="fa fa-location-arrow"></i><span className="text"> Sent</span></a></li>
									<li onClick={this.ClickCh.bind('',2)}><a style={{cursor:'pointer'}} data-toggle="tab"><i className="fa fa-pencil"></i><span className="text"> Draft</span></a></li>
									<li onClick={this.ClickCh.bind('',3)}><a style={{cursor:'pointer'}} data-toggle="tab"><i className="fa fa-trash-o"></i><span className="text"> Trash</span></a></li>
								</ul>
							</div>
							<div className="widget-content nopadding">
								<div className="tab-content">
									<div id="inbox-tab" className="tab-pane active checklist">
										<ul ref="chats" onClick={this.changeChat} className="messages-list">
											<li className="messages-item active">
													<span className="messages-item-star" title="Mark as starred"><i className="fa fa-star"></i></span>
													<img className="messages-item-avatar" src="img/demo/av1.jpg" />
													<span className="messages-item-from">Eric</span>
													<div className="messages-item-time"><span className="text">10:23 PM</span>
														<div className="messages-item-actions">
															<a style={{cursor:"pointer"}} title="Reply" data-toggle="dropdown"><i className="fa fa-mail-reply"></i></a>
															<div className="dropdown">
																<a style={{cursor:"pointer"}} title="Move to folder" data-toggle="dropdown"><i className="fa fa-folder-open"></i></a>
																<ul className="dropdown-menu pull-right">
																	<li><a style={{cursor:"pointer"}}>Work</a></li>
																	<li><a style={{cursor:"pointer"}}>Partners</a></li>
																	<li><a style={{cursor:"pointer"}}>Family</a></li>
																</ul>
															</div>
															<div className="dropdown">
																<a style={{cursor:"pointer"}} title="Attach to tag" data-toggle="dropdown"><i className="fa fa-tag"></i></a>
																<ul className="dropdown-menu pull-right">
																	<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'green'}}></i>Friends</a></li>
																	<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'red'}}></i>Important</a></li>
																	<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'blue'}}></i>Socials</a></li>
																</ul>
															</div>
														</div>
													</div>
													<span className="messages-item-subject">Astra anea en bumanso ...</span>
													<span className="messages-item-preview">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do antera ...</span>
												
											</li>
											<li className="messages-item starred">
												
													<span className="messages-item-star" title="Remove star"><i className="fa fa-star"></i></span>
													<img className="messages-item-avatar" src="img/demo/av2.jpg" />
													<span className="messages-item-from">Lebron James</span>
													<div className="messages-item-time"><span className="text">08:46 PM</span>
														<div className="messages-item-actions">
															<a style={{cursor:"pointer"}} title="Reply" data-toggle="dropdown"><i className="fa fa-mail-reply"></i></a>
															<div className="dropdown">
																<a style={{cursor:"pointer"}} title="Move to folder" data-toggle="dropdown"><i className="fa fa-folder-open"></i></a>
																<ul className="dropdown-menu pull-right">
																	<li><a style={{cursor:"pointer"}}>Work</a></li>
																	<li><a style={{cursor:"pointer"}}>Partners</a></li>
																	<li><a style={{cursor:"pointer"}}>Family</a></li>
																</ul>
															</div>
															<div className="dropdown">
																<a style={{cursor:"pointer"}} title="Attach to tag" data-toggle="dropdown"><i className="fa fa-tag"></i></a>
																<ul className="dropdown-menu pull-right">
																	<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'green'}}></i>Friends</a></li>
																	<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'red'}}></i>Important</a></li>
																	<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'blue'}}></i>Socials</a></li>
																</ul>
															</div>
														</div>
													</div>
													<span className="messages-item-subject">Astra anea en bumanso ...</span>
													<span className="messages-item-preview">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do antera ...</span>
												
											</li>
											<li className="messages-item">
												
													<span className="messages-item-star" title="Mark as starred"><i className="fa fa-star"></i></span>
													<span className="messages-item-attachment"><i className="fa fa-paperclip"></i></span>
													<img className="messages-item-avatar" src="img/demo/av3.jpg" />
													<span className="messages-item-from">Kobe Bryant</span>
													<div className="messages-item-time"><span className="text">04:03 PM</span>
														<div className="messages-item-actions">
															<a style={{cursor:"pointer"}} title="Reply" data-toggle="dropdown"><i className="fa fa-mail-reply"></i></a>
															<div className="dropdown">
																<a style={{cursor:"pointer"}} title="Move to folder" data-toggle="dropdown"><i className="fa fa-folder-open"></i></a>
																<ul className="dropdown-menu pull-right">
																	<li><a style={{cursor:"pointer"}}>Work</a></li>
																	<li><a style={{cursor:"pointer"}}>Partners</a></li>
																	<li><a style={{cursor:"pointer"}}>Family</a></li>
																</ul>
															</div>
															<div className="dropdown">
																<a style={{cursor:"pointer"}} title="Attach to tag" data-toggle="dropdown"><i className="fa fa-tag"></i></a>
																<ul className="dropdown-menu pull-right">
																	<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'green'}}></i>Friends</a></li>
																	<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'red'}}></i>Important</a></li>
																	<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'blue'}}></i>Socials</a></li>
																</ul>
															</div>
														</div>
													</div>
													<span className="messages-item-subject">Astra anea en bumanso ...</span>
													<span className="messages-item-preview">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do antera ...</span>
												
											</li>
											<li className="messages-item">
												
													<span className="messages-item-star" title="Mark as starred"><i className="fa fa-star"></i></span>
													<img className="messages-item-avatar" src="img/demo/av5.jpg" />
													<span className="messages-item-from">Dwyane Wade</span>
													<div className="messages-item-time"><span className="text">11:16 AM</span>
														<div className="messages-item-actions">
															<a style={{cursor:"pointer"}} title="Reply" data-toggle="dropdown"><i className="fa fa-mail-reply"></i></a>
															<div className="dropdown">
																<a style={{cursor:"pointer"}} title="Move to folder" data-toggle="dropdown"><i className="fa fa-folder-open"></i></a>
																<ul className="dropdown-menu pull-right">
																	<li><a style={{cursor:"pointer"}}>Work</a></li>
																	<li><a style={{cursor:"pointer"}}>Partners</a></li>
																	<li><a style={{cursor:"pointer"}}>Family</a></li>
																</ul>
															</div>
															<div className="dropdown">
																<a style={{cursor:"pointer"}} title="Attach to tag" data-toggle="dropdown"><i className="fa fa-tag"></i></a>
																<ul className="dropdown-menu pull-right">
																	<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'green'}}></i>Friends</a></li>
																	<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'red'}}></i>Important</a></li>
																	<li><a style={{cursor:"pointer"}}><i className="tag-icon" style={{backgroundColor: 'blue'}}></i>Socials</a></li>
																</ul>
															</div>
														</div>
													</div>
													<span className="messages-item-subject">Astra anea en bumanso ...</span>
													<span className="messages-item-preview">Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do antera ...</span>
											</li>
											{lis}
										</ul>
										<div className="messages-content">
											<div className="message-header">
												<div className="message-from">{arr1[0].from} &lt;{arr1[0].fromdoe}@domain.com&gt;</div>
												<div className="message-to">To: {arr1[0].to}</div>
												<div className="message-time">{arr1[0].time}</div>
												<div className="message-actions">
													<a style={{cursor:"pointer"}} title="Move to trash"><i className="fa fa-trash-o"></i></a>
													<a style={{cursor:"pointer"}} title="Reply"><i className="fa fa-reply"></i></a>
													<a style={{cursor:"pointer"}} title="Reply to all"><i className="fa fa-reply-all"></i></a>
													<a style={{cursor:"pointer"}} title="Forward"><i className="fa fa-long-arrow-right"></i></a>
												</div>
											</div>
											<div className="message-content">
												<p>
													{/* Hi George! */}{arr1[0].p1}
												</p>
												<p>
													{arr1[0].p2}
													{/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut blandit ligula. In accumsan mauris at augue feugiat consequat. Aenean consequat sem sed velit sagittis dignissim. Phasellus quis convallis est. Praesent porttitor mauris nec lectus mollis, eget sodales libero venenatis. Cras eget vestibulum turpis. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam turpis velit, tempor vitae libero ac, fermentum laoreet dolor. */}
												</p>
												{/* <p>
													Phasellus sodales metus at pulvinar facilisis. Aliquam et orci condimentum, ultrices erat in, ornare mi. Etiam vel nulla eu enim sagittis imperdiet. Donec justo arcu, iaculis eu ante ac, consequat vulputate nisl. Aenean sed consectetur tortor. Quisque tempus enim id velit ultricies, ac egestas leo vestibulum. Donec pulvinar viverra venenatis. Mauris eu dui enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus malesuada commodo odio, in hendrerit mi tincidunt nec.
												</p>
												<p>
													Cras sed leo in neque iaculis iaculis vel vel sem. Praesent sed urna viverra odio molestie consectetur. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis quis consectetur arcu, quis tempus ipsum. Fusce eleifend arcu nunc, non porta ipsum imperdiet faucibus. Vivamus dictum, massa tincidunt blandit faucibus, tortor libero rhoncus nunc, id faucibus est leo non odio. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque at elit sed quam pretium bibendum vel eget sem. Fusce sed ante nec eros placerat vulputate sed eget nulla. Sed in dictum justo, ut ullamcorper est. Proin semper tellus orci, eu accumsan neque ultrices at. Fusce a vulputate risus. Maecenas id hendrerit metus, ornare sodales dolor. Pellentesque tempus, justo quis faucibus commodo, magna mauris tempus velit, vitae egestas leo orci in sapien. Maecenas egestas erat augue, sit amet convallis lacus tristique eu. Donec gravida dui dictum libero eleifend dapibus. 
												</p>	 */}
												<p>
													Regards,<br />
													{/* John Doe */}
													{arr1[0].p3}
												</p>
											</div>
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
 
export default TeamMessage;