import React from 'react'
import images from '../images/images.jpg'

function Navbar() {
    return (
        <>
            <div
                className='border border-[#000] bg-[#489fb5] flex flex-col items-center p-5 group'>
                <div className='flex items-center gap-4 transition-all duration-300'>
                    <h1 className='text-white text-xl p-3 transition-all duration-300 group-hover:order-2 group-hover:translate-x-4'
                    >Rick and Morty Api
                    </h1>
                    <img
                        className='w-24 h-16 border rounded-xl transition-all duration-300 group-hover:order-1 group-hover:-translate-x-4'
                        src={images} alt="" />
                </div>
            </div>
        </>
    )
}

export default Navbar
