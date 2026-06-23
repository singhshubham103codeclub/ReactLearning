import React from "react";
import 'remixicon/fonts/remixicon.css';
import Arrow from "./Arrow";
import HeroText from "./HeroText";
const Leftcontent = () => {
  return (
    <div className=" h-full w-1/3 flex flex-col justify-between gap-4 p-6">
    <HeroText/>
    <Arrow/>
    </div>

  )
}

export default Leftcontent