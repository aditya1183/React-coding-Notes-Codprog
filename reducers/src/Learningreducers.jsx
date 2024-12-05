import React from 'react'
import { useState  , useReducer} from 'react'
function reducer(count, action) {
    if (action.type === "INCREASE") {
    return count + 1;
    }
    if (action.type === "RESET") {
    return 0;
    }
    if (action.type === "DECREASE") {
    return count - 1;
    }
    return count;
    }

function Learningreducers() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
    <div>
    <h1>{count}</h1>
    
    <div style={{
       margin:"3rem",
       padding:"1rem"
    }}>
    <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>
    <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    <button onClick={() => dispatch({ type: "DECREASE" })}>Decrease</button>
    </div>
    </div>
    );
}

export default Learningreducers