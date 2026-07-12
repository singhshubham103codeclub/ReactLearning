import React from "react";

// This component renders the main top navigation bar.
// It links to the main sections of the app.
const Navbar = (props) => {
    console.log(props)
   const changetheme=()=>{
        props.settheme('Dark')
    }
  return (
   <div>
    <p>{props.theme}</p>
    <button onClick={changetheme}>Change Theme</button>
   </div>
    
  )
}

export default Navbar