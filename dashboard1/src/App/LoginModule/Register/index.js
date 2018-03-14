import React, { Component } from 'react';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val_name:'',
            val_pass:'',
            val_pass1:''
        }
    }
    back=()=>{
        let {backHome}=this.props;
        backHome();
    }
    recover=()=>{
        let {recoverToggle}=this.props;
        recoverToggle()
    }
    user=(ev)=>{
        let {val_name,val_pass}=this.state;
        this.setState({
            val_name:ev.target.value
        })
    }
    passW=(ev)=>{
        let {val_name,val_pass,val_pass1}=this.state;
        if(ev.target==this.refs.pw){
            this.setState({
                val_pass:ev.target.value
            })
        }else{
            if(ev.target.value!=val_pass){
                this.refs.pw1.parentNode.classList.add('has-error')
            }else if(ev.target.value==val_pass&&this.refs.pw1.parentNode.classList.contains('has-error')){
                this.refs.pw1.parentNode.classList.remove('has-error')
            }
            this.setState({
                val_pass1:ev.target.value
            }) 
        }
        
    }
    //调用父级添加user的函数addInfor
    click=(ev)=>{
        let {addInfor}=this.props;
        let {val_name,val_pass}=this.state;
        addInfor(val_name,val_pass)
    }
    render() { 
        let {val_name,val_pass,val_pass1}=this.state; 
        return ( 
            <div>
                <div ref="regi" id="registerform">
                <p>Enter information required to register:</p>
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-user"></i></span><input onChange={this.user} className="form-control" type="text" value={val_name} placeholder="Enter Username" />
                </div>
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-lock"></i></span><input ref="pw" onChange={this.passW} className="form-control" type="password" value={val_pass} placeholder="Choose Password" />
                </div>
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-lock"></i></span><input ref="pw1" onChange={this.passW} className="form-control" type="password" value={val_pass1} placeholder="Confirm password" />
                </div>
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-envelope"></i></span><input className="form-control" type="text" placeholder="Enter E-mail address" />
                </div>
                <div className="form-actions clearfix">
                    <div onClick={this.back} className="pull-left">
                        <a href="#loginform" className="grey flip-link to-login">Click to login</a>
                    </div>
                    <div onClick={this.recover} className="pull-right">
                        <a href="#recoverform" className="grey flip-link to-recover">Lost password?</a>
                    </div>
                    <input onClick={this.click} type="button" className="btn btn-block btn-success" value="Register" />
                </div>
                </div>
            </div>
         )
    }
}
 
export default Register;