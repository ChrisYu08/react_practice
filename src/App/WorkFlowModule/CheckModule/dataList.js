import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changechecked} from './../../../Reducer_redux/index';
class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    remove=(ev)=>{
        let {changechecked,dispatch,ID}=this.props;
        let removeId=ev.target.parentNode.parentNode.children[2].innerText;
        // changechecked(removeId
        dispatch(changechecked(ID))
    }
    render() { 
        let {Dept,ID,formName,time,num}=this.props;
        return (
            <tr style={{display:(num>5?"none":'')}}>
                <td><input type="checkbox" /></td>
                <td>{Dept}</td>
                <td>{ID}</td>
                <td>{formName}</td>
                <td>{time}</td>
                <td>签核中</td>
                <td>
                    <a style={{cursor:"pointer"}}>查看</a> | <a onClick={this.remove} style={{cursor:"pointer"}}>删除</a>
                </td>
            </tr>
        )
    }
}

export default connect(state=>state,(dispatch)=>{
    return {changechecked,dispatch:dispatch}
})(DataList)
// export default DataList;