import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const App = () => {
  const [num,setNum] = useState(0)
  useEffect(()=>{
    console.log("useEffect called")
  },[num])
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>
        Increment
      </button>
    </div>
  )
}
export default App