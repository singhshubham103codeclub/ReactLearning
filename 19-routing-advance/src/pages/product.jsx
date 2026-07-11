import React from "react";
import { Link, Outlet } from "react-router-dom";

// This page acts as a parent route for product sub-pages.
// It shows links to child routes and renders the selected child with <Outlet />.
const Product = () => {
    return (
        <div>
            <div className="flex justify-center gap-10 py-10">
                <Link className="text-xl font-light" to='/product/Mens'>Men</Link>
                <Link className="text-xl font-light" to='/product/Women'>Women</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Product