import React from 'react'
import { useReducer } from 'react'


function reducer(state , action){

    if(action.type==="INCREASE"){
        return {...state  , count:state.count+1}

    }


    if(action.type==="DECREASE"){
        return {...state  , count:state.count-1}

    }

    if(action.type==="RESET"){
        return {...state  , count:0}

    }

}


const initialstate={count:0};

function Learningreducer2() {


    const [state , dispatch] =useReducer(reducer , initialstate);

    const handleincrese=()=>{
        dispatch(
            {
                type:"INCREASE"
            }
        )
    }



    const handlereset =()=>{
        dispatch(
            {
                type:"RESET"
            }
        )
    }


    const handledecrese =()=>{
        dispatch(
            {
                type:"DECREASE"
            }
        )
    }


    
  return (
    <>
    <div>Learningreducer2</div>

    <hr/>

    <h2>Counter Application</h2>
    <h2>{state.count}</h2>

    <div className='buttons'>
    <button onClick={handleincrese}>Increase</button>
    <button onClick={handlereset}>Reset</button>
    <button onClick={handledecrese}>Decrease</button>
    </div>
    </>
  )
}

export default Learningreducer2