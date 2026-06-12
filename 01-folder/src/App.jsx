import React from "react";
const App = () => {
  return(
    //this is gave error because we can not return two divs in one component
    // <div id="A">
    //   <h1>App</h1>
    //   <h2>hey</h2>
    // </div>
    // <div id="B">
    //   <h1>App</h1>
    //   <h2>hey</h2>
    // </div>
    
    // to solve this we can wrap both divs in a react fragment
    <>
    <div id="A">
      <h1>App</h1>
      <h2>hey</h2>
    </div>
    <div id="B">
      <h1>App</h1>
      <h2>hey</h2>
    </div>
    </>
  )
}
export default App;