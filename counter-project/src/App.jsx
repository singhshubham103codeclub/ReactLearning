import React from 'react'
import { useState } from 'react'
const App=()=>{
  const [count,setcount]=useState(0)
  const incriment=()=>{
    setcount(count+1)
  }
  const decriment=()=>{
    setcount(count-1)
  }
  const Reset=()=>{
    setcount(0)
  }
  return(
    <div class=''>
      <h1>value of counter{count}</h1>
      <button onClick={incriment}>Increment</button>
      <button onClick={decriment}>Decriment</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}
export default App
