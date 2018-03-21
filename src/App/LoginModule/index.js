import React, { Component } from 'react';
import Recover from './Recover/index';
import Register from './Register/index';
import Login from './Login/index';
import "../../Css/bootstrap.min.css";
import "../../Css/font-awesome.css";
import '../../Css/unicorn-login.css';
class LoginModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerStatus: false,
            recoverStatus: false,
            loginStatus: true,
            information:{
                // 2016020008:12345
            }
        }
    }
    componentWillMount(){
        if(localStorage.getItem('users')==null){
            localStorage.setItem('users','{"2016020008":"12345"}');

            this.setState({
                information:{2016020008:12345}
            })
        }else{
            let info=JSON.parse(localStorage.getItem('users'));
            this.setState({
                information:info
            })
        }
    }
    addInfor=(name,pass)=>{
        let {information}=this.state;
        information[name]=pass;
        let info1=JSON.stringify(information);
        localStorage.setItem('users',info1);
        // this.setState({
        //     information:information
        // })
    }
    registerToggle=()=>{
        this.setState({
            registerStatus: true,
            loginStatus: false,
            recoverStatus: false
        })
        this.refs.lo.style.height='280px';
    }
    recoverToggle=()=>{
        this.setState({
            recoverStatus: true,
            loginStatus: false,
            registerStatus: false
        })
        this.refs.lo.style.height='183px';
    }
    backHome=()=>{
        this.setState({
            loginStatus: true,
            registerStatus: false,
            recoverStatus: false
        })
        this.refs.lo.style.height='255px';
    }
    render() { 
        return (
            <div>
                <div id="container">
                  <div id="logo">
                      <img src='../img/logo.png'/>
                  </div>
                  <div id="user">
                      <div className="avatar">
                          <div className="inner"></div>
                          <img src="img/demo/av1_1.jpg" />
                      </div>
                      <div className="text">
                          <h4>Hello,<span className="user_name"></span></h4>
                      </div>
                  </div>
                  <div ref="lo" id="loginbox">
                {
                    this.state.loginStatus?
                        <Login 
                        {...{
                            registerToggle:this.registerToggle,
                            recoverToggle:this.recoverToggle,
                            information:this.state.information
                        }} 
                        />:null
                }
                {
                    this.state.registerStatus?
                        <Register
                        {...{
                            backHome:this.backHome,
                            recoverToggle:this.recoverToggle,
                            addInfor:this.addInfor,
                            lo:this.refs.lo
                        }}
                        />:null
                }
                {
                    this.state.recoverStatus?
                        <Recover
                        {...{
                            registerToggle:this.registerToggle,
                            backHome:this.backHome,
                            lo:this.refs.lo
                        }}
                        />:null
                }
                </div>
                </div>
            </div>
        )
    }
}
 
export default LoginModule;