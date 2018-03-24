
let data={ 
    checkState:[
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
            Dept:'Facility',
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
    ]
 }
 
const reducer=(state=data,action)=>{
    switch(action.type){
        case "CHANGECHECKED":
            var arr1=JSON.parse(JSON.stringify(state)).checkState;
            arr1.forEach((e,i)=>{
                if(e.ID==action.id){
                    e.checked=false;
                }
            });
            arr1=arr1.filter((e,i)=>{
                return e.checked
            })
            return {checkState:arr1};
        case "CHANGECHECKEDTRUE":
            var arr1=JSON.parse(JSON.stringify(state)).checkState;
            arr1.forEach((e,i)=>{
                arr1.forEach((e,i)=>{
                    if(e.ID==action.id){
                        e.checked=true;
                    }
                })
            })
            return {checkState:arr1};
        case "ADDDATA":
            var arr1=JSON.parse(JSON.stringify(state)).checkState;
                arr1.push(action.newd);
            return {checkState:arr1};
        default:
            return state;
    }
}


function changechecked(id){
    return {
        type:"CHANGECHECKED",
        id
    }
}
function changecheckedtrue(id){
    return {
        type:"CHANGECHECKEDTRUE",
        id
    }
}
function addData(newd){
    return {
        type:"ADDDATA",
        newd
    }
}

export {reducer,changechecked,changecheckedtrue,addData}