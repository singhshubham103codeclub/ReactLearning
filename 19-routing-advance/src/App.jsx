import React from "react";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
const App=()=>{
  return (
    <div className="h-screen bg-black text-white">
      <Navbar/>
      <Footer/>
    </div>
  )
}
export default App