import React,{useState} from "react";


const ReactHook = ()=>{
    const [ counter,setCounter]= useState(0)

    return(
        <div>
            <h1>react hook da state yaratilishi</h1>
            <br></br>
            <h1> React hook state :{counter} </h1>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={()=>setCounter(counter-1)}>-</button>
        </div>
    )
}


export default ReactHook;