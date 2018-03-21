import React from 'react';
import ReactDOM from 'react-dom';
import LoginModule from './App/LoginModule/index';
// import Index from './App/Index';
// import IndexModule from './App/IndexModule/index';
import App from './App/index';
import {Provider,connect} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './Reducer_redux/index';
import {
    HashRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';

const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={LoginModule} />
                <Route path="/homepage" component={App} />   
            </Switch>   
        </Router>
    </Provider>,
     document.getElementById('root')
);
if(module.hot){
    module.hot.accept();
}