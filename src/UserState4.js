import React,{act, useReducer} from "react";

const initialState=0;
function reducer(state, action){
    if(action.type === 'increment'){
        return state +1;
    }
    if(action.type === 'decrement'){
        return state -1;
    }
}

function UserState4(){
    const[state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch({type:"increment"})}>Add</button> {/* It is callback as a function is passsed inside a function*/}
            <button onClick={() => dispatch({type:"decrement"})}>Subtract</button>
        </div>
    )
}

export default UserState4