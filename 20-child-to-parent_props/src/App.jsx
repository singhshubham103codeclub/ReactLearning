import React, { useState } from "react";
import Navbar from "../../19-routing-advance/component/navbar";
const App = () => {
  const [theme,setTheme]=useState("light")
    return (
        <div>

            <h1>Theme is{theme}</h1>
            <Navbar theme={theme} settheme={setTheme}/>
        </div>
    )
}

export default App