import React,{Component}from 'react';
import "../Css/bootstrap.min.css";
import "../Css/font-awesome.css";
import "../Css/fullcalendar.css";
import '../Css/jquery.jscrollpane.css';
import "../Css/unicorn.css";
import "./index.css";
import Header from './header';
import UserNav from './user-nav';
import Switcher from './switcher';
import Sidebar from './sidebar';
import FooterRow from './footerRow';
import HomePage from './HomePageModule/index';
import Check from './WorkFlowModule/CheckModule/index';
import Request from './WorkFlowModule/RequestModule/index';
import Invoice from './Invoice/index';
import TeamMessage from './TeamMessage/index';

import {connect} from 'react-redux';
import {changechecked} from './../Reducer_redux/index';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            arr:[
                {   ID:'TE25184',
                    Dept:'MM',
                    FormName:'Return Materials Authorization',
                    time:'Tue Mar 06 2012 11:08:51',
                    checked:true
                },
                {   ID:'TE25185',
                    Dept:'IS',
                    FormName:'IS 资源申请单',
                    time:'Sun Jun 21 2014 14:25:20',
                    checked:true
                },
                {   ID:'TE25186',
                    Dept:'MOLD',
                    FormName:'Spare Parts Strap Request Form',
                    time:'Tue Aug 16 2013 14:25:20',
                    checked:true
                },
                {   ID:'TE25187',
                    Dept:'Engineering',
                    FormName:'Drawings Control Request Form',
                    time:'Tue Aug 16 2013 14:25:20',
                    checked:true
                },
                {   ID:'TE25188',
                    Dept:'Facility	',
                    FormName:'厂务需求申请单',
                    time:'Sun Jun 21 2014 14:25:20',
                    checked:true
                },
                {   ID:'TE25189',
                    Dept:'EHS',
                    FormName:'PPE发放申请单',
                    time:'Tue Mar 06 2012 11:08:51',
                    checked:true
                },
                {   ID:'TE25190',
                    Dept:'EHS',
                    FormName:'PPE发放申请单',
                    time:'Tue Mar 06 2012 11:08:51',
                    checked:true
                },
                {   ID:'TE25191',
                    Dept:'EHS',
                    FormName:'PPE发放申请单',
                    time:'Tue Mar 06 2012 11:08:51',
                    checked:true
                },
                {   ID:'TE25192',
                    Dept:'EHS',
                    FormName:'PPE发放申请单',
                    time:'Tue Mar 06 2012 11:08:51',
                    checked:true
                }
            ],
            num:4
         }
    }
    changechecked=(id)=>{
        let {arr}=this.state;
        let arr1=arr;
        arr1.forEach((e,i)=>{
            if(e.ID==id){
                e.checked=false;
            }
        })
        this.setState({
            arr:arr1
        })
    }
    changecheckedtrue=(id)=>{
        let {arr}=this.state;
        let arr1=arr;
        arr1.forEach((e,i)=>{
            if(e.ID==id){
                e.checked=true;
            }
        })
        this.setState({
            arr:arr1
        })
    }
    addData=(newd)=>{
        let {arr}=this.state;
        let arr1=arr;
        arr1.push(newd);
        this.setState({
            arr:arr1
        })
    }
   numFn=(num1)=>{
    this.setState({
        num:num1
    })
   }
    render() { 
        let {num}=this.state;
        return (
            <div id="body_index" data-color="grey" className="flat">
		        <div id="wrapper">
                    <Header />
                    <UserNav num={num}/>
                    <Switcher />
                    <Sidebar />

                    <Switch>
                        
                        <Route 
                            path="/homepage/workflow/check"
                            render={
                               ()=>{
                                   return <Check 
                                            // checkState={this.state.arr}
                                            // changechecked={this.changechecked}
                                            // changecheckedtrue={this.changecheckedtrue}
                                            />
                               }
                            }
                            />
                        <Route 
                            path="/homepage/workflow/request" 
                            render={
                                ()=>{
                                    return <Request 
                                        // addData={this.addData}
                                    />
                                }
                            }
                        />
                        <Route 
                            path="/homepage/invoice"
                            component={Invoice}
                        />
                        <Route 
                            path="/homepage/msg"
                            render={()=>{
                                return <TeamMessage numFn={this.numFn} />
                            }}
                        />
                        <Route exact path="/homepage" 
                            render={()=>{
                                return <HomePage 
                                            // checkState={this.state.arr}
                                        />
                        }} />
                        
                    </Switch>
                    <FooterRow />
                </div>
            </div>
        )
    }
}

export default connect(state=>state,(dispatch)=>{
    return {changechecked,dispatch:dispatch}
})(App)
// export default App;