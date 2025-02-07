import React from 'react'

const HeroContent = () => {
  return (
    <div>
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white">Best Online Platform For Education.</h1>
        {/* Description */}
        <p className="mt-6 text-sm md:text-base text-white text-opacity-60">AspireAcademy is your gateway to a world of learning, growth, and opportunity. We offer expertly designed courses, personalized learning experiences, and a supportive community to help you achieve your goals. Whether you&apos;re advancing your career, mastering a new skill, or exploring a passion, AspireAcademy provides the tools and guidance to turn aspirations into achievements. Start your journey today and unlock your full potential.</p>
        {/* Buttons */}
        <div className="mt-8 flex items-center space-x-4">
            <button className="button__cls bg-green-700 hover:bg-green-900">Get Started</button>
            <button className="button__cls bg-yellow-700 hover:bg-yellow-900">Learn More</button>
        </div>
        {/* Stats */}
        <div className="flex items-center flex-wrap space-x-16 mt-8">
            <div>
                <p className="md:text-xl lg:text-2xl text-base text-white font-bold">260+</p>
                <p className="w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg"></p>
                <p className="md:text-lg text-sm text-white text-opacity-70">Tutors</p>
            </div>
            <div>
                <p className="md:text-xl lg:text-2xl text-base text-white font-bold">2260+</p>
                <p className="w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-lg"></p>
                <p className="md:text-lg text-sm text-white text-opacity-70">Students</p>
            </div>
            <div>
                <p className="md:text-xl lg:text-2xl text-base text-white font-bold">60+</p>
                <p className="w-[100px] h-[3px] bg-pink-600 mt-2 mb-2 rounded-lg"></p>
                <p className="md:text-lg text-sm text-white text-opacity-70">Courses</p>
            </div>
        </div>
    </div>
  )
}

export default HeroContent