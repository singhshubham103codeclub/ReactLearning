import React from 'react'
import { useState } from 'react'
const App = () => {
  const[Num, setNum] = useState(10)
  const clickedbtn = () => {
    console.log(Num)
    setNum(20)
    console.log(Num)
  }
  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={clickedbtn}>click</button>
    </div>
  )
}
export default App