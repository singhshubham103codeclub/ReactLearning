import React from "react";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import { Route,Routes } from "react-router-dom";
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Notfound from './pages/notfound.jsx'
import Product from "./pages/product.jsx";
import Mens from "./pages/Mens.jsx";
import Women from "./pages/womens.jsx";

//simple nested routing
// const App=()=>{
//   return (
//     <div className="h-screen bg-black text-white">
//       <Navbar/>
//       <Routes>
//         <Route path="/"element={<Home/>}/>
//         <Route path="/About"element={<About/>}/>
//          <Route path="/contact"element={<Contact/>}/>
//          <Route path="/Product"element={<Product/>}/>
//          <Route path="/Product/Mens"element={<Mens/>}/>
//          <Route path="/Product/Women"element={<Women/>}/>
//           <Route path="*"element={<Notfound/>}/>
//       </Routes>
//       <Footer/>
      
//     </div>
//   )
// }

// better way to nested routing
const App=()=>{
  return (
    <div className="h-screen bg-black text-white">
      <Navbar/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/About"element={<About/>}/>
         <Route path="/contact"element={<Contact/>}/>
         <Route path="/Product"element={<Product/>}>
         <Route path="Mens"element={<Mens/>}/>
         <Route path="Women"element={<Women/>}/>
          </Route>
          <Route path="*"element={<Notfound/>}/>
      </Routes>
      <Footer/>
      
    </div>
  )
}
export default App