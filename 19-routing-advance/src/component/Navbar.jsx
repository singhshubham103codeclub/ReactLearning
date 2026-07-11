import React from "react";

// This component renders the main top navigation bar.
// It links to the main sections of the app.
const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-400 justify-between'>
      <h2 className="text-xl font-bold">SHUBH</h2>
      <div className="flex gap-8">
        {/* Main page links */}
        <a className="tet-xl font-bold" href="/">HOME</a>
        <a className="tet-xl font-bold" href="/about">ABOUT</a>
        <a className="tet-xl font-bold" href="/contact">CONTACT</a>
        <a className="tet-xl font-bold" href="/Product">PRODUCT</a>
        <a className="tet-xl font-bold" href="/course">COURSE</a>
      </div>
    </div>
  )
}

export default Navbar