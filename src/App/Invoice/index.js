import React, { Component } from 'react';
class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id="content">
			<div id="content-header">
				<h1>Invoice</h1>
				<div className="btn-group">
					<a className="btn" title="Manage Files"><i className="fa fa-file"></i></a>
					<a className="btn" title="Manage Users"><i className="fa fa-user"></i></a>
					<a className="btn" title="Manage Comments"><i className="fa fa-comment"></i><span className="label label-danger">5</span></a>
					<a className="btn" title="Manage Orders"><i className="fa fa-shopping-cart"></i></a>
				</div>
			</div>
			<div id="breadcrumb">
				<a href="#" title="Go to Home" className="tip-bottom"><i className="fa fa-home"></i> Home</a>
				{/* <a href="#">Sample Pages</a> */}
				<a href="#" className="current">Invoice</a>
			</div>				
				<div className="row">
					<div className="col-xs-12">
						<div className="widget-box">
							<div className="widget-title">
								<span className="icon">
									<i className="fa fa-th-list"></i>
								</span>
								<h5>Invoice</h5>
								<div className="buttons">
									<a title="Icon Title" className="btn" href="#"><i className="fa fa-shopping-cart"></i> <span className="text">Pay Now</span></a>
									<a title="Icon Title" className="btn" href="#"><i className="fa fa-print"></i> <span className="text">Print</span></a>
								</div>
							</div>
							<div className="widget-content">
								<div className="invoice-content">
									<div className="invoice-head">
										<div className="invoice-meta">
											Invoice <span className="invoice-number">#96558 </span><span className="invoice-date">Date: 2012-07-15</span>
										</div>
										<h5>Invoice Title/Subject</h5>
										<div className="invoice-from">
											<ul>
												<li>
												<span><strong>From</strong></span>
												<span>ANA Solutions</span>
												<span>244, Soranda Street,</span>
												<span>New Morleno.</span>
												</li>
											</ul>
										</div>
										<div className="invoice-to">
											<ul>
												<li>
												<span><strong>To</strong></span>
												<span>Mihaki Technologies</span>
												<span>233/44, Autumn Lane</span>
												<span>Treyan.</span>
												</li>
											</ul>
										</div>
									</div>
									<div>
										<table className="table table-bordered table-striped table-hover">
										<thead>
											<tr>
												<th>
													 Transaction Id
												</th>
												<th>
													 Title
												</th>
												<th>
													 Amount
												</th>
											</tr>
										</thead>
										<tfoot>
											<tr>
												<th className="total-label" colSpan="2">
													 Total:
												</th>
												<th className="total-amount">
													 $920.00
												</th>
											</tr>
										</tfoot>
										<tbody>
										<tr>
											<td>
												 #43
											</td>
											<td>
												 Vivamus sed auctor nibh congue, ligula
											</td>
											<td>
												 $20.00
											</td>
										</tr>
										<tr>
											<td>
												 #44
											</td>
											<td>
												 Proin porttitor bibendum placerat.
											</td>
											<td>
												 $500.00
											</td>
										</tr>
										<tr>
											<td>
												 #45
											</td>
											<td>
												 Lorem ipsum dolor sit amet, consectetur.
											</td>
											<td>
												 $30.00
											</td>
										</tr>
										<tr>
											<td>
												 #46
											</td>
											<td>
												 Esta rata in doleur.
											</td>
											<td>
												 $30.00
											</td>
										</tr>
										<tr>
											<td>
												 #47
											</td>
											<td>
												 Larta mida eno mosque teria.
											</td>
											<td>
												 $340.00
											</td>
										</tr>
										</tbody>
										</table>
									</div>
									<p className="amount-word">
										Amount in Word: <span>Nine Hundred Twenty Dollars</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>
         )
    }
}
 
export default Invoice;