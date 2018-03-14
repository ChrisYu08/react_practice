import React from 'react';
import ReactDOM from 'react-dom';
import LoginModule from './App/LoginModule/index';
// import Index from './App/Index';
// import IndexModule from './App/IndexModule/index';
import App from './App/index';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'
ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={LoginModule} />
            <Route path="/homepage" component={App} />   
        </Switch>   
    </Router>,
     document.getElementById('root')
);
if(module.hot){
    module.hot.accept();
}