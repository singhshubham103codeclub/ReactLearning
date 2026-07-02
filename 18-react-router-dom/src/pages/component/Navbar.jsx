// Import React for JSX support in this component
import React from "react";

// Import Link from react-router-dom for navigation links
import { Link } from "react-router-dom";

// Define the Navbar component as a functional component
const Navbar = () => {
  return (
    <div className='nav'>
      {/* App title or brand in the navigation bar */}
      <h3>React Router Dom</h3>

      {/* Navigation links rendered using Link components */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  )
}

// Export Navbar as the default component from this module
export default Navbar