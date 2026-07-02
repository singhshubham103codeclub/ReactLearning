// Import React for JSX support in this component
import React from "react";

// Import routing components from react-router-dom
import { Routes, Route } from 'react-router-dom'

// Import page components to render for each route
import Home from './pages/home.jsx'
import Contact from './pages/contact.jsx'
import About from './pages/About.jsx'

// Import the Navbar component used for navigation
import Navbar from './pages/component/Navbar.jsx'

// Define the App component as a functional component
const App = () => {
  return (
    <div>
      {/* Render the navigation bar at the top */}
      <Navbar />

      {/* Define the route tree for this app */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />
        {/* Route for the contact page */}
        <Route path="/contact" element={<Contact />} />
        {/* Route for the about page */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

// Export App as the default component from this module
export default App