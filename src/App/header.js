import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div id="header">
				<h1><a>This is My Region</a></h1>	
				<a id="menu-trigger" href="#"><i className="fa fa-bars"></i></a>	
			</div>
        )
    }
}
 
export default Header;