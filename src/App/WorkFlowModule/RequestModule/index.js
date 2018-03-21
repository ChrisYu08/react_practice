import React, { Component } from 'react';
import "./../../../Css/jquery-ui.css";
import "./../../../Css/icheck/flat/blue.css";
import "./../../../Css/select2.css";

import {connect} from 'react-redux';
import {changechecked,changecheckedtrue,addData} from './../../../Reducer_redux/index';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
// import Request from '../../IndexModule/Content/Table/Request/index';
class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
	}
	save=()=>{
		let {addData,dispatch}=this.props;
		if(!this.refs.id.value||!this.refs.name.value||!this.refs.name1.value||!this.refs.job.value){
			if(!this.refs.id.value){
				this.refs.id.parentNode.classList.add('has-error')
			}
			if(!this.refs.name.value){
				this.refs.name.parentNode.classList.add('has-error')
			}
			if(!this.refs.name1.value){
				this.refs.name1.parentNode.classList.add('has-error')
			}
			if(!this.refs.job.value){
				this.refs.job.parentNode.classList.add('has-error')
			}
		}else{
			if(this.refs.id.value){
				this.refs.id.parentNode.classList.remove('has-error')
			}
			if(this.refs.name.value){
				this.refs.name.parentNode.classList.remove('has-error')
			}
			if(this.refs.name1.value){
				this.refs.name1.parentNode.classList.remove('has-error')
			}
			if(this.refs.job.value){
				this.refs.job.parentNode.classList.remove('has-error')
			}
			let data_apply={};
			data_apply.ID=this.refs.id.value;
			data_apply.Dept=this.refs.department.value;
			data_apply.FormName=this.refs.name.value;
			let time1=new Date();
			data_apply.time=(time1+'').slice(0,25);
			data_apply.checked=true;
			// setTimeout(() => {
				// alert('申请成功')
			// }, 1000);

			this.refs.outBox.style.display='block';
			setTimeout(() => {
				this.refs.outBox.classList.add('in');
				this.refs.shadow.style.display='block'; 
			}, 100);

			// addData(data_apply)
			dispatch(addData(data_apply))
		}
		
	}
	cancel=(ev)=>{
		if(this.refs.id.value){
			this.refs.id.parentNode.classList.remove('has-error')
		}
		if(this.refs.name.value){
			this.refs.name.parentNode.classList.remove('has-error')
		}
		if(this.refs.name1.value){
			this.refs.name1.parentNode.classList.remove('has-error')
		}
		if(this.refs.job.value){
			this.refs.job.parentNode.classList.remove('has-error')
		}
		this.refs.id.value='';
		this.refs.name.value='';
		this.refs.name1.value='';
		this.refs.job.value='';
		this.refs.txt.value='';
	}

    cancel_out=()=>{
        this.refs.outBox.style.display='none';
        this.refs.outBox.classList.remove('in');
        this.refs.shadow.style.display='none'; 
    }
    render() { 
        return ( 
            <div id="content">

			{/* 弹出框 */}
			<div ref="shadow" style={{width:'100%',height:'100%',position:'absolute', top:'0',left:'0',background:'black',opacity:'.8',display:'none',zIndex:'1030'}}></div>
				<div ref="outBox" className="modal fade mail-new-message" id="new-mail" role="modal">
                    <div style={{opacity:'1'}} className="modal-dialog">
					    <div className="modal-content">
					    	<div className="modal-header">
					        	<button onClick={this.cancel_out} type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					        	<h4 className="modal-title">New Application</h4>
					    	</div>
					    	<div className="modal-body nopadding">
									<div className="new-message-to" style={{fontSize:'20px',color:'#555555',textAlign:'center',padding:'20px 0'}}>
										 WorkFlow申请单
									</div>
									<div className="new-message-subject" style={{fontSize:'25px',color:'black',textAlign:'center',padding:'20px 0'}}>
										申请状态： 成功
									</div>
					    	</div>
					    	<div className="modal-footer">
					        	<button onClick={this.cancel_out} type="button" className="btn btn-primary" data-dismiss="modal">Confirm</button>
					      	</div>
					    </div>
					</div>
				</div>



			<div id="content-header">
				<h1>申请/request Form</h1>
				<div className="btn-group">
					<a className="btn btn-large" title="Manage Files"><i className="fa fa-file"></i></a>
					<a className="btn btn-large" title="Manage Users"><i className="fa fa-user"></i></a>
					<a className="btn btn-large" title="Manage Comments"><i className="fa fa-comment"></i><span className="label label-danger">5</span></a>
					<a className="btn btn-large" title="Manage Orders"><i className="fa fa-shopping-cart"></i></a>
				</div>
			</div>
			<div id="breadcrumb">
				<a href="index.html" title="Go to Home" className="tip-bottom"><i className="fa fa-home"></i> Home</a>
				<a style={{cursor:"pointer"}} >WorkFlow</a>
				<a style={{cursor:"pointer"}} className="current">Request</a>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12">
						<div className="widget-box">
							<div className="widget-title">
								<span className="icon">
									<i className="fa fa-align-justify"></i>									
								</span>
								<h5>Information inputs</h5>
							</div>
							<div className="widget-content nopadding">
								<div className="form-horizontal">
									<div className="form-group">
										<div className="col-sm-3 col-md-3 col-lg-2 control-label">工号/Employee ID:</div>
										<div className="col-sm-9 col-md-9 col-lg-10">
											<input ref="id" type="text" className="form-control input-sm" />
										</div>
									</div>
									<div className="form-group">
										<div className="col-sm-3 col-md-3 col-lg-2 control-label">名字/Name:</div>
										<div className="col-sm-9 col-md-9 col-lg-10">
											<input ref="name1" type="text" className="form-control input-sm" />
										</div>
									</div>
									<div className="form-group">
										<div className="col-sm-3 col-md-3 col-lg-2 control-label">地区/region:</div>
										<div className="col-sm-9 col-md-9 col-lg-10">
											<select>
												<option>北京</option>
												<option>上海</option>
												<option>苏州</option>
												<option>广州</option>
												<option>深圳</option>
												<option>杭州</option>
												<option>青岛</option>
												<option>成都</option>
											</select>
										</div>
									</div>
									<div className="form-group">
										<div className="col-sm-3 col-md-3 col-lg-2 control-label">部门/Dep:</div>
										<div className="col-sm-9 col-md-9 col-lg-10">
											<select ref="department">
												<option>Engineering</option>
												<option>Finance</option>
												<option>MM</option>
												<option>Facility</option>
												<option>Mold</option>
												<option>IS</option>
												<option>EHS</option>
												<option>Quality</option>
											</select>
										</div>
									</div>
									<div className="form-group">
										<div className="col-sm-3 col-md-3 col-lg-2 control-label">职位/Job:</div>
										<div className="col-sm-9 col-md-9 col-lg-10">
											<input ref="job" type="text" className="form-control input-sm" placeholder="Manager/经理..." />
										</div>
									</div>
									<div className="form-group">
										<div className="col-sm-3 col-md-3 col-lg-2 control-label">表单名称/Form Name:</div>
										<div className="col-sm-9 col-md-9 col-lg-10">
											<input  ref="name" type="text" className="form-control input-sm" placeholder="IO号申请单..."  />
										</div>
									</div>
									


									<div className="form-group">
										<div className="col-sm-3 col-md-3 col-lg-2 control-label">备注/Mark:</div>
										<div className="col-sm-9 col-md-9 col-lg-10">
											<textarea ref="txt" rows="5" className="form-control"></textarea>
										</div>
									</div>
									<div className="form-actions">
										<button onClick={this.save} className="btn btn-primary btn-sm">Save</button> or <a onClick={this.cancel} className="text-danger" style={{cursor:"pointer"}}>Cancel</a>
									</div>
								</div>
							</div>
						</div>						
					</div>
				</div>

				 {/* <div className="row"> 
					<div className="col-xs-12">
						<div className="widget-box">
							<div className="widget-title">
								<span className="icon">
									<i className="fa fa-align-justify"></i>									
								</span>
								<h5>Rest of elements...</h5>
							</div>
							<div className="widget-content nopadding">
								<div className="form-horizontal">
									<div className="form-group">
										<div className="col-sm-3 col-md-3 col-lg-2 control-label">Select input</div>
										<div className="col-sm-9 col-md-9 col-lg-10">
											<select>
												<option>First option</option>
												<option>Second option</option>
												<option>Third option</option>
												<option>Fourth option</option>
												<option>Fifth option</option>
												<option>Sixth option</option>
												<option>Seventh option</option>
												<option>Eighth option</option>
											</select>
										</div>
									</div>
									<div className="form-group">
										<div className="col-sm-3 col-md-3 col-lg-2 control-label">Multiple Select input</div>
										<div className="col-sm-9 col-md-9 col-lg-10">
											<select multiple>
												<option>First option</option>
												<option>Second option</option>
												<option>Third option</option>
												<option>Fourth option</option>
												<option>Fifth option</option>
												<option>Sixth option</option>
												<option>Seventh option</option>
												<option>Eighth option</option>
											</select>
										</div>
									</div>
                                    <div className="form-group">
                                        <div className="col-sm-3 col-md-3 col-lg-2 control-label">Color picker</div>
                                        <div className="col-sm-9 col-md-9 col-lg-10">
                                        	<div className="row">
                                        		<div className="col-md-6">
                                            		<input type="text" data-color="#000000" value="" className="colorpicker form-control input-sm" />
                                            	</div>
                                            	<div className="col-md-6">
                                            		<div className="input-group input-group-sm color colorpicker" data-color="rgba(244,202,56,0.5)" data-color-format="rgba">
                                            			<span className="input-group-addon"><i></i></span>
                                            			<input type="text"  value=""  className="form-control" />
                                            		</div>
                                            	</div>
                                        	</div>
                                        </div>
                                    </div>                                        
                                    <div className="form-group">
                                        <div className="col-sm-3 col-md-3 col-lg-2 control-label">Date picker</div>
                                        <div className=" col-sm-9 col-md-9 col-lg-10">
                                        	<div className="row">
                                        		<div className="col-md-6">
                                            		<input type="text" data-date="12-02-2012" data-date-format="dd-mm-yyyy" defaultValue="12-02-2012" className="datepicker form-control input-sm" />
                                            	</div>
                                            	<div className="col-md-6">
                                            		<div className="input-group input-group-sm date datepicker" data-date="15/09/2013" data-date-format="dd/mm/yyyy">
                                            			<span className="input-group-addon"><i className="fa fa-calendar"></i></span>
                                            			<input type="text"  defaultValue="15/09/2013"  className="form-control" />                                            		</div>
                                            	</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
										<div className="col-sm-3 col-md-3 col-lg-2 control-label">Spinner</div>
										<div className="col-sm-9 col-md-9 col-lg-10">
											<input type="text" className="form-control input-sm spinner" value="" />
										</div>
                                    </div>
									<div className="form-group">
										<div className="col-sm-3 col-md-3 col-lg-2 control-label">Radio inputs</div>
										<div className="col-sm-9 col-md-9 col-lg-10">
											<div><input type="radio" name="radios" /> Checked</div>
											<div><input type="radio" name="radios" /> Unchecked</div>
											<div className="disabled"><input type="radio" name="radios2" /> Checked disabled</div>
											<div className="disabled"><input type="radio" name="radios2" /> Unchecked disabled</div>
										</div>
									</div>
									<div className="form-group">
										<div className="col-sm-3 col-md-3 col-lg-2 control-label">Checkboxes</div>
										<div className="col-sm-9 col-md-9 col-lg-10">
											<div><input type="checkbox" name="checkboxes"  /> Checked</div>
											<div><input type="checkbox" name="checkboxes" /> Unchcked</div>
											<div className="disabled"><input type="checkbox" name="checkboxes"  /> Checked disabled</div>
											<div className="disabled"><input type="checkbox" name="checkboxes"  /> Unchecked disabled</div>
										</div>
									</div>
									<div className="form-group">
										<div className="col-sm-3 col-md-3 col-lg-2 control-label">File upload input</div>
										<div className="col-sm-9 col-md-9 col-lg-10">
											<input type="file" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
         )
    }
}

export default connect(state=>state,(dispatch)=>{
    return {changecheckedtrue,changechecked,addData,dispatch:dispatch}
})(Request)
// export default Request;