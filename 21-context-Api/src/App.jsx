import { useState } from "react";
import Navbar from "./component/navbar";
const App =()=>{
  const [theme]=useState('light')
  return (
    <div>
      <Navbar theme={theme}>
        <h3>hello</h3>
        <h3>hii</h3>
      </Navbar>
    </div>
  )
}
export default App
