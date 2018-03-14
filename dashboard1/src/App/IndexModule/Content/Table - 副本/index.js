import React,{Component} from 'react';
import "./../../../../Css/jquery-ui.css";
import "./css/icheck/flat/blue.css";
import "./../../../../Css/select2.css";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div id="content">
			<div id="content-header">
				<h1>Tables</h1>
				<div className="btn-group">
					<a className="btn btn-large" title="Manage Files"><i className="fa fa-file"></i></a>
					<a className="btn btn-large" title="Manage Users"><i className="fa fa-user"></i></a>
					<a className="btn btn-large" title="Manage Comments"><i className="fa fa-comment"></i><span className="label label-danger">5</span></a>
					<a className="btn btn-large" title="Manage Orders"><i className="fa fa-shopping-cart"></i></a>
				</div>
			</div>
			<div id="breadcrumb">
				<a href="#" title="Go to Home" className="tip-bottom"><i className="fa fa-home"></i> Home</a>
				<a href="#" className="current">Tables</a>
			</div>
				<div className="row">
					<div className="col-xs-12">
						<div className="widget-box">
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
						</div>
						
						<div className="widget-box">
							<div className="widget-title">
								<span className="icon">
									<i className="fa fa-th"></i>
								</span>
								<h5>Static table with checkboxes in box with padding</h5>
								<span className="label label-info">Featured</span>
							</div>
							<div className="widget-content">
								<table className="table table-bordered table-striped table-hover with-check">
									<thead>
										<tr>
											<th><input type="checkbox" id="title-table-checkbox" name="title-table-checkbox" /></th>
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
						</div>
						
						<div className="widget-box">
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
							</div>
						</div>
					</div>
				</div>
		</div>
        )
    }
}
 
export default Table;