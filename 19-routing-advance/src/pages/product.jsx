import React from "react";
import { Link, Outlet } from "react-router-dom";
// simple nested routing
// const Product=()=>{
//     return (
//         <div>
//             <div className="flex justify-center gap-10 py-10">
//                 <Link className="text-xl font-light" to='/product/Mens'>Men</Link>
//                  <Link className="text-xl font-light" to='/product/Women'>Women</Link>
//             </div>
//             <h1>PRODUCT PAGE</h1>
//         </div>
//     )
// }

// better way to nested routing
const Product=()=>{
    return (
        <div>
            <div className="flex justify-center gap-10 py-10">
                <Link className="text-xl font-light" to='/product/Mens'>Men</Link>
                 <Link className="text-xl font-light" to='/product/Women'>Women</Link>
            </div>
            <Outlet/>
        </div>
    )
}
export default Product 