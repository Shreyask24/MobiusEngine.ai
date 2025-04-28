import React from 'react'
import Trends from "../assets/trends.png"
import Book from "../assets/book.png"

function Hero() {
    return (
        <section className="flex items-center max-sm:flex-col justify-evenly py-20 px-6">
            <div className='w-[45%] max-sm:w-full items-start justify-start'>

                <h1 className="text-[80px] max-sm:text-4xl font-semibold font-sora md:text-6xl text-[#FEFEFE] mb-6">
                    Land job interviews <span className="text-blue-600"> 10x </span>faster
                </h1>
                <p className="text-[#FEFEFE] w-[80%] mb-8 font-dm-sans">
                    Custom-built resumes that match your goals, keywords, and recruiter expectations.
                </p>

                <div className="space-x-4">
                    <button className="bg-[#FEFEFE] text-black p-4 rounded-4xl w-52 font-semibold hover:bg-[#022183] hover:text-[#FEFEFE] hover:cursor-pointer text-xl font-dm-sans transition-all duration-300 ease-in-out">
                        Get Started →
                    </button>
                </div>
            </div>

            <div className='max-sm:mt-5 relative'>
                <img src={Trends} alt="" />
                <div className='relative'>
                    <div className='absolute bottom-0 left-0 flex items-center gap-3 sm:gap-5 max-w-xs'>
                        <div className='relative ml-58'>
                            <div className="relative p-5 border-2 border-[#FEFEFE] rounded-full shadow-md">
                                {/* Glass effect background layer */}
                                <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full"></div>

                                {/* Book image on top */}
                                <img
                                    src={Book}
                                    alt="Book"
                                    className="relative z-10 w-full h-full object-contain"
                                />
                            </div>
                            <div className='bg-[#FEFEFE] absolute -left-1 top-15 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full rotate-180'>
                                ↗
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-[#FEFEFE] font-dm-sans mt-4 ml-12"><a href=""> Download Free E-Book</a></p>
            </div>
        </section>
    );
}

export default Hero;
