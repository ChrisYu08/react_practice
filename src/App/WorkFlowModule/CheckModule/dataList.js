import React, { Component } from 'react';

class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    remove=(ev)=>{
        let {changechecked}=this.props;
        let removeId=ev.target.parentNode.parentNode.children[2].innerText;
        changechecked(removeId)
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
 
export default DataList;