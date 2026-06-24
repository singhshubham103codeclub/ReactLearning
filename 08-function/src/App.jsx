import React from "react";
// import './App.css'

// const App=()=>{
//   // here the a function that is used in onclick event 
//   const btnclick=()=>{
//     console.log("button is clicked")
//   }
//   return(
//     <div>
//       <button onClick={btnclick}>click her</button>
//       <button onClick={btnclick}>change user</button>
//     </div>   
//   )
// }
// export default App

// const App=()=>{
//   const inputchange=()=>{
//     console.log("input typing")
//   }
//   return (
//     <div>
//       <div className="input-wrapper">
//         <label htmlFor="nameInput">Your name</label>
//         <input onChange={inputchange} id="nameInput" className="styled-input" type="text" placeholder="Enter your name" />
//       </div>
//     </div>
//   )
// }
// export default App

// second method define fuction within the event

// const App=()=>{
  
//   return (
//     <div>
//       <div className="input-wrapper">
//         <label htmlFor="nameInput">Your name</label>
//         <input onChange={function(){
//           console.log('user typing')
//         }} id="nameInput" className="styled-input" type="text" placeholder="Enter your name" />
//       </div>
//     </div>
//   )
// }
// export default App


// here we are passing a function within the event fuction

// const App=()=>{
//   const inputchanging=()=>{
//     console.log('user is typing')
//   }
//   return (
//     <div>
//       <div className="input-wrapper">
//         <label htmlFor="nameInput">Your name</label>
//         <input onChange={function(){
//           inputchanging()
//         }} id="nameInput" className="styled-input" type="text" placeholder="Enter your name" />
//       </div>
//     </div>
//   )
// }
// export default App

// here we passing value of object from event func to inputchange func

const App=()=>{
  const inputchanging=(valu)=>{
    console.log(valu)
  }
  return (
    <div>
      <div className="input-wrapper">
        <label htmlFor="nameInput">Your name</label>
        <input onChange={function(elem){
          inputchanging(elem.target.value)
        }} id="nameInput" className="styled-input" type="text" placeholder="Enter your name" />
      </div>
    </div>
  )
}
export default App