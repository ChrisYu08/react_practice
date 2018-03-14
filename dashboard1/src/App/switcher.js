import React, { Component } from 'react';
class Switcher extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
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
         )
    }
}
 
export default Switcher;