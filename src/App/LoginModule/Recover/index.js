import React, { Component } from 'react';
class Recover extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    back=()=>{
        let{backHome}=this.props;
        backHome();
    }
    createN=()=>{
        let{registerToggle}=this.props;
        registerToggle()
    }
    render() { 
        return ( 
            <div>
                <div ref="reco" id="recoverform">
                <p>Enter your e-mail address below and we will send you instructions how to recover a password.</p>
                <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-envelope"></i></span><input className="form-control" type="text" placeholder="E-mail address" />
                    </div>
                    <div className="form-actions clearfix">
                        <div onClick={this.back} className="pull-left">
                            <a style={{cursor:'pointer'}} className="grey flip-link to-login">Click to login</a>
                        </div>
                        <div onClick={this.createN} className="pull-right">
                            <a style={{cursor:'pointer'}} className="blue flip-link to-register">Create new account</a>
                        </div>
                        {/* <input type="submit" className="btn btn-block btn-inverse" value="Recover" /> */}
                        <input type="button" className="btn btn-block btn-inverse" value="Recover" />
                    </div>
                </div>
            </div>
         )
    }
}
 
export default Recover;