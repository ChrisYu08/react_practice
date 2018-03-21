import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val_u:'',
            val_p:'',
            onoff11:false
            
        }
    }
    change=(ev)=>{
        let {val_u,val_p}=this.state;
        if(ev.target.type=='text'){
            this.setState({
                val_u:ev.target.value
            })
        }else{
            this.setState({
                val_p:ev.target.value
            })
        }
    }
    blur=(ev)=>{
        let {val_u,val_p}=this.state;
        if(val_u.trim()&&ev.target.parentNode.classList.contains('has-error')){
            ev.target.parentNode.classList.remove('has-error')
        }
        if(val_p.trim()&&ev.target.parentNode.classList.contains('has-error')){
            ev.target.parentNode.classList.remove('has-error')
        }
    }
    click=()=>{
        let {val_u,val_p}=this.state;
        // let {information}=this.props;
        if(!val_u.trim()){
            this.refs.nn.className+=' has-error'
        }else if(!val_p.trim()){
            this.refs.nn1.className+=' has-error'
        }else if(!val_u.trim()&&!val_p.trim()){
            this.refs.nn.className+=' has-error';
            this.refs.nn1.className+=' has-error';
        }else{
            let information=JSON.parse(localStorage.getItem('users'));
            for(var attr in information){
                // console.log(attr,information[attr])
                if(val_u==attr&&val_p==information[attr]){
                    this.setState({
                        onoff11:true
                    })
                    return 
                }else{
                    this.setState({
                        onoff11:false
                    })
                }
            }
        }
    }
    judeglink=()=>{
        let {val_u,val_p}=this.state;
        let {information}=JSON.parse(localStorage.getItem('users'));
            for(var attr in information){
                if(val_u==attr&&val_p==information[attr]){
                    this.setState({
                        onoff11:true
                    })
                    return 
                    // return true
                }else{
                    this.setState({
                        onoff11:false
                    })
                    return 
                    // return false
                }
            }
    }
    reg=()=>{
        let {registerToggle}=this.props;
        registerToggle();
        // this.refs.regi.parentNode.style.height='280px';
        // this.refs.regi.style.opacity="1";
   
    }
    rec=()=>{
        let {recoverToggle}=this.props;
        recoverToggle();
        // this.refs.reco.parentNode.style.height='183px';
        // this.refs.reco.style.opacity="1";
    }
    
    render() {
        let {val_p,val_u,onoff11}=this.state;
        console.log(onoff11)
        let link= onoff11 ? <Link onClick={this.click} to="/homepage">
                            <button onClick={this.click} className="btn btn-block btn-primary btn-default">Login</button> 
                        </Link>
                      :<button onClick={this.click} className="btn btn-block btn-primary btn-default">Login</button>;
        return (
            <div id="body_login">            
                      <div id="loginform" ref="login_b">
                  <p>Enter username and password to continue.</p>
                          <div className="input-group input-sm" ref="nn" onBlur={this.blur}>
                              <span className="input-group-addon"><i className="fa fa-user"></i></span><input onChange={this.change} className="form-control" type="text" value={val_u} id="username" placeholder="Username" />
                          </div>
                          <div className="input-group" ref="nn1" onBlur={this.blur}>
                              <span className="input-group-addon"><i className="fa fa-lock"></i></span><input onChange={this.change} className="form-control" type="password" value={val_p} id="password" placeholder="Password" />
                          </div>
                          <div className="form-actions clearfix">
                              <div className="pull-left" onClick={this.reg}>
                                  <a style={{cursor:'pointer'}} className="flip-link to-register blue">Create new account</a>
                              </div>
                              <div className="pull-right" onClick={this.rec}>
                                  <a style={{cursor:'pointer'}} className="flip-link to-recover grey">Lost password?</a>
                              </div>
                              <p ref="change">
                              {/* {link} */}
                              <Link onMouseDown={this.click} to={onoff11?"/homepage":""}>
                                <button className="btn btn-block btn-primary btn-default">Login</button> 
                            </Link>
                              {/* <Link onClick={this.click} to="/index"> */}
                                {/* <input onClick={this.click} type="button" className="btn btn-block btn-primary btn-default" value="Login" /> */}
                                {/* <button onClick={this.click} className="btn btn-block btn-primary btn-default">Login</button> */}
                              {/* </Link> */}
                              </p>
                          </div>
                          
                          <div className="footer-login">
                              <div className="pull-left text">
                                  Login with
                              </div>
                              <div className="pull-right btn-social">
                                  <a className="btn btn-facebook" style={{cursor:'pointer'}}><i className="fa fa-facebook"></i></a>
                                  <a className="btn btn-twitter" style={{cursor:'pointer'}}><i className="fa fa-skype"></i></a>
                                  <a className="btn btn-google-plus" style={{cursor:'pointer'}}><i className="fa fa-google-plus"></i></a>
                              </div>
                          </div>
    
                      </div>
                      {/* <form ref="reco" id="recoverform">
                        <Recover {...{
                            recoverBack:this.recoverBack,
                            rec:this.rec,
                            reg:this.reg
                        }} />
                      </form>
                      <form ref="regi" id="registerform">
                        <Register {...{
                            registerBack:this.registerBack,
                            rec:this.rec,
                            reg:this.reg,
                            addInfor:this.addInfor
                        }} />
                      </form> */}
              
            </div>
            
        )
    }
}
 
export default Login;