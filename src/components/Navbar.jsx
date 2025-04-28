import React from 'react'
import Logo from "../assets/logo.png"

function Navbar() {
    return (
        <div >
            <nav className="flex items-center justify-between p-6">
                <div className="text-2xl max-sm:mr-4 font-bold text-blue-600">
                    <img src={Logo} alt="" />
                </div>

                <div className="space-x-12 hidden md:flex">
                    <a href="#home" className="text-[#FEFEFE] text-xl font-semibold font-dm-sans">Home</a>
                    <a href="#about-us" className="text-[#FEFEFE] text-xl font-semibold font-dm-sans">About Us</a>
                    <a href="#plans" className="text-[#FEFEFE] text-xl font-semibold font-dm-sans">Plans</a>
                    <a href="#testimonials" className="text-[#FEFEFE] text-xl font-semibold font-dm-sans">Testimonials</a>
                    <a href="#privacy-policy" className="text-[#FEFEFE] text-xl font-semibold font-dm-sans">Privacy Policy</a>
                    <a href="#more" className="text-[#FEFEFE] text-xl font-semibold font-dm-sans">More</a>
                </div>

                <button className="bg-[#FEFEFE] text-black p-3 rounded-4xl w-52 text-2xl font-semibold font-dm-sans  hover:cursor-pointer max-sm:p-1 max-sm:text-lg">
                    Get Started
                </button>
            </nav>

        </div>
    );
}

export default Navbar;
