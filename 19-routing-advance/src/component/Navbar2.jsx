import React from 'react'
import { useNavigate } from 'react-router-dom'

// This component provides simple navigation buttons for moving through pages.
const Navbar2 = () => {
    const navigate = useNavigate()

    return (
        <div className='py-2 px-5 bg-cyan-800'>
            {/* Go to the home page */}
            <button
                onClick={() => {
                    navigate('/')
                }}
                className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Return to Home Page
            </button>

            {/* Go to the previous page in history */}
            <button
                onClick={() => {
                    navigate(-1)
                }}
                className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Back
            </button>

            {/* Go to the next page in history */}
            <button
                onClick={() => {
                    navigate(+1)
                }}
                className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Next
            </button>
        </div>
    )
}

export default Navbar2