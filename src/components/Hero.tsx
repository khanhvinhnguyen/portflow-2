import React from 'react'

const Hero = () => {
  return (
    <div id='about'>
      <div className='flex items-center justify-center relative py-20 px-8 z-10 clip-path-custom-polygon'>
        {/* Hero background animation */}
        <div>
        </div>

        {/* Hero content */}
        <div className="relative flex justify-between items-center w-full max-w-[1100px] md:flex-row flex-col">
          <div id='Left' className="flex flex-col items-centerw-full order-2 mb-8 md:order-1 md:mb-0 md:flex-row">
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-0 text-white md:text-center sm:mb-2'>
              Hi, my name is <br/>Vinh Nguyen
            </h1>
            <p className='text-white text-lg md:text-2xl'>
              I'm a software developer with a passion for creating innovative solutions.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero