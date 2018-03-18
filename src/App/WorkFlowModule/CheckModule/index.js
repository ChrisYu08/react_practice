import React, { Component } from 'react';
import DataList from './dataList';
import "./../../../Css/bootstrap.min.css";
import "./../../../Css/font-awesome.css";
import "./../../../Css/colorpicker.css";
import "./../../../Css/datepicker.css";
import "./../../../Css/icheck/flat/blue.css";
import "./../../../Css/select2.css";
import "./../../../Css/jquery-ui.css";
import "./../../../Css/unicorn.css";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';


class Check extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
	}
	clickAll=()=>{
		let {checkState,changechecked}=this.props;
		//那些tr
		let data_list=this.refs.lis_parent.children;
		for(let i=0;i<data_list.length;i++){
			//判断前面的checkbox
			if(data_list[i].children[0].children[0].checked){
				let removeId=data_list[i].children[2].innerText;
				changechecked(removeId);				
			}
		}
		this.clearAllCheckFalse()
	}
	//删除完后将所有的checkbox清洗为false
	clearAllCheckFalse=()=>{
		let {checkState,changechecked}=this.props;
		//那些tr
		let data_list=this.refs.lis_parent.children;
		for(let i=0;i<data_list.length;i++){
			data_list[i].children[0].children[0].checked=false;
		}
	}
	clearAllCheckTrue=()=>{
		let {checkState,changechecked}=this.props;
		//那些tr
		let data_list=this.refs.lis_parent.children;
		for(let i=0;i<data_list.length;i++){
			data_list[i].children[0].children[0].checked=true;
		}
	}
	change=(ev)=>{
		if(ev.target.checked){
			this.clearAllCheckTrue()
		}else{
			this.clearAllCheckFalse()
		}
	}
	//切换页面
	changepage=(ev,Num,Num_nex)=>{
		
		let {checkState,changechecked}=this.props;
		let data_list=this.refs.lis_parent.children;
		let page_list=this.refs.ref_page.children;
		let pageNum=1;
		//对前进后退按钮的设定，是调用prec函数还是nex函数
		if(Num&&!Num_nex){
			pageNum=Num;
		}
		if(!Num&&Num_nex){
			pageNum=Num_nex;
		}
		if(!Num&&!Num_nex){
			pageNum=ev.target.innerText*1;
		}
		//设定previous按钮
		if(pageNum!=1){
			if(this.refs.prev.classList.contains('ui-state-disabled'))
			this.refs.prev.classList.remove('ui-state-disabled');
		}else{
			if(!this.refs.prev.classList.contains('ui-state-disabled')){
				this.refs.prev.classList.add('ui-state-disabled');
			}
		}

		//设定next按钮
		if(pageNum!=page_list.length){
			if(this.refs.nex.classList.contains('ui-state-disabled'))
			this.refs.nex.classList.remove('ui-state-disabled');
		}else{
			if(!this.refs.nex.classList.contains('ui-state-disabled')){
				this.refs.nex.classList.add('ui-state-disabled');
			}
		}
		//大清洗page按钮的class
		for(let i=0;i<page_list.length;i++){
			page_list[i].className='fg-button ui-button ui-state-default';
		}
		page_list[pageNum-1].className='fg-button ui-button ui-state-default ui-state-disabled';
		// ev.target.className='fg-button ui-button ui-state-default ui-state-disabled';
		
		
		//大清洗display
		for(let i=0;i<data_list.length;i++){
			data_list[i].style.display='none';
		}
		for(let i=0;i<data_list.length;i++){
			if(i>=(pageNum-1)*6&&i<pageNum*6){
				data_list[i].style.display='';
			}
		}
	}

	prevFn=()=>{
		let page_list=this.refs.ref_page.children;
		for(let i=0;i<page_list.length;i++){
			if(page_list[i].classList.contains('ui-state-disabled')){
				let Num=page_list[i].innerText;
				if(Num!=1){
					Num=Num-1;
				}else{
					Num=1;
				};
				this.changepage('',Num);
			}
		}
	}
	nexFn=()=>{
		let page_list=this.refs.ref_page.children;
		for(let i=0;i<page_list.length;i++){
			if(page_list[i].classList.contains('ui-state-disabled')){
				let Num=page_list[i].innerText;
				if(Num!=page_list.length){
					Num=Num*1+1;
				}else{
					Num=page_list.length;
				};
				this.changepage('','',Num);
			}
		}
	}

	queryName=(ev)=>{
		let {checkState,changechecked,changecheckedtrue}=this.props;
		checkState.forEach((e,i)=>{
			let d=e.FormName;
			if(d.includes(ev.target.value)){
				changecheckedtrue(e.ID)
			}else{
				changechecked(e.ID)
			}
		})
	}

    render() {
		//单个删除，从父级获取changechecked再传给孙子级，这里可以用redux
		let {checkState,changechecked}=this.props;
		checkState=checkState.filter((e)=>e.checked);
		let list = checkState.map((e,i)=>{
			return <DataList 
				{...{
					key:i,
					num:i,
					Dept:e.Dept,
					ID:e.ID,
					formName:e.FormName,
					time:e.time,
					changechecked:changechecked
				}}
			/>
		});
		//页号
		let pages=Math.ceil((list.length)/6);
		let page1=[<a key="0" onClick={this.changepage} className="fg-button ui-button ui-state-default ui-state-disabled">1
				</a>];
		for(let i=0;i<pages;i++){
			if(i>0){
				page1.push(<a key="i" onClick={this.changepage} className="fg-button ui-button ui-state-default">{i+1}</a>)
			}
		}
        return ( 
            <div id="content">
			<div id="content-header">
				<h1>查询/Inquiry</h1>
				<div className="btn-group">
					<a className="btn btn-large" title="Manage Files"><i className="fa fa-file"></i></a>
					<a className="btn btn-large" title="Manage Users"><i className="fa fa-user"></i></a>
					<a className="btn btn-large" title="Manage Comments"><i className="fa fa-comment"></i><span className="label label-danger">5</span></a>
					<a className="btn btn-large" title="Manage Orders"><i className="fa fa-shopping-cart"></i></a>
				</div>
			</div>
			<div id="breadcrumb">
				<a style={{cursor:"pointer"}} title="Go to Home" className="tip-bottom"><i className="fa fa-home"></i> Home</a>
				
				<a style={{cursor:"pointer"}} className="current">Inquiry</a>
			</div>
				<div className="row">
					<div className="col-xs-12">
						{/* <div className="widget-box">
							<div className="widget-title">
								<span className="icon">
									<i className="fa fa-th"></i>
								</span>
								<h5>Static table</h5>
							</div>
							<div className="widget-content nopadding">
								<table className="table table-bordered table-striped table-hover">
									<thead>
										<tr>
											<th>Column name</th>
											<th>Column name</th>
											<th>Column name</th>
											<th>Column name</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Row 1</td>
											<td>Row 2</td>
											<td>Row 3</td>
											<td>Row 4</td>
										</tr>
										<tr>
											<td>Row 1</td>
											<td>Row 2</td>
											<td>Row 3</td>
											<td>Row 4</td>
										</tr>
										<tr>
											<td>Row 1</td>
											<td>Row 2</td>
											<td>Row 3</td>
											<td>Row 4</td>
										</tr>
										<tr>
											<td>Row 1</td>
											<td>Row 2</td>
											<td>Row 3</td>
											<td>Row 4</td>
										</tr>
										<tr>
											<td>Row 1</td>
											<td>Row 2</td>
											<td>Row 3</td>
											<td>Row 4</td>
										</tr>
										<tr>
											<td>Row 1</td>
											<td>Row 2</td>
											<td>Row 3</td>
											<td>Row 4</td>
										</tr>
									</tbody>
								</table>							
							</div>
						</div>
						<div className="widget-box">
							<div className="widget-title">
								<span className="icon with-checkbox">
									<input type="checkbox" id="title-checkbox" name="title-checkbox" />
								</span>
								<h5>Static table with checkboxes</h5>
							</div>
							<div className="widget-content nopadding">
								<table className="table table-bordered table-striped table-hover with-check">
									<thead>
										<tr>
											<th><i className="fa fa-resize-vertical"></i></th>
											<th>Column name</th>
											<th>Column name</th>
											<th>Column name</th>
											<th>Column name</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><input type="checkbox" /></td>
											<td>Row 1</td>
											<td>Row 2</td>
											<td>Row 3</td>
											<td>Row 4</td>
										</tr>
										<tr>
											<td><input type="checkbox" /></td>
											<td>Row 1</td>
											<td>Row 2</td>
											<td>Row 3</td>
											<td>Row 4</td>
										</tr>
										<tr>
											<td><input type="checkbox" /></td>
											<td>Row 1</td>
											<td>Row 2</td>
											<td>Row 3</td>
											<td>Row 4</td>
										</tr>
										<tr>
											<td><input type="checkbox" /></td>
											<td>Row 1</td>
											<td>Row 2</td>
											<td>Row 3</td>
											<td>Row 4</td>
										</tr>
										<tr>
											<td><input type="checkbox" /></td>
											<td>Row 1</td>
											<td>Row 2</td>
											<td>Row 3</td>
											<td>Row 4</td>
										</tr>
										<tr>
											<td><input type="checkbox" /></td>
											<td>Row 1</td>
											<td>Row 2</td>
											<td>Row 3</td>
											<td>Row 4</td>
										</tr>
									</tbody>
								</table>							
							</div>
						</div> */}
						
						<div className="widget-box">
							<div className="widget-title">
								<span className="icon">
									<i className="fa fa-th"></i>
								</span>
								<h5>申请表/Application</h5>
								{/* <span className="label label-info">删除</span> */}
								<button onClick={this.clickAll} style={{width:'50px',height:'30px',border:'none',marginTop:'3px'}} className="label label-info">删除</button>
							</div>
							<div className="widget-content">
								<div style={{height:'286px'}}>
								<table className="table table-bordered table-striped table-hover with-check">
									<thead>
										<tr>
											<th><input onChange={this.change} type="checkbox" id="title-table-checkbox" name="title-table-checkbox" /></th>
											<th>所属部门<br/>Dept</th>
											<th>申请人账号<br/>ID</th>
											<th>表单名称<br/>Form Name</th>
											<th>建立日期<br/>Start Date</th>
											<th>表单状态<br/>Training Materials</th>
											<th>操作<br/>Operation</th>
										</tr>
									</thead>
									<tbody ref="lis_parent">
										{list}
										{/* <tr>
											<td><input type="checkbox" /></td>
											<td>MM</td>
											<td>TE25184</td>
											<td>Return Materials Authorization</td>
											<td>Tue Mar 06 2012 11:08:51</td>
											<td>签核完成</td>
											<td>
												<a style={{cursor:"pointer"}}>查看</a> | <a style={{cursor:"pointer"}}>删除</a>
											</td>
										</tr>
										<tr>
											<td><input type="checkbox" /></td>
											<td>IS</td>
											<td>TE25184</td>
											<td>IS 资源申请单</td>
											<td>Sun Jun 21 2014 14:25:20</td>
											<td>签核中</td>
											<td>
												<a style={{cursor:"pointer"}}>查看</a> | <a style={{cursor:"pointer"}}>删除</a>
											</td>
										</tr>
										<tr>
											<td><input type="checkbox" /></td>
											<td>MOLD</td>
											<td>TE25184</td>
											<td>Spare Parts Strap Request Form</td>
											<td>Tue Aug 16 2013 14:25:20</td>
											<td>签核中</td>
											<td>
												<a style={{cursor:"pointer"}}>查看</a> | <a style={{cursor:"pointer"}}>删除</a>
											</td>
										</tr>
										<tr>
											<td><input type="checkbox" /></td>
											<td>Engineering</td>
											<td>TE25184</td>
											<td>Drawings Control Request Form</td>
											<td>Tue Aug 16 2013 14:25:20</td>
											<td>签核退回</td>
											<td>
												<a style={{cursor:"pointer"}}>查看</a> | <a style={{cursor:"pointer"}}>删除</a>
											</td>
										</tr>
										<tr>
											<td><input type="checkbox" /></td>
											<td>Facility</td>
											<td>TE25184</td>
											<td>厂务需求申请单</td>
											<td>Sun Jun 21 2014 14:25:20</td>
											<td>签核完成</td>
											<td>
												<a style={{cursor:"pointer"}}>查看</a> | <a style={{cursor:"pointer"}}>删除</a>
											</td>
										</tr>
										<tr>
											<td><input type="checkbox" /></td>
											<td>EHS</td>
											<td>TE25184</td>
											<td>PPE发放申请单</td>
											<td>Sun Jun 21 2014 14:25:20</td>
											<td>签核完成</td>
											<td>
												<a style={{cursor:"pointer"}}>查看</a> | <a style={{cursor:"pointer"}}>删除</a>
											</td>
										</tr> */}
									</tbody>
								</table>
								</div>
								<div className="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix">
										<div className="dataTables_filter" id="DataTables_Table_0_filter">
											<label>Search by Form Name: 
												<input onChange={this.queryName} type="text" aria-controls="DataTables_Table_0" />
											</label>
										</div>
										<div className="dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_full_numbers" id="DataTables_Table_0_paginate">
											{/* <a className="first ui-corner-tl ui-corner-bl fg-button ui-button ui-state-default ui-state-disabled" id="DataTables_Table_0_first">First</a> */}
											<a ref="prev" onClick={this.prevFn} className="previous fg-button ui-button ui-state-default ui-state-disabled" id="DataTables_Table_0_previous">Previous</a>
											<span ref="ref_page">
												{page1}
												{/* <a tabIndex="0" className="fg-button ui-button ui-state-default ui-state-disabled">1</a>
												<a tabIndex="0" className="fg-button ui-button ui-state-default">2</a>
												<a tabIndex="0" className="fg-button ui-button ui-state-default">3</a>
												<a tabIndex="0" className="fg-button ui-button ui-state-default">4</a>
												<a tabIndex="0" className="fg-button ui-button ui-state-default">5</a> */}
											</span>
											<a ref="nex" onClick={this.nexFn} className="next fg-button ui-button ui-state-default" id="DataTables_Table_0_next">Next</a>
											{/* <a className="last ui-corner-tr ui-corner-br fg-button ui-button ui-state-default" id="DataTables_Table_0_last">Last</a> */}
										</div>
									</div>							
							</div>
						</div>
						
						{/* <div className="widget-box">
							<div className="widget-title">
								<span className="icon">
									<i className="fa fa-th"></i>
								</span>
								<h5>Dynamic table</h5>
							</div>
							<div className="widget-content nopadding">
								<table className="table table-bordered table-striped table-hover data-table">
									<thead>
									<tr>
									<th>Rendering engine</th>
									<th>Browser</th>
									<th>Platform(s)</th>
									<th>Engine version</th>
									</tr>
									</thead>
									<tbody>
									<tr className="gradeX">
									<td>Trident</td>
									<td>Internet
									Explorer 4.0</td>
									<td>Win 95+</td>
									<td className="center">4</td>
									</tr>
									<tr className="gradeC">
									<td>Trident</td>
									<td>Internet
									Explorer 5.0</td>
									<td>Win 95+</td>
									<td className="center">5</td>
									</tr>
									<tr className="gradeA">
									<td>Trident</td>
									<td>Internet
									Explorer 5.5</td>
									<td>Win 95+</td>
									<td className="center">5.5</td>
									</tr>
									<tr className="gradeA">
									<td>Trident</td>
									<td>Internet
									Explorer 6</td>
									<td>Win 98+</td>
									<td className="center">6</td>
									</tr>
									<tr className="gradeA">
									<td>Trident</td>
									<td>Internet Explorer 7</td>
									<td>Win XP SP2+</td>
									<td className="center">7</td>
									</tr>
									<tr className="gradeA">
									<td>Trident</td>
									<td>AOL browser (AOL desktop)</td>
									<td>Win XP</td>
									<td className="center">6</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Firefox 1.0</td>
									<td>Win 98+ / OSX.2+</td>
									<td className="center">1.7</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Firefox 1.5</td>
									<td>Win 98+ / OSX.2+</td>
									<td className="center">1.8</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Firefox 2.0</td>
									<td>Win 98+ / OSX.2+</td>
									<td className="center">1.8</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Firefox 3.0</td>
									<td>Win 2k+ / OSX.3+</td>
									<td className="center">1.9</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Camino 1.0</td>
									<td>OSX.2+</td>
									<td className="center">1.8</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Camino 1.5</td>
									<td>OSX.3+</td>
									<td className="center">1.8</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Netscape 7.2</td>
									<td>Win 95+ / Mac OS 8.6-9.2</td>
									<td className="center">1.7</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Netscape Browser 8</td>
									<td>Win 98SE+</td>
									<td className="center">1.7</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Netscape Navigator 9</td>
									<td>Win 98+ / OSX.2+</td>
									<td className="center">1.8</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Mozilla 1.0</td>
									<td>Win 95+ / OSX.1+</td>
									<td className="center">1</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Mozilla 1.1</td>
									<td>Win 95+ / OSX.1+</td>
									<td className="center">1.1</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Mozilla 1.2</td>
									<td>Win 95+ / OSX.1+</td>
									<td className="center">1.2</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Mozilla 1.3</td>
									<td>Win 95+ / OSX.1+</td>
									<td className="center">1.3</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Mozilla 1.4</td>
									<td>Win 95+ / OSX.1+</td>
									<td className="center">1.4</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Mozilla 1.5</td>
									<td>Win 95+ / OSX.1+</td>
									<td className="center">1.5</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Mozilla 1.6</td>
									<td>Win 95+ / OSX.1+</td>
									<td className="center">1.6</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Mozilla 1.7</td>
									<td>Win 98+ / OSX.1+</td>
									<td className="center">1.7</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Mozilla 1.8</td>
									<td>Win 98+ / OSX.1+</td>
									<td className="center">1.8</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Seamonkey 1.1</td>
									<td>Win 98+ / OSX.2+</td>
									<td className="center">1.8</td>
									</tr>
									<tr className="gradeA">
									<td>Gecko</td>
									<td>Epiphany 2.20</td>
									<td>Gnome</td>
									<td className="center">1.8</td>
									</tr>
									<tr className="gradeA">
									<td>Webkit</td>
									<td>Safari 1.2</td>
									<td>OSX.3</td>
									<td className="center">125.5</td>
									</tr>
									<tr className="gradeA">
									<td>Webkit</td>
									<td>Safari 1.3</td>
									<td>OSX.3</td>
									<td className="center">312.8</td>
									</tr>
									<tr className="gradeA">
									<td>Webkit</td>
									<td>Safari 2.0</td>
									<td>OSX.4+</td>
									<td className="center">419.3</td>
									</tr>
									<tr className="gradeA">
									<td>Webkit</td>
									<td>Safari 3.0</td>
									<td>OSX.4+</td>
									<td className="center">522.1</td>
									</tr>
									<tr className="gradeA">
									<td>Webkit</td>
									<td>OmniWeb 5.5</td>
									<td>OSX.4+</td>
									<td className="center">420</td>
									</tr>
									<tr className="gradeA">
									<td>Webkit</td>
									<td>iPod Touch / iPhone</td>
									<td>iPod</td>
									<td className="center">420.1</td>
									</tr>
									<tr className="gradeA">
									<td>Webkit</td>
									<td>S60</td>
									<td>S60</td>
									<td className="center">413</td>
									</tr>
									<tr className="gradeA">
									<td>Presto</td>
									<td>Opera 7.0</td>
									<td>Win 95+ / OSX.1+</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeA">
									<td>Presto</td>
									<td>Opera 7.5</td>
									<td>Win 95+ / OSX.2+</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeA">
									<td>Presto</td>
									<td>Opera 8.0</td>
									<td>Win 95+ / OSX.2+</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeA">
									<td>Presto</td>
									<td>Opera 8.5</td>
									<td>Win 95+ / OSX.2+</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeA">
									<td>Presto</td>
									<td>Opera 9.0</td>
									<td>Win 95+ / OSX.3+</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeA">
									<td>Presto</td>
									<td>Opera 9.2</td>
									<td>Win 88+ / OSX.3+</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeA">
									<td>Presto</td>
									<td>Opera 9.5</td>
									<td>Win 88+ / OSX.3+</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeA">
									<td>Presto</td>
									<td>Opera for Wii</td>
									<td>Wii</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeA">
									<td>Presto</td>
									<td>Nokia N800</td>
									<td>N800</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeA">
									<td>Presto</td>
									<td>Nintendo DS browser</td>
									<td>Nintendo DS</td>
									<td className="center">8.5</td>
									</tr>
									<tr className="gradeC">
									<td>KHTML</td>
									<td>Konqureror 3.1</td>
									<td>KDE 3.1</td>
									<td className="center">3.1</td>
									</tr>
									<tr className="gradeA">
									<td>KHTML</td>
									<td>Konqureror 3.3</td>
									<td>KDE 3.3</td>
									<td className="center">3.3</td>
									</tr>
									<tr className="gradeA">
									<td>KHTML</td>
									<td>Konqureror 3.5</td>
									<td>KDE 3.5</td>
									<td className="center">3.5</td>
									</tr>
									<tr className="gradeX">
									<td>Tasman</td>
									<td>Internet Explorer 4.5</td>
									<td>Mac OS 8-9</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeC">
									<td>Tasman</td>
									<td>Internet Explorer 5.1</td>
									<td>Mac OS 7.6-9</td>
									<td className="center">1</td>
									</tr>
									<tr className="gradeC">
									<td>Tasman</td>
									<td>Internet Explorer 5.2</td>
									<td>Mac OS 8-X</td>
									<td className="center">1</td>
									</tr>
									<tr className="gradeA">
									<td>Misc</td>
									<td>NetFront 3.1</td>
									<td>Embedded devices</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeA">
									<td>Misc</td>
									<td>NetFront 3.4</td>
									<td>Embedded devices</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeX">
									<td>Misc</td>
									<td>Dillo 0.8</td>
									<td>Embedded devices</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeX">
									<td>Misc</td>
									<td>Links</td>
									<td>Text only</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeX">
									<td>Misc</td>
									<td>Lynx</td>
									<td>Text only</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeC">
									<td>Misc</td>
									<td>IE Mobile</td>
									<td>Windows Mobile 6</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeC">
									<td>Misc</td>
									<td>PSP browser</td>
									<td>PSP</td>
									<td className="center">-</td>
									</tr>
									<tr className="gradeU">
									<td>Other browsers</td>
									<td>All others</td>
									<td>-</td>
									<td className="center">-</td>
									</tr>
									</tbody>
									</table>
									
									<div className="fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix">
										<div className="dataTables_filter" id="DataTables_Table_0_filter">
											<label>Search: 
												<input type="text" aria-controls="DataTables_Table_0" />
											</label>
										</div>
										<div className="dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_full_numbers" id="DataTables_Table_0_paginate">
											<a tabIndex="0" className="first ui-corner-tl ui-corner-bl fg-button ui-button ui-state-default ui-state-disabled" id="DataTables_Table_0_first">First</a>
											<a tabIndex="0" className="previous fg-button ui-button ui-state-default ui-state-disabled" id="DataTables_Table_0_previous">Previous</a><span>
											<a tabIndex="0" className="fg-button ui-button ui-state-default ui-state-disabled">1</a>
											<a tabIndex="0" className="fg-button ui-button ui-state-default">2</a>
											<a tabIndex="0" className="fg-button ui-button ui-state-default">3</a>
											<a tabIndex="0" className="fg-button ui-button ui-state-default">4</a>
											<a tabIndex="0" className="fg-button ui-button ui-state-default">5</a></span>
											<a tabIndex="0" className="next fg-button ui-button ui-state-default" id="DataTables_Table_0_next">Next</a>
											<a tabIndex="0" className="last ui-corner-tr ui-corner-br fg-button ui-button ui-state-default" id="DataTables_Table_0_last">Last</a>
										</div>
									</div>  
							</div>
						</div> */}
					</div>
				</div>
		</div>
            
         )
    }
}
 
export default Check;