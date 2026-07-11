import React from "react";
import { useNavigate } from "react-router-dom";

// This page shows information about the app or the developer.
const About = () => {
    return (
        <div>
            <h1>About page</h1>
        </div>
    )
}

// Example of programmatic navigation using useNavigate.
// const About = () => {
//     const navigate = useNavigate()
//     const btnclick = () => {
//         navigate('/')
//     }
//     return (
//         <div>
//             <button onClick={btnclick} className="font-medium bg-amber-300 px-5 py-2 rounded-2xl curser-pointer active-">Go To Home page</button>
//             <h1>About page</h1>
//         </div>
//     )
// }

export default About