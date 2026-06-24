import Reacr from 'react'
import React, {useState} from 'react'

// ordeniry way

// const App=()=>{
//   let a=20
//   const changeA=()=>{
//     console.log({a})
//     a++
//     console.log({a})
//   }
//   return(
//     <div>
//       <h1>value of a {a}</h1>
//       <button onClick={changeA}>click </button>
//     </div>
//   )
// }
//------------------------------------------------------------
// useState way, changing value through useState
const App=()=>{
  const [num,setNum]=useState(10)
  const [arr,setarr]=useState([10,5,15,20])
  const changenum=()=>{
    setNum(num+1)
    setarr([5,7,6,8])
  }
  return(
      <div>
      <h1>value of num {num}<br/>value of arr{arr}</h1>
      <button onClick={changenum}>click </button>
    </div>
  )
}
export default App