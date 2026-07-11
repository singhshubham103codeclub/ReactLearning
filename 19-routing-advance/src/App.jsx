import React from "react";
import Navbar from "./component/Navbar.jsx";
import Navbar2 from "./component/Navbar2.jsx";
import Footer from "./component/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Notfound from './pages/notfound.jsx'
import Product from "./pages/product.jsx";
import Mens from "./pages/Mens.jsx";
import Women from "./pages/womens.jsx";
import Course from "./pages/courses.jsx";
import Coursedetail from "./pages/coursedetail.jsx";

// This is the main app layout.
// It shows the shared navbar/footer and switches between pages using routes.
const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      {/* Shared top navigation */}
      <Navbar />
      {/* Extra navigation buttons for browser-style movement */}
      <Navbar2 />

      {/* Route definitions for the whole app */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />

        {/* Static page routes */}
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Course routes */}
        <Route path="/course" element={<Course />} />
        <Route path="/course/:courseId" element={<Coursedetail />} />

        {/* Nested product routes */}
        <Route path="/Product" element={<Product />}>
          <Route path="Mens" element={<Mens />} />
          <Route path="Women" element={<Women />} />
        </Route>

        {/* Fallback route for unknown pages */}
        <Route path="*" element={<Notfound />} />
      </Routes>

      {/* Shared footer */}
      <Footer />
    </div>
  )
}

export default App