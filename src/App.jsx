import { useState } from "react"

const  App =()=> {
  const [count , setCount]=useState(0)
  const ADD = ()=>{
    setCount(count + 1)
    
  }

  const LESS = ()=>{
    if (count < 1) {
      console.log("set count wala kam nh krwana");
      return
    }
    setCount(count - 1)
  }

  const RESET= ()=>{
    setCount(0) 
  }
  return(
    <>
    <h1>COUNTER APP</h1>
    <h1 >{count}</h1>
   
   <button  onClick={ADD}  className="btn btn-info  ">ADD  <i className="fa-solid fa-plus text-light"></i></button>
   
   <button onClick={RESET}  className="btn btn-danger m-3  ">RESET </button>
    <button onClick={LESS}  className="btn btn-warning  ">LESS  <i className=" fa-solid fa-minus text-light"></i></button>
    </>
  )
}

export default App
