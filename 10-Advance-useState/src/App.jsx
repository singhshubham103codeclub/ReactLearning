import React from 'react'
import { useState } from 'react'
//obj opreation--------------------------------------
0
// const App = () => {
//   const[Num, setNum] = useState({user:'shubh',age:21})
//   const clickedbtn = () => {
//     console.log(Num)
//     // setNum(Num+5)
//     //setNum(10) sate nahi change hua hai react re-render nahi karaega
//     const newNum={...Num}//  now this not refer those storage that is refer Num, it crated new storage with the same vslue of num 
//     newNum.user='Anurag'
//     newNum.age=22
//     setNum(newNum)
//     console.log(newNum)// now the value became {user:'shubh',age:21}->{user: 'Anurag', age: 21}, but Num value is still same ->{user:'shubh',age:21}
//   }
//   return (
//     <div>
//       <h1>{Num.user} {Num.age}</h1>
//       <button onClick={clickedbtn}>click</button>
//     </div>
//   )
// }

// Arrray opreation------------------------------------------------------------------------------------------------
 
// const App = () => {
//   const[Num, setNum] = useState([10,20,30,40])
//   const clickedbtn = () => {
//     const newNum=[...Num]
//     console.log(Num)
//     newNum.push(50)
//     console.log(newNum)
//     setNum(newNum)
//     }
//   return (
//     <div>
//       <h1>{Num}</h1>
//       <button onClick={clickedbtn}>click</button>
//     </div>
//   )
// }

//BatchUpadate method-------------------------------------------------------------------------------------------------
const App = () => {
  const[Num, setNum] = useState(10)
  const clickedbtn = () => {
    // setNum(Num+1)//update ke karan Num ki value identify nahi kar pa raha hai qiick -Num only upadate by one  
    // setNum(Num+1)
    // setNum(Num+1)
    // best way of Batch update
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    }
  return (
    <div>
      <h1>{Num}</h1>
      <button onClick={clickedbtn}>click</button>
    </div>
  )
}
export default App