import React from 'react';
import { FaAward, FaArrowRight } from "react-icons/fa"

const About = () => {
  return (
    <div className="pt-16 pb-16">
        {/* Define grid */}
        <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* 1st Part */}
        <div>
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
                    <FaAward className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-xl text-black font-semibold">Guaranteed and certified</h1>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800">Online learning wherever and whenever.</h1>
            <p className='mt-4 text-gray-600'>AspireAcademy offers flexible online learning, allowing you to study at your own pace, wherever and whenever you choose. Whether you&apos;re advancing your career or exploring new skills, our courses are designed to help you succeed.</p>
            <button className="flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white">
                <span>Learn More</span>
                <FaArrowRight />
            </button>
        </div>
        {/* 2nd part */}
        <div>
            <div>
                <h1 className="text-7xl lg:text-9xl font-bold text-black text-opacity-5">01</h1>
                <div className="-mt-10">
                    <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold">Flexible Schedule</h1>
                    <p className="w-[90%] lg:w-[70%] text-base text-black text-opacity-60">AspireAcademy offers a flexible schedule, empowering you to balance learning with work, family, and personal goals, ensuring education fits seamlessly into your life.</p>

                </div>
            </div>
            <div className="mt-8 w-full">
                <h1 className="text-7xl lg:text-9xl font-bold text-black text-opacity-5">02</h1>
                <div className="-mt-10">
                    <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold">Pocket Friendly</h1>
                    <p className="w-[90%] lg:w-[70%] text-base text-black text-opacity-60">AspireAcademy provides affordable courses designed to fit your budget, ensuring high-quality education is accessible to everyone.</p>

                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About