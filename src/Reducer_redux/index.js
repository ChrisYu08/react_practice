
const reducer=(state=1,action)=>{
    switch(action.type){
        case "ADD":
            state++
            return state;
        default:
            return state;
    }
}

export function add(txt){
    return {
        type:"ADD",
        txt
    }
}

export {reducer}