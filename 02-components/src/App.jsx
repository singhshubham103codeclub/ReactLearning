import React from "react";
import Card from "../components/card";
import Navbar from "../components/navbar";
const App = () => {
  return (
    <div>
      <div className="card">
<h1>Card</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
      </div>
      <div className="card">
<h1>Card</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
      </div>
       <Card />
       <Navbar />
    </div>
  
  )
}
export default App;